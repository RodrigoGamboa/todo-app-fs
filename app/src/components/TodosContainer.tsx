import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Todos from "components/Todos";
import { fetchTodos, sendTodo } from "services/apiRequests";
import { Todos as TodosType, addTodo } from "ts/types";

const TodosContainer = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const queryClient = useQueryClient();
  const { data: todos, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchTodos,
  });

  const mutation = useMutation({
    mutationFn: sendTodo,
    onSuccess: (result) => {
      queryClient.setQueryData(["products"], (oldData: TodosType) => [
        ...oldData,
        result,
      ]);
      toast.success("Task created successfully.");
      handleCloseAddModal();
    },
  });

  const handleAddTodo = (values: addTodo) => {
    mutation.mutate(values);
  };

  const handleOpenAddModal = () => {
    setOpenAddModal(true);
  };

  const handleCloseAddModal = () => {
    setOpenAddModal(false);
  };

  return (
    <Todos
      todos={todos}
      isLoading={isLoading}
      addTodo={handleAddTodo}
      openAddModal={openAddModal}
      handleOpenAddModal={handleOpenAddModal}
      handleCloseAddModal={handleCloseAddModal}
    />
  );
};

export default TodosContainer;

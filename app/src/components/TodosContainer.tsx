import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Todos from "components/Todos";
import {
  deleteTask,
  fetchTodos,
  sendTodo,
  updateTask,
} from "services/apiRequests";
import {
  IDeleteTaskAlert,
  IUpdateTask,
  TaskId,
  Todos as TodosType,
  addTodo,
} from "ts/types";

const TodosContainer = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openAlertDialog, setOpenAlertDialog] = useState<IDeleteTaskAlert>({
    taskId: "",
    open: false,
  });
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

  const mutationUpdateTask = useMutation({
    mutationFn: updateTask,
    onSuccess: (result) => {
      queryClient.setQueryData(["products"], (oldData: TodosType) => {
        const prevData = oldData.filter((oldTask) => oldTask.id !== result.id);
        return [...prevData, result];
      });
      toast.success("Task updated!");
    },
  });

  const mutationDeleteTask = useMutation({
    mutationFn: deleteTask,
    onSuccess: (result) => {
      handleCloseAlertDialog();
      queryClient.setQueryData(["products"], (oldData: TodosType) => {
        const prevData = oldData.filter((oldTask) => oldTask.id !== result.id);
        return [...prevData];
      });
      toast.success("Task deleted!");
    },
  });

  const handleAddTodo = (values: addTodo) => {
    mutation.mutate(values);
  };

  const handleUpdateTask = (values: IUpdateTask) => {
    mutationUpdateTask.mutate(values);
  };

  const handleDeleteTask = (id: TaskId) => {
    mutationDeleteTask.mutate(id);
  };

  const handleOpenAddModal = () => {
    setOpenAddModal(true);
  };

  const handleCloseAddModal = () => {
    setOpenAddModal(false);
  };

  const handleOpenAlertDialog = (taskId: TaskId) => {
    setOpenAlertDialog({
      taskId,
      open: true,
    });
  };

  const handleCloseAlertDialog = () => {
    setOpenAlertDialog({
      taskId: "",
      open: false,
    });
  };

  return (
    <Todos
      todos={todos}
      isLoading={isLoading}
      addTodo={handleAddTodo}
      updateTask={handleUpdateTask}
      deleteTask={handleDeleteTask}
      openAddModal={openAddModal}
      openAlertDialog={openAlertDialog}
      handleOpenAddModal={handleOpenAddModal}
      handleCloseAddModal={handleCloseAddModal}
      handleOpenAlertDialog={handleOpenAlertDialog}
      handleCloseAlertDialog={handleCloseAlertDialog}
    />
  );
};

export default TodosContainer;

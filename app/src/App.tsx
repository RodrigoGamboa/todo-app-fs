import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import TodosContainer from "components/TodosContainer";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TodosContainer />
      <ToastContainer autoClose={3000} />
    </QueryClientProvider>
  );
}

export default App;

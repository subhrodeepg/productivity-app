import { Route, Routes } from "react-router-dom";

import AllTodosPage from "./pages/AllTodosPage";
import NewTodoPage from "./pages/NewTodoPage";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllTodosPage />} />
        <Route path="/new-todo" element={<NewTodoPage />} />
      </Routes>
    </Layout>
  );
}

export default App;

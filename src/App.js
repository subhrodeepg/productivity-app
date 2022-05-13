import { Route, Routes } from "react-router-dom";

import AllTodosPage from "./pages/AllTodosPage";
import NewTodoPage from "./pages/NewTodoPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllTodosPage />} />
      <Route path="/new-todo" element={<NewTodoPage />} />
    </Routes>
  );
}

export default App;

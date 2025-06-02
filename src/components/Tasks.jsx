import { ChevronRight, Trash, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button.jsx";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  // Função para navegar para a página de detalhes da tarefa
  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    // Lista de tarefas
    <ul className="space-y-4 p-6 bg-gray-800 rounded-md shadow-lg">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2 items-center">
          <button
            onClick={() => onTaskClick(task.id)}
            className="w-7 h-7 flex items-center justify-center border-2 border-gray-600 rounded-md bg-gray-900"
          >
            {task.isCompleted && <Check className="w-5 h-5 text-green-400" />}
          </button>
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-gray-700 text-left w-full text-gray-200 p-2 rounded-md ${
              task.isCompleted ? "line-through text-gray-500" : ""
            }`}
          >
            {task.title}
          </button>

          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRight className="w-6 h-6 text-gray-300" />
          </Button>

          <Button onClick={() => onDeleteTaskClick(task.id)}>
            <Trash className="w-6 h-6 hover:text-red-500 transition-colors" />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;

import { useEffect, useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { v4 } from "uuid";

// Projeto Gerenciador de tarefas
// React para a construção da interface
// Tailwind para estilização
// Lucide para ícones
// UUID para geração de IDs únicos
// React Rounter para navegação
// Api JSONPlaceHolder para preenchimento inicial das tarefas

// Armazenamento localStorage para persistência de dados
function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  // Uso de Api para fazer o preenchimento inicial das tarefas
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (!storedTasks) {
      const fetchTasks = async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=3"
        );
        const data = await response.json();

        const tasksWithDescription = data.map((task) => ({
          ...task,
          description: `Descrição da tarefa "${task.title}"`,
          isCompleted: task.completed || false,
        }));

        setTasks(tasksWithDescription);
      };

      fetchTasks();
    }
  }, []);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen min-h-screen bg-gray-900 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-gray-100 font-semibold text-center border-b border-gray-700 pb-2">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;

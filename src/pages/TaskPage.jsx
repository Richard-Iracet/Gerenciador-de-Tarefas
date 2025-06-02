import { useSearchParams } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Página de detalhes da tarefa
function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  function onBackClick() {
    navigate(-1);
  }

  return (
    <div className="h-screen w-screen bg-gray-900 p-6 flex justify-center">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative">
          <button
            onClick={onBackClick}
            className="absolute left-0 top-0 p-2 bg-gray-700 rounded-md text-white hover:bg-gray-600 transition-colors"
          >
            <ChevronLeft />
          </button>
          <h1 className="text-3xl text-gray-100 font-semibold text-center border-b border-gray-700 pb-2">
            Detalhes da Tarefa
          </h1>
        </div>

        <div className="bg-gray-800 p-4 rounded-md">
          <h2 className="text-xl font-bold text-gray-100">{title}</h2>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;

import { useState } from "react";
import Input from "./Input.jsx";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showErrors, setShowErrors] = useState(false);

  const isTitleInvalid = showErrors && !title.trim();
  const isDescriptionInvalid = showErrors && !description.trim();

  return (
    <div className="space-y-4 p-6 bg-gray-800 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        isInvalid={isTitleInvalid}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        isInvalid={isDescriptionInvalid}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            setShowErrors(true);
            return;
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
          setShowErrors(false);
        }}
        className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;

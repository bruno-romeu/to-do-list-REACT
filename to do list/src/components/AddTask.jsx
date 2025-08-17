import { useState } from "react";
import Input from "./Input"

function AddTask({onAddTaskSubmit}){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return(
        <div className=" bg-slate-200 space-y-4 shadow p-5 rounded-md">
            <div className="flex flex-col gap-2">
                
                <Input
                type="text"
                placeholder="Digite o título da tarefa..."
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                />

                <Input
                type="text"
                placeholder="Digite a descrição da tarefa..."
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                />
                
                <button className="text-white bg-slate-600 rounded-md p-2 hover:bg-slate-500 transition 1 cursor-pointer font-medium"
                onClick={() => {
                    if (!title.trim() || !description.trim()) {
                        return alert("Preencha o título e a descrição da tarefa!");
                    }
                onAddTaskSubmit(title, description)}}>
                    Adicionar Tarefa
                </button>
            </div>
        </div>
    );
}

export default AddTask; 
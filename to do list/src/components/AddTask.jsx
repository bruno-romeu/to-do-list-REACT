import { useState } from "react";

function AddTask({onAddTaskSubmit}){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return(
        <div className=" bg-slate-200 space-y-4 shadow p-5 rounded-md">
            <div className="flex flex-col gap-2">
                <input id="title" className="text-slate-400 outline-slate-400 bg-white rounded-md p-2 text-left " type="text" placeholder="Título da Tarefa..." value={title} onChange={(event) => setTitle(event.target.value)} />
                <input id="description" className="text-slate-400 outline-slate-400 bg-white rounded-md p-2 text-left " type="text" placeholder="Descrição da Tarefa..." value={description} onChange={(event) => setDescription(event.target.value)} />
                <button className="text-white bg-slate-600 rounded-md p-2 hover:bg-slate-500 transition 1 cursor-pointer font-medium"
                onClick={() => onAddTaskSubmit(title, description)}>
                    Adicionar Tarefa
                </button>
            </div>
        </div>
    );
}

export default AddTask; 
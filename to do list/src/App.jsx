import { useState } from 'react'
import './App.css'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
    id: 1,
    title: 'Estudar React',
    description: 'Estudar desenvolvimento Front-end com React para aplicar em projetos futuros',
    isCompleted: false,
  },
  {
    id: 2,
    title: 'Fazer a mala',
    description: 'Arrumar a mala para a viagem de férias',
    isCompleted: false,
  },
  {
    id:3,
    title: 'Ler algumas páginas do livro',
    description: 'Ler algumas páginas do livro para adquirir o hábito de leitura',
    isCompleted: false
  }
])

function onTaskClick(taskId){
  const newTasks = tasks.map(task => {
    if (task.id === taskId) {
      return {
        ...task, isCompleted: !task.isCompleted
      }
    }
    return task;
  });
  setTasks(newTasks);
}

function onDeleteTaskClick(taskId){
  const newTask = tasks.filter(task => task.id !== taskId);
  setTasks(newTask);
}

function onAddTaskSubmit(title, description){
  const newTask = {
    id: tasks.length + 1,
    title: title,
    description: description,
    isCompleted: false
  }

  // Possui tudo o que está na lista anterior ("... tasks"), e mais a nova tarefa ("newTask")
  setTasks([... tasks, newTask])
}

  return (
    <div className='w-screen h-screen bg-slate-500 flex justify-center p-6'>
      <div className='w-[500px] space-y-4'>
        <h1 className='text-slate-100 text-3xl font-bold text-center'>Lista de Tarefas</h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}  />
      </div>
    </div>
  )
}

export default App

import {useState} from 'react';
import AddTaskForm from './components/AddFormTask.jsx';
import UpdateForm from './components/UpdateForm.jsx';
import ToDo from './components/ToDo.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';


function App() {
  const [toDo, setToDo] = useState([
    {"id": 1,"title": "Mow the lawn","status": false},
    {"id": 2,"title": "Do Laundry","status": false},
    {"id": 3,"title": "Make Dinner ","status": false}
  ]);

  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');


//Nambah Data
  const addTask = () =>{
    if(newTask){
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false }
      setToDo([...toDo, newEntry])
      setNewTask('');
    }
  }


//Hapus Data
  const deleteTask = (id) =>{
    let newTasks = toDo.filter(task => task.id !== id)
    setToDo(newTasks);
  }

//Tanda sukses
  const markDone = (id) =>{
    let newTask = toDo.map(task => {
      if(task.id === id){
        return ({...task, status: !task.status})
      }
        return task;
    })
    setToDo(newTask);
  }

  const cancelUpdate = () =>{
    setUpdateData('');
  }

  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry);
  }

//Update data
  const updateTask = () =>{
    let filterRecords = [...toDo].filter( task => task.id !== updateData.id);
    let updateObject = [...filterRecords, updateData]
    setToDo(updateObject);
    setUpdateData('');
  }

  return (
    <div className="container App">

    <br /><br />
    <h2>to-do-list App (ReactJS)</h2>
    <br /><br />

    {updateData && updateData ? (
      <UpdateForm 
        updateData={updateData}
        changeTask={changeTask}
        updateTask={updateTask}
        cancelUpdate={cancelUpdate}
      />
    ) : (
      <AddTaskForm 
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
      />
    )}


    {toDo && toDo.length ? '' : 'Data Kosong...'}

    <ToDo
      toDo={toDo}
      markDone={markDone}
      setUpdateData={setUpdateData}
      deleteTask={deleteTask}
    />  

    </div>
  );
}

export default App;

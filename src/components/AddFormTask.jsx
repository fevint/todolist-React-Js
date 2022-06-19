const AddTaskForm = ({newTask, setNewTask, addTask}) => {
    return(
    <>
         {/* Tambah Data */}
         <div className="row">
         <div className="col">
           <input value={newTask} 
           onChange={(e) => setNewTask(e.target.value)}
           className="form-control from-control-lg" />
         </div>
         <div className="col-auto">
           <button onClick={addTask}
           className="btn btn-lg btn-success">Tambah Data</button>
         </div>
       </div>
       <br/>
       </>
    )
}

export default AddTaskForm;
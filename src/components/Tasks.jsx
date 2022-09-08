import React from 'react'

function Tasks(data) {
  const deleteNote = () => {
    data.deleteItem(data.id);
  }
  return (
    <div onClick={deleteNote} className="box m-2 w-25 text-white fw-bold bg-warning rounded p-3 py-4 shadow-sm">
      <h4>{data.data.title}</h4>
      <h6>  
        {data.data.desc}
      </h6>
    </div>
  );
}

export default Tasks;
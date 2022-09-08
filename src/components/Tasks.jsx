import React from 'react'

function Tasks(data) {
  const deleteNote = () => {
    data.deleteItem(data.id);
  }
  return (
    <div style={{width: '15rem'}} onClick={deleteNote} className="box text-white fw-bold bg-warning rounded m-2 p-3 shadow-sm">
      <h4>{data.data.title}</h4>
      <h6>  
        {data.data.desc}
      </h6>
    </div>
  );
}

export default Tasks;
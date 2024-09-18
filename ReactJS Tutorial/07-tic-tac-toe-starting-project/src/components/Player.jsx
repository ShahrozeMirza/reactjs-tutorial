import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName}){

  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick(){
    /* In React, state updates are asynchronous, meaning that when you call setIsEditing(newState), the update doesn't happen immediately. 
    Instead, React schedules the update to happen later. This can be avoided by using a functional update. 
    A functional update is a function that takes the current state as an argument and returns the new state. 
    In react, when updating your state based on the previous value of that state you should pass a function to that state updating
    function. Because the function which we pass to the state updating function will be called by react and it will automatically get 
    the current state value (i.e the value before state update) as an input. This function will return the new state we want to set.
    In the function form we simply have a guarantee by react that we will be always be working with the latest available state value.
    So whenever we update the state value based on the previous state we should always go with the function form as a best practice.*/
    setIsEditing(editing => !editing);

    if(isEditing){
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    /* The event object has the value for the input field. This way we are receiving the value of the input and feeding in the value
    that is set using the onchange event. This way of receiving and feeding back the updated value is called two-way-binding. */ 
    setPlayerName(event.target.value)
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if(isEditing){
    /* Right now the input value is not changing because we have set the value prop. The special thing about the value prop is
    it sets the value that is shown in the input and  this value overwrites any changes that we try to do. For this we need an
    onChange event which returns the event as an object. */ 
    editablePlayerName = <input type="text" value={playerName} onChange={handleChange} required />;
  }

    return(
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
          </li>
    )
}
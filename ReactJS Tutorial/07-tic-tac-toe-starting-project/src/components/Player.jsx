import { useState } from "react";

export default function Player({ name, symbol }){

  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick(){
    /* In react, when updating your state based on the previous value of that state you should pass a function to that state updating
    function. Because the function which we pass to the state updating function will be called by react and it will automatically get 
    the current state value (i.e the value before state update) as an input. This function will return the new state we want to set.
    In the function form we simply have a guarantee by react that we will be always be working with the latest available state value.
    So whenever we update the state value based on the previous state we should always go with the function form as a best practice.*/
    setIsEditing(editing => !editing);
  }

  let playerName = <span className="player-name">{name}</span>;

  if(isEditing){
    playerName = <input type="text" value={name} required />;
  }

    return(
        <li>
            <span className="player">
              {playerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
          </li>
    )
}
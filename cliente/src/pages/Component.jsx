import React, { useState } from "react";

export default function Component() {
  const [text, setText] = useState(""); // Inicializado correctamente
  const [updated, setUpdated]=useState("")

  const textOnChange = (event) => {
    setText(event.target.value);
  };

  const buttonOnClick = (params) => {
    setUpdated(text);
  }
  
  return (
    <div>
      <input type="text" value={text} onChange={textOnChange} />
      <button onClick={buttonOnClick}> Actualizar</button>
      <p>Texto input: {text}</p>
      <p>Texto actualizado: {updated}</p>
    </div>
  );
  
}



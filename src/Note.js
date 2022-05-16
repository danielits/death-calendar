import React from "react";

export const Note = ({ content, toggleImportance, important, id }) => {
  const label = important?'Quitar importancia':'Dar importancia'
  
  return <li>{content}<button onClick={toggleImportance(id)}>{label}</button></li>;
};

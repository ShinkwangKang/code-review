import React from 'react';
//import 'Todos.css';

// app.js 에서 props 를 배열로 받아서 map로 돌면서 그려보는 예제
const Todos = (props) => {
  console.log('====>', props);
  return(
    <div className="Todos" style={{backgroundColor:'#ccc'}}>
    <h2>{props.title}</h2>
      <ul>
        {props.items.map((item, index) => {
          return <li key={index}><input type="checkbox"/>{item}</li>;
        })}
      </ul>
    </div>
  );
}
export  default Todos;

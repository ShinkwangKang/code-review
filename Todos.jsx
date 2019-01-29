import React from 'react';
//import 'Todos.css';

// #2. app.js 에서 props 를 배열로 받아서 map로 돌면서 그려보는 예제
const Todos = (props) => {
  console.log('====>', props);
  return(
    <div className="Todos" style={{backgroundColor:'#ccc'}}>
    <h2>{props.title}</h2>
      <ul>
        {props.items.map((item, index) => {
          return <li key={index}><input type="checkbox" defaultChecked={item.completed}/>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}
export  default Todos;

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';

// import 'bootstrap/dist/css/bootstrap.min.css';

// class Color extends React.Component{
//   constructor(){
//     super();
//     this.state = {color : "red"}
//   }
//   colourChange = () => {
//     this.setState({color : this.state.color ==='red' ? 'blue':'green'})
//   }

//   render(){
//     return(
//       <div>
//       <p style={{backgroundColor:this.state.color, height:'50px'}}></p>
//       <button onClick={this.colourChange}>change color</button>
//       </div>
//     )
//   }
// }

// class Studentlist extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       student:[
//         {nameF :"john",id : 2874,grade :"A"},
//       {nameF :"alice",id : 2876,grade :"B"},
//       {nameF :"joe",id : 2877,grade :"C"},
//       ]
//     }
      
//   }
//   render(){
//     return(
//       <div>
//       <p>{ this.state.student.name}</p>
//     </div>
//     )
//   }
// }


// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

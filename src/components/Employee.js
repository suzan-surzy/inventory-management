import react, { Component } from 'react'
import ReactDOM from 'react-dom/client';
// import Navbar from './huddleclasswork/hero/navbar.js'
// import Section from './huddleclasswork/body/section.js'
// import Section1 from './huddleclasswork/body/section1.js'
// import Section2 from './huddleclasswork/body/section2.js'
// import Footer from './huddleclasswork/footer/footer.js'


// class Child extends Component {
//     render(){
//         return(
//           <div>
//             {this.props.message}
//           </div>  
//         )
//     }
// }

// export default class App extends Component{
//     render(){
//         return(
//             <div>
//                 parent
//                 <Child message = "hello world"/>
//             </div>
//         )
//     }
// }
// class MovieCard extends Component {
//         render(){
//             return(
//               <div style={{border:"2px solid yellow"}}>
//                <p>{this.props.movieCard.title}</p>
//                <p>{this.props.movieCard.director}</p>
//                <p>{this.props.movieCard.year}</p>
//               </div>  
//             )
//         }
//     }
    
// export default class MovieGallery extends Component{
//     constructor(){
//         super();
//         this.state = {
//              movieGallery : [{
//                  title : "me and i",
//                 director: "jess",
//                 year:2001
//             },
//                     {
//                         title : "i and me",
//                         director: "oge",
//                         year:2001
//                     },
//                     {
//                         title : "me and you",
//                         director: "john",
//                         year:2001
//                     }
//                 ]
//                 }
//             }
//             render(){
//                 return(
//                     <div style={{border:"2px solid red",height:"500px",display:"flex",padding:"20px"}}>
//                         {
//                             this.state.movieGallery.map((movieCard)=>{
//                                 return <MovieCard movieCard = {movieCard}/>
//                             })
//                         }
//                     </div>
//                 )
//             }
//         }

// class ProductCard extends Component {
//             render(){
//                 return(
//                   <div style={{border:"2px solid yellow"}}>
//                    <p>{this.props.productCard.name}</p>
//                    <p>{this.props.productCard.price}</p>
//                    <p>{this.props.productCard.description}</p>
//                   </div>  
//                 )
//             }
//         }
        
// export default class ProductCatalog extends Component{
//         constructor(){
//             super();
//             this.state = {
//                  productCatalog : [{
//                      name : "soap",
//                     price: "$33",
//                     description: "use for bathing"
//                 },
//                         {
//                             name : "pen",
//                             price: "$36",
//                             description: "use for writing"
//                         },
//                         { 
//                             name : "plate",
//                             price: "$35",
//                             description: "use for eating"
//                         }
//                     ]
//                     }
//                 }
//                 render(){
//                     return(
//                         <div style={{border:"2px solid red",height:"500px",display:"flex",padding:"70px"}}>
                            // {
                            //     this.state.productCatalog.map((productCard)=>{
                            //         return <ProductCard productCard = {productCard}/>
                            //     })
                            // }
//                         </div>
//                     )
//                 }
//             }\






// class Product extends Component {
//     render(){
//         return(
//           <div style={{border:"2px solid yellow"}}>
//            <p>{this.props.product.name}</p>
//            <p>{this.props.product.price}</p>
//           </div>  
//         )
//     }
// }

// export default class Products extends Component{
//     constructor(){
//         super();
//         this.state = {
//             products : [{
//                 name : "shoe",
//                 price: "$44"
//             },
//             {
//                 name:"bag",
//                 price:"$22"
//             },
//             {
//                 name: "dress",
//                 price:"$33"
//             }
//         ]
//         }
//     }
//     render(){
//         return(
//             <div style={{border:"2px solid red",height:"500px",display:"flex",padding:"20px"}}>
//                 {
//                     this.state.products.map((product)=>{
//                         return <Product product = {product}/>
//                     })
//                 }
//             </div>
//         )
//     }
// }


// class Child extends Component {
//     render(){
//         return(
//           <div>
//             my name is {this.props.name},i am {this.props.age} years old
//           </div>  
//         )
//     }
// }

// export default class App extends Component{
//     render(){
//         return(
//             <div>
//                 parent
//                 <Child name = 'susan' age = '2'/>
//             </div>
//         )
//     }
// }
// function Huddle(){
//     return(
//         <div>
//             <Navbar/>
//             <Section/>
//             <Section1/>
//             <Section2/>
//             <Footer/>
//         </div>
//     )
// }


// export default Huddle






// import { useState } from 'react';

// export default function App(){
//     const [name,setName] = useState('divine');
//     const [age,setAge] = useState('6');
//     const [detail,setDetail] = useState({
//         color :'red',
//         fontsize:'32px',
//         text:'click'
//     })
//      const handleClick = ()=>{
//         setDetail(
//             {
//                 color:detail.color === 'red' ? 'blue':'red',
//                 fontsize: detail.fontsize === '32px' ? '20px' :'32px',
//                 text: detail.text === 'click here' ? 'click me' :'click here'
//             }
//         )
//      }
//     return(
//         <div>
//        <p> my name is {name} and i am {age} years old</p>
//        <button onClick={handleClick}style={{backgroundColor:detail.color,
//         fontsize:detail.fontsize}}>{detail.text}</button>
//         </div>
//     )
// }

// function Child (props){
//     return(
//         <div>
//           my name is {props.name},i am {props.age} years old  
//         </div>
//     )
// }

// export default function App(){
//     return(
//         <div>
//             j
//             <Child name ='oge' age = '3'/>
//         </div>
//     )
// }


// function Child (props){
//     return(
//         <div>
//           you are {props.message};
//         </div>
//     )
// }

// export default function App(){
//     return(
//         <div>
//             <Child message ='welcome' />
//         </div>
//     )
// }

// function MovieCard (props){
//     return(
//         <div style={{margin:'30px'}}>
//          <p>{props.movieCard.title}</p>
//          <p>{props.movieCard.director}</p>
//          <p>{props.movieCard.year}</p>
//         </div>
//     )
// }

// export default function MovieGallery(){
//     const detail =[
//         {
//             title :'red',
//             director:'red',
//             year:'2000',
//             month:'june'
//         },
//         {
//             title :'blue',
//             director:'john',
//             year:'2001',
//             month:'july'
//         }
//     ]
//     return(
        
//         <div style={{border:"2px solid red",height:"500px",display:"flex",padding:"20px"}}>
        
//             {
//                 detail.map((movieCard)=>{
//                  return <MovieCard movieCard = {movieCard}  />
//                 })
//             } 
//         </div>
//     )
// }


// function ProductCard (props){
//     return(
//         <div>
//          <p>{props.productCard.name}</p>
//          <p>{props.productCard.price}</p>
//          <p>{props.productCard.description}</p>
//         </div>
//     )
// }

// export default function ProductCatalog(){
//     const detail =[
//         {
//             name : "soap",
//             price: "$33",
//             description: "use for bathing"
//         },

//         {
//             name : "pen",
//             price: "$35",
//             description: "use for writing"
//         },

//         {
//             name : "dog",
//             price: "$355",
//             description: "use for security"
//         }
//     ]
//     return(
        
//         <div style={{border:"2px solid red",height:"500px",display:"flex",padding:"20px"}}>
//             {
//                 detail.map((productCard)=>{
//                  return <ProductCard productCard = {productCard}  />
//                 })
//             }        
                    
//         </div>
//     )
// }





// import react, { Component } from 'react'
// import ReactDOM from 'react-dom/client';


// mounting
class App extends Component{
    constructor(props){
        super(props);
        this.state = {favouritecolor:"black"}
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({favouritecolor:"pink"})
        }, 2000);
    }
    componentDidUpdate(){
        console.log("i was updated")
    }
    render(){
        return(
            <h1>my favourite color is {this.state.favouritecolor}</h1>
        )
           
        
    }
}
// class Child extends Component{
//     componentWillUnmount(){
//         alert("the component named child is about to be removed or unmounted")
//     }
//     render(){
//         return(
//             <div>
//                 <h1>i am the child</h1>
//             </div>
//         )
//     }
// }

// class App extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {show:true}
//     }
//     delHeader = () =>{
//         this.setState({show:false})
//     }
//     render(){
//         return(
//             <div>
//                 {this.state.show? <Child/> : <div></div>}
//                 <button type='button'onClick={this.delHeader}>delect child</button>
//             </div>
//         )
//     }
// }

// export default App





// mounting
// class Header extends Component{
//     constructor(props){
//         super(props);
//         this.state = {text:"obi is in the building"}
//     }
//     componentDidMount(){
//         setTimeout(() => {
//             this.setState({text:"obi have left the building"})
//         }, 3000);
//     }
//     render(){
//         return(
//             <h1> {this.state.text}</h1>
//         )
           
        
//     }
// }
// export default Header

// updating

// class Counter extends Component{
//     constructor(props){
//         super(props);
//         this.state = {text:"Rad5 Tech Hub"}
//     }
//     handleClick =()=>{
//         this.setState({text:"the best hub in africa"})
//     }
//     componentDidUpdate(){
//         alert("i just updated the paragraph")
        
//     };
//     render(){
//         return(
//             <div>
//                 <p> {this.state.text}</p>
//                 <button type="button" onClick={this.handleClick}> click here</button>
//             </div>
        
//         )
           
        
//     }
// }
// export default Counter




export default function App(){
    const [array,setArray]= useState([{
        id : 1,
        nameF :'susan'
    },
    {
        id : 1,
        nameF :'okorie'
    }])
    return(
        <div>
            {
                array.map((element,index) => {
                    return <p key = {index}>{element.nameF}</p>
                })
            }
        </div>
    )
}
// export default function Counter(){
//     let [text,setText]= useState("rad5 tech hub")
//      const handleClick = ()=>{
//         setTimeout(()=>{
//             setText(text="the best hub in africa" )
//             // alert('i am updated the paragraph')
//            },3000)
//      }
//     useEffect(()=>{
       
//     },[text])
//     return(
//         <div>
//             <p>{text}</p>
//             <button onClick={handleClick}>click here</button>
//         </div>
//     )
// }
// export default function Header(){
//     let [text,setText]= useState("obi is in the building")
//      const handleClick = ()=>{
//         setTimeout(()=>{
//             setText(text="obi have left the building" )
//            },3000)
//      }
//     useEffect(()=>{
       
//     },[text])
//     return(
//         <div>
//             <p>{text}</p>
//             <button onClick={handleClick}>click here</button>
//         </div>
//     )
// }
// export default function App(){
//     const [state,setState] = useState(0)
//     const [color,setColor] = useState('red')
//     const handleClick= ()=>{
//         setState(state+1)
//     }
//     const changeColor = ()=>{
//         setColor(color === 'red'? 'blue' : 'red')
//     }
//     useEffect(()=>{
//         console.log("i was called")
//     },[state,color])

//     return(
//         <div>
//             <p>count:{state}</p>
//             <p>color:{color}</p>
//           <button onClick={handleClick}>click here</button>
//           <button onClick={changeColor}>changecolor</button>  
//         </div>
//     )
// }
// class App extends {
//     constructor(props){
//         super(props);
//         this.state = {favouritecolor:"black"}
//     }
//     componentDidMount(){
//         setTimeout(() => {
//             this.setState({favouritecolor:"pink"})
//         }, 2000);
//     }
//     componentDidUpdate(){
//         console.log("i was updated")
//     }
//     render(){
//         return(
//             <h1>my favourite color is {this.state.favouritecolor}</h1>
//         )
           
        
//     }
// }

// export default App



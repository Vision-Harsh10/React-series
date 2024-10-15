// import Unique from "./Demo";

// function  Avatar(){
//   return(
//     <img
//     classNameName="avatar"
//     src="https://i.imgur.com/7vQD0fPs.jpg"
//     alt = "Gregorio Y. Zara"
//     />
//   );
// }

// function Avatar() {
//   const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
//   const name = "Gregorio Y. Zara";
//   return (
//     <>
//       <h1> {name}'s To Do List</h1>
//       <img classNameName="avatar" src={avatar} alt={name} />
//     </>
//   );
// }

// const person = {
//   name: "Gregorio Y. Zara",
//   theme: {
//     backgroundColor: "black",
//     color: "pink",
//   },
// };

// function TodoList() {
//   return (
//     <div style={person.theme}>
//       <h1>{person.name}'s Todos</h1>
//       <img
//         classNameName="avatar"
//         src="https://i.imgur.com/7vQD0fPs.jpg"
//         alt="Gregorio Y. Zara"
//       />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//     </div>
//   );
// }

const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

 function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        classNameName="avatar"
        src={
         baseUrl + person.imageId + person.imageSize + '.jpg'}
        alt={person.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

// function App() {
//   return (

//     <div>
//     <h1>Hello From vite | Harsh Vardhan</h1>
//     <Unique/>
//     </div>
//   );
// }
export default TodoList;

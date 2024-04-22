// function CoreConcept(props){
//   return(
//     <li>
//       <img src={props.image} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   )
// }

/*We can also make use of curly braces to destruction the first parameter i.e the props.
 parameter. Object destructuring in JS simply means that we can target the different
 properties of the incoming object by name. We have to use the same properties as we are
 setting here as props. Then the parameters will act as standalone variables.
*/

export default function CoreConcept({image, title, description}){
    return(
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    )
  }
  
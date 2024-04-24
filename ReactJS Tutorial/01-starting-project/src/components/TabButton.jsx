/*Every custom component will receive props. Even if we are not setting any attributes, react will still give us a props object it will just be an object that's pretty empty but actually 
not entirely empty. Instead there is one prop which we will always get, the special built-in children prop. This is a prop that is set by react and it's a prop that is not set with the help
of attributes, instead this children prop simply refers to the content between your component tags. */


/* export default function TabButton(props) {
    return <li><button>{props.children}</button></li>
*/

//With object destructuring and by pulling out the children property and storing it in its own variable we don't need to write prop.children.
export default function TabButton({children}) {
    return <li><button>{children}</button></li>;
}
import { useState } from 'react';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';

function App() {

  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    //selectedButton => 'components', 'JSX', 'props', 'state'
    setSelectedTopic(selectedButton);

    //Here the old value will be shown in console because we are inside the function which has old value of selectedTopic before re-render.
    console.log('old value of selectedTopic inside i.e before re-render', selectedTopic);
}

//Here the new value will be shown in console because we are outside the function which has new value of selectedTopic after re-render.
console.log('new value of selectedTopic outside i.e after re-render', selectedTopic);

console.log('APP COMPONENT EXECUTING');

let tabContent = <p>Please select a topic.</p>

if(selectedTopic){
  tabContent = (<div id="tab-content">
  <h3>{EXAMPLES[selectedTopic].title}</h3>
  <p>{EXAMPLES[selectedTopic].description}</p>
  <pre>
    <code>
    {EXAMPLES[selectedTopic].code}
    </code>
  </pre>
</div>)
}

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
         <h2>Core Concepts</h2>
         <ul>
          
          {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} /> )}

          {/* If the prop names are similar to the property names of the object
          that contains the data we want to set, we can make use of the spread operator
          to pull out an the key value pairs of an object. Those key value pairs will be
          added as key value pairs(i.e props) to the component. 
          */}

         </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* This way of building components where our components can wrap other components or other 
            content is called component composition */}
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
       
      </main>
    </div>
  );
}

export default App;
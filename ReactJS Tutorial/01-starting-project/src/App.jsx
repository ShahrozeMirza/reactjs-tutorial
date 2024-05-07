import { useState } from 'react';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {

  const [selectedTopic, setSelectedTopic] = useState('Please click a button');

  function handleSelect(selectedButton) {
    //selectedButton => 'components', 'JSX', 'props', 'state'
    setSelectedTopic(selectedButton);

    //Here the old value will be shown in console because we are inside the function which has old value of selectedTopic before re-render.
    console.log('old value of selectedTopic inside i.e before re-render', selectedTopic);
}

//Here the new value will be shown in console because we are outside the function which has new value of selectedTopic after re-render.
console.log('new value of selectedTopic outside i.e after re-render', selectedTopic);

console.log('APP COMPONENT EXECUTING')

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
         <h2>Core Concepts</h2>
         <ul>
          <CoreConcept 
          title={CORE_CONCEPTS[0].title} 
          description={CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image}
          />

          {/* If the prop names are similar to the property names of the object
          that contains the data we want to set, we can make use of the spread operator
          to pull out an the key value pairs of an object. Those key value pairs will be
          added as key value pairs(i.e props) to the component. 
          */}
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />
          
         </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* This way of building components where our components can wrap other components or other 
            content is called component composition */}
            <TabButton onSelect={() => handleSelect('Components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('Props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('States')}>State</TabButton>
          </menu>
         { selectedTopic }

        </section>
       
      </main>
    </div>
  );
}

export default App;
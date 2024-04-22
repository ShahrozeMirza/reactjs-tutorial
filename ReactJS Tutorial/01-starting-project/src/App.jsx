import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';

function App() {
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
       
      </main>
    </div>
  );
}

export default App;
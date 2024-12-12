import './App.scss';
import React, { useState } from 'react';
import DropDown from './Preparation/Dropdown/DropDown';
import Formvalidation from './Preparation/Formvalidation/Formvalidation';

// Define components with names
const alltasks = [
  { name: "DropDown", component: DropDown },
  { name: "Form Validation", component: Formvalidation }
];

function App() {
  const [SelectedComponent, setSelectedComponent] = useState(null);

  return (
    <div className="app">
      <div className="moto">
        <h4 className='brand'>The Journey Begins</h4>
        <p>Fueled by Challenges, Driven to Succeed</p>
      </div>
      <div className="theRoap">
        {alltasks.map((task, index) => (
          <button key={index} onClick={() => setSelectedComponent(() => task.component)}>
            {task.name}
          </button>
        ))}
      </div>
      <div className="renderedComponent">
        {SelectedComponent && <SelectedComponent />}
      </div>
    </div>
  );
}

export default App;

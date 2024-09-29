import './App.scss';
import React, { useState } from 'react';
import DropDown from './Preparation/Dropdown/DropDown';

const alltasks = [DropDown];

function App() {
  const [SelectedComponent, setSelectedComponent] = useState(null);

  return (
    <div className="app">
      <div className="moto">
        <h4 className='brand'>The Journey Begins</h4>
        <p>Fueled by Challenges, Driven to Succeed</p>
      </div>
      <div className="theRoap">
        {
          alltasks.map((TaskComponent, index) => (
            <button key={index} onClick={() => setSelectedComponent(() => TaskComponent)}>
              {TaskComponent.name}
            </button>
          ))
        }
      </div>
      <div className="renderedComponent">
        {SelectedComponent && <SelectedComponent />}
      </div>
    </div>
  );
}

export default App;

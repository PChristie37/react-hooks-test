import React, { Component, useState, useEffect, Suspense, lazy } from 'react';
import './App.css';
const SuspenseTest = lazy(() => import("./lib/SuspenseTest"));
class App extends Component {
  render() {
    return (
      <div className="App">
        <Testhook />
      </div>
    );
  }
}

function Testhook() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Peter');
  const [showPDFPreview, setShowPDFPreview] = useState(false);

  useEffect(() => {
    document.title = name;
  })

  function handleClick(){
    console.log("peter");
    setCount(count + 1)
    if(!showPDFPreview){
      setShowPDFPreview(true);
    }
  }

  return(
    <div>
      <p>You clicked {count} times!</p>
      <button onClick={()=>handleClick()}>Try Clicking me!</button>
      <input value={name} onChange={(e)=>setName(e.target.value)} />
      {showPDFPreview && (
      <Suspense maxDuration={500} fallback={<div>Loading...</div>}>
        <SuspenseTest />
      </Suspense>
      )}
    </div>
  );  
};

export default App;

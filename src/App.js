import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useContext } from 'react';

import Home from './components/Home';
import Confirm from './components/Confirm';
import Answer from './components/Answer';
// import { MyContext } from './components/context';

function App() {

  // const context = useContext(MyContext);
  
  return (
      <BrowserRouter>
        <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/answer" element={<Answer />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

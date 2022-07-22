import React from 'react';
import ActiveSectionContextProvider from './contexts/ActiveSectionContext';
import Home from './pages/Home';

function App() {
 return (
  <ActiveSectionContextProvider>
    <Home/>
  </ActiveSectionContextProvider> 
);
}

export default App;

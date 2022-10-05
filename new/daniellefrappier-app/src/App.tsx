import React from 'react';
import ActiveSectionContextProvider from './contexts/ActiveSectionContext';
import { Preloader } from './components/Preloader/preloader.component';
import Home from './pages/Home';

function App() {
 return (
  <ActiveSectionContextProvider>
    <Preloader waitBeforeShow={3000}>
      <Home/>
    </Preloader>
  </ActiveSectionContextProvider> 
);
}

export default App;

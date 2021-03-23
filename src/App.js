import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import withListLoading from './components/withListLoading';
function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    cars: null
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://cars-backend-git-demo.apps.yonah.demolab.local/cars`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((cars) => {
        setAppState({ loading: false, cars: cars });
      });
  }, [setAppState]);
  return (
    <div className='App'>
      <div className='container'>
        <h1>All Cars</h1>
      </div>
      <div className='car-container'>
        <ListLoading isLoading={appState.loading} cars={appState.cars} />
      </div>
    </div>
  );
}
export default App;
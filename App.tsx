import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import NotesListScreen from './src/screens/NotesListScreen';

const App = () => {
  return (
    <Provider store={store}>
      <NotesListScreen />
    </Provider>
  );
};

export default App;

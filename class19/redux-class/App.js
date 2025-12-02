import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <Home/>
    </Provider>
    </div>
  );
}

export default App;

import './App.css';
import CakeDetails from './components/CakeDetails';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <CakeDetails />
    </div>
    </Provider>
  );
}

export default App;

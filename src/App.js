import './App.css';
import Products from './components/Products';
import Orders from './components/Orders';

function App() {
  return (
    <div className="App">
      {/* TODO: we should use context or redux to pass some props here to make the order list update to date */}
      <Products/>
      <Orders/>
    </div>
  );
}

export default App;

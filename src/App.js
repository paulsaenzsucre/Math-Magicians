import './App.css';
import CalculatorDisplay from './components/CalculatorDisplay';

function App() {
  return (
    <div className="App">
      <CalculatorDisplay value="0" />
      <br />
      <CalculatorDisplay value="569824" />
      <br />
      <CalculatorDisplay value="3698712" />
    </div>
  );
}

export default App;

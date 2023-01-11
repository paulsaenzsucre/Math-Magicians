import './App.css';
import CalculatorButton from './components/CalculatorButton';

function App() {
  return (
    <div className="App">
      <CalculatorButton type="digit-0" caption="0" />
      <CalculatorButton type="clear" caption="AC" />
      <CalculatorButton type="plus" caption="+" />
    </div>
  );
}

export default App;

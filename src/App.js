import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CalculatorPage from './pages/CalculatorPage';
import QuotePage from './pages/QuotePage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculator/" element={<CalculatorPage />} />
          <Route path="/quote" element={<QuotePage />} />
        </Routes>
      </>
    );
  }
}
export default App;

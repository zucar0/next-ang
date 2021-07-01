import logo from './logo.svg';
import './App.css';
import Saludar from '../../mi-primera-app-con-props/src/components/Saludar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar name="Antonio Enríquez" edad='33' /> 
        <Saludar name="Toño" edad="43"/>
      </header>
    </div>
  );
}

export default App;

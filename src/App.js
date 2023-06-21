import './App.css';
import 'bootstrap';
import Header from './components/organisme/Header';
import Button from './components/Button/Button';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello Word!!!</h1>
      <Home />
      <Button />
    </div>
  );
}

export default App;

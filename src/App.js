import './App.css';
import 'bootstrap';
import Header from './components/organisme/Header';
import Button from './components/Button/Button';
import Home from './Pages/Home/Home';
import Footer from './components/organisme/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello Word!!!</h1>
      <Home />
      <Button />
      <Footer />
    </div>
  );
}

export default App;

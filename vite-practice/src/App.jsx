import './App.css';
import Headline from './components/headline';
import Navbar from './components/navbar';
import WebInfo from './components/web-info';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Headline/>
        <WebInfo/>
    </div>
  );
}

export default App;
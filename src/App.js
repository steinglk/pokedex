import NavBar from './components/NavBar'
import CustomCard from './components/CustomCard'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='containerCard'> 
        <CustomCard />
      </div>
    </div>
  );
}

export default App;

import './App.css';
import PrimarySearchAppBar from './components/appbar';
import Footer from './components/footer';
import Productcard from './components/productcard';


function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar/>
      <Productcard/>
      
      <Footer/>
    </div>
  );
}

export default App;

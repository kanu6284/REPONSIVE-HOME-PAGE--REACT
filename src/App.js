import logo from './logo.svg';
import './App.css';
import Navbar from './componenets/navbar';
import Footer from './componenets/footer';
import HomePage from './componenets/Home';
import Card from './componenets/cards';
import MountainActivities from './componenets/MountainActivities ';
import RockActivities from './componenets/rock';
import VisitPage from './componenets/visit';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Card />
      <RockActivities />
      <VisitPage />
      <MountainActivities />
      <HomePage />
      
      <Footer />
    </div>
  );
}

export default App;

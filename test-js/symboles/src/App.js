import './App.css';
import Resume from './composants/Resume';
import Symboles from './composants/Symboles';
import Utilisation from './composants/Utilisation';
import WellKnowSymboles from './composants/WellKnowSymboles';

function App() {
  return (
    <div className="App">
      <Symboles />
      <WellKnowSymboles/>
      <Utilisation/>
      <Resume/>
    </div>
  );
}

export default App;

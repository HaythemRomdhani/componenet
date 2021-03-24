import './App.css';
import FullName from "./component/Profile/FullName.js";
import Adresse from "./component/Profile/Adresse.js";
import ProfilPhoto from "./component/Profile/ProfilPhoto.js";
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div ClassName="card">
      <ProfilPhoto/>
        <FullName/>
        <Adresse/>
        </div> 
      </header>
    </div>
  );
}

export default App;

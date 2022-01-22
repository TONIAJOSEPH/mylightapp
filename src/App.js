import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Onlight from './component/onlight';
import Offlight from './component/offlight';

function App() {
  return (
    <div >
     < Header/>
     <div className="content">
     < Onlight/>
     
     < Offlight/>
     </div>
    
    </div>
  );
}

export default App;

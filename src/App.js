import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Headersec from './Components/Headersec';
import Shosesec from './Components/Shosesec';
import Mapsec from './Components/Mapsec';
import Paragraphsec from './Components/Paragraphsec';
import Commoncrd from './Components/Commoncrd';
import Footersec from './Components/Footersec';



function App() {
  return (
    <div>
      <Headersec />
      <Shosesec />
      <Mapsec />
      <Paragraphsec />
      <Commoncrd />
      <Footersec />      
    </div>
  );
}

export default App;

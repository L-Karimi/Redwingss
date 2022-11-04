import './global.css';
import  { Route, Routes} from "react-router-dom";
import Donors from './Pages/Donors';
import Request from './Pages/Request';
import Layout from "./Layout/Layout"
import Sidebar from './Layout/Sidebar';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import Maindash from './components/MainDash';
import { Table } from '@mui/material';
import RightSide from './RightSide/RightSide';
import Profile from './components/profile/Profile';




function App() {
  return (
    <div className="App">
     <div className="AppGlass">
       <Layout/>

      
       
        <Routes>
          <Route path="/request" element={<Request/>}/>
          <Route path="/donors" element={<Donors/>}/>
          <Route path="/" element={<Maindash/>}/> 

           </Routes>
         
      </div>
    </div>
  );
}
export default App;




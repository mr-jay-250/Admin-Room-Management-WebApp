import Layout from "./components/home/Layout";
import RegistrationForm from "./components/home/RegistrationForm"
import {Route, Routes} from 'react-router-dom'
function App() {
   return(
    <div>
        <Routes>
            <Route path="/" element={<Layout />}/>
            <Route path="/booking" element={<RegistrationForm />}/>
            <Route path="/admin" element={<RegistrationForm />}/>
        </Routes>
    </div>
   )
}

export default App;

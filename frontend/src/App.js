import Layout from "./components/home/Layout";
import RegistrationForm from "./components/home/RegistrationForm"
import {Route, Routes} from 'react-router-dom'
import AdminView from "./components/admin/AdminView";
import EditForm from "./components/admin/EditForm";
function App() {
   return(
    <div>
        <Routes>
            <Route path="/" element={<Layout />}/>
            <Route path="editForm" element={<EditForm />} />
            <Route path="/booking" element={<RegistrationForm />}/>
            <Route path="/admin" element={<AdminView />}/>
        </Routes>
    </div>
   )
}

export default App;

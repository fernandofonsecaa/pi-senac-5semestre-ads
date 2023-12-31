import  {BrowserRouter, Route, Routes } from 'react-router-dom';

import Logon from './pages/logon';
import Register from './pages/register';
import Profile from './pages/profile';
import NewClasses from './pages/newClasses';
import Mainpage from './pages/main';

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Mainpage />}/>
                <Route path='/login' element={<Logon />} />
                <Route path='/register' element={<Register />} />

                <Route path ='/profile' element={<Profile />} />
                <Route path ='/classes/new' element={<NewClasses />} />
            </Routes>
        </BrowserRouter>
    )
}
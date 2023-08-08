import  {BrowserRouter, Route, Routes } from 'react-router-dom';

import Logon from './pages/logon';
import Register from './pages/register';

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Logon />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}
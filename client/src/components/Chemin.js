import React from 'react';
import Accueil from './Accueil';
import Edit from './Edit'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Delete from './Delete';

function Chemin() {
    return ( 
        <div>
            <Router>
                <Routes>
                    <Route path="/" exact element={<Accueil/>}/>
                    <Route path="/Edit/:id" exact element={<Edit/>}/>
                    <Route path="/Delete" exact element={<Delete/>}/>
                </Routes>
            </Router>
        </div>
     )
}

export default Chemin;
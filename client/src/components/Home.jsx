import React, { useState } from 'react';
import Nav from './Nav'
import Characters from "./Characters"
import Films from "./Films"
import Planets from './Planets';


function Home() {
    const [selectedComponent, setSelectedComponent] = useState('characters');
    
    return (
        <>
            <Nav setSelectedComponent={setSelectedComponent} selectedComponent={selectedComponent} />
            {selectedComponent === 'characters' && <Characters />}
            {selectedComponent === 'films' && <Films />}
            {selectedComponent === 'planets' && <Planets/>}
        </>
    )
}

export default Home
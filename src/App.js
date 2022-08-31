import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Students from "./components/Students"


function App(props) {
  
    return (
        <>
        <Navbar name='Elise'/>
            <div className='container justify-content-center'>
                <h2 className='text-center'>Check out the list of Students!</h2>
                <Students />
            </div>
        </>
    )
}

export default App;

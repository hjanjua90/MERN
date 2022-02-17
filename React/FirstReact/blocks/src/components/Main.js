import React from 'react';
import Subcontents from './Subcontents';

const Main = ()=>{
// logic 

    return(
        // JSX 
        <div className='main'>
            Main
            <Subcontents 
            color = "subCon1"
            text = "subcomponent1" />

            <Subcontents 
            color = "subCon2"
            text = "subcomponent2"/>

            <Subcontents 
            color = "subCon3"
            text = "subcomponent3"/>
        </div>
    )


}

export default Main;
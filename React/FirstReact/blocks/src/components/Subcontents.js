import React from 'react';


const Subcontents = (props) =>{
    // logic 
    
    const {text, color} = props;


        return(
            // JSX 
            <div className='subcontents'>
                Subcontents
                <p className={color}>{text }</p>
            </div>
        )
    
    
    }
    
    export default Subcontents;
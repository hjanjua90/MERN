import React from 'react';




const Tabs = (props)=>{

    const {tabList, setActiveTab, activeTab} = props;


    const styled = (indexFromBelow) =>{
        if(activeTab === indexFromBelow){
            return "activeTabStyle"
        }
        else{
            return "inactiveTabStyle"
        }
    }


    return(
        <div style={{ display: "flex", justifyContent: "center" }}>
            
            {
                tabList.map((tab, index)=>(
                    <p
                    className={`${styled(index)}`}
                    onClick={()=>setActiveTab(index)}
                    >
                        {tab.label}
                    </p>
                ))
            }
        </div>
    )
}


export default Tabs;
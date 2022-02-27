
import './App.css';
import Tabs from './components/Tabs';
import Display from './components/Display';
import React, {useState} from 'react'

function App() {
  const tabList = [
    {
        label: "Tab 1",
        content: "Content for the first tab"
    },
    {
        label: "Tab 2",
        content: "Content for the second tab"
    },
    {
        label: "Tab 3",
        content: "Content for the third tab"
    }
]
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="App">
      <Tabs tabList={tabList} activeTab={activeTab} setActiveTab={setActiveTab} />
      <Display tabText={tabList[activeTab].content}/>
    </div>
  );
}

export default App;

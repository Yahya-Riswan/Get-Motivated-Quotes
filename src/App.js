import React, {useState,useEffect} from 'react';
import './App.css';
import logo from "./image.png"
function App() {
    const [data,setdata] = useState([]);
    useEffect(()=>{
      fetch("https://dummyjson.com/quotes").then((res) => res.json())
      .then((json) => setdata(json.quotes));
    },[])

    return (
      <div className="App">
        <div className="header">
          <h1><img src={logo} alt="" /> Get Motivated</h1>
        </div>
        {
          data && data.slice(0, 10).map((quotes)=>(
              <div className='quote' key={quotes.id}>
                 <h1>{quotes.quote}</h1>
                 <i>-{quotes.author}</i>
                 <br/>
              </div>
              
          ))
        }
      </div>
    );
}

export default App;

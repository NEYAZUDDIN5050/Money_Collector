
import './App.css';

import React, { useState} from 'react';  

function App() {
  const [name,setName] = useState('');
  const [datetime,setDatetime] = useState('');
  const [discription,setDiscription] = useState('');
function addNewTransaction(ev){
       ev.preventDefault();
      const url = process.env.REACT_APP_API_URL+ '/transactions';
      fetch(url,  {
        method:'POST',
        header: {'Content-type':'application/json'},
        body:JSON.stringify({name,discription,datetime})
      }).then(response => {
        response.json().then(json => {
          console.log('result',json);
      });
      });
}

  return (
    
      <main>
        <h1>$400<span>.00</span></h1>
        <form onSubmit={addNewTransaction}>
          <div className="bacis">
          <input type="text"
          value={name}
          onChange={ev => setName(ev.target.value)}
           placeholder={'+200 new samsung tv '}/>
          <input value={datetime} 
          onchange={ev => setDatetime(ev.target.value)}
          type="datetime-local"/>
           
          </div>
         <div className="discription">
         <input type="text" 
          value={discription}
          onChange={ev => setDiscription(ev.target.value)}
          placeholder={'discription'}/>
         </div>
         <button type="submit"> Add new transaction
         </button>
          
        </form>
        <div className="transaction">
          <div className="transaction">
            <div className="left">
              <div className="name">New Samsung TV</div>
              <div className="discription">it was time for new tv</div>
            </div>
            <div className="right">
              <div className="price red">-$500</div>
              <div className="datetime">2022-12-18 15:45</div>
               </div>
            </div>
          </div>
          <div className="transaction">
          <div className="transaction">
            <div className="left">
              <div className="name">Gig job new website</div>
              <div className="discription">it was time for new tv</div>
            </div>
            <div className="right">
              <div className="price green">+$400</div>
              <div className="datetime">2022-12-18 15:45</div>
               </div>
            </div>
          </div>
          <div className="transaction">
          <div className="transaction">
            <div className="left">
              <div className="name">Iphone</div>
              <div className="discription">it was time for new tv</div>
            </div>
            <div className="right">
              <div className="price red">-$900</div>
              <div className="datetime">2022-12-18 15:45</div>
               
            </div>
            

        

  
          </div>
        </div>
      </main>

    
    
  );
}

export default App;

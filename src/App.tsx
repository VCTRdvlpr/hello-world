import React from 'react';
import './App.css';
import NavBtnComponent from './components/navBtnComponent';
import { useState } from 'react';

function App() {

  const[contentVisibleHttp, setContentVisibleHttp] = useState(false);

  const handleButtonClickHttp = () =>{
    setContentVisibleHttp(!contentVisibleHttp)
  }

  const[contentVisibleVeVector, setContentVisibleVector] = useState(false);

  const handleButtonClickVector = () =>{
    setContentVisibleVector(!contentVisibleVeVector)
  }

  return (
    <div>
      <h1>Hello world !</h1>    
      <nav>
        <ul className='nav-align'>
          <li>
            <NavBtnComponent title='Http' onClick={handleButtonClickHttp} />
            {contentVisibleHttp && 
              <div className='content-align'>
              <h2>O que é?</h2>
              <p>O HTTP (Hypertext Transfer Protocol ou Protocolo de Transferência de Hipertexto em português) é um 
                protocolo que especifica como será a comunicação entre um navegador e um servidor web, sendo um dos 
                principais da World Wide Web (WWW).
              </p>
              </div>
            }
          </li>
          <li>
            <NavBtnComponent title='WWW' onClick={handleButtonClickVector} />
            {contentVisibleVeVector && 
            <div className='content-align'>
              <h2>O que é?</h2>
              <p>Este protocolo funciona através de um modelo computacional conhecido como cliente-servidor, onde 
                um navegador (cliente) estabelece a comunicação com um servidor e ambos passam a trocar informações 
                entre si.
              </p>
            </div>}
          </li>          
        </ul>
      </nav>
    </div>
  );
}

export default App;

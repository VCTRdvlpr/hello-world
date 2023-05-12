import React from "react";
import MainNavBtnComponent from './mainNavBtnComponent';



const ContentNavBar: React.FC = () => {
  return(
    <nav>      
      <ul className='main-nav-align'>          
        <li>
          <MainNavBtnComponent title='Hardware'/>
        </li>
        <li>
          <MainNavBtnComponent title='Sistemas Operacionais'/>
        </li>
        <li>
          <MainNavBtnComponent title='Linguagem de marcação e estilo'/>
        </li>
        <li>
          <MainNavBtnComponent title='Linguagem de programação'/>
        </li>
        <li>
          <MainNavBtnComponent title='Banco de Dados'/>
        </li>
        <li>
          <MainNavBtnComponent title='Redes e Conexões'/>
        </li>
        <li>
          <MainNavBtnComponent title='Metodologias'/>
        </li>  
        <li>
          <MainNavBtnComponent title='Inteligência artificial'/>
        </li>               
      </ul>                
    </nav>
  )
}

export default ContentNavBar;

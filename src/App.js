import './App.css';
import { useState } from "react";
import Emex from './Components/Emex';
import TrocaVencimento from './Components/TrocaVencimento';
import MultaRecisoria from './Components/MultaRecisoria';

import logo from './imgs/logo.png'

function App() {

  const sites = [<TrocaVencimento/>, <MultaRecisoria/>] // Aqui onde implementa a rota dos sites (Pasta Components)

  const [site, setSite] = useState(<Emex/>)

  const handleClick = (e) => {
    const app = e.target.id

    for (let i = 0; i < sites.length; i++) {
      const componentName = sites[i].type.name

      if(componentName === app){
        setSite(sites[i]);
      }
    }
  }


  return (
    <>

      <div className="container-menu container-fluid px-0 sticky-top">
        <nav className="navbar navbar-expand-sm navbar-dark py-0 px-0 navbar-menu">
        <img style={{cursor: 'pointer'}} src={logo} alt="logo" className="menu" onClick={()=>setSite(<Emex/>)}/>
          <span className="v-line" />
          <button className="navbar-toggler mr-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <button className='nav-link' id={sites[1].type.name} onClick={handleClick} >Multa Recisória</button>
              </li>
              <li className="nav-item ">
               <button className='nav-link' id={sites[0].type.name} onClick={handleClick} >Troca de Vencimento</button>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      

      <div id="app-emex">
          {site}
      </div>
    </>
  )
}

export default App;




/* <li><button id={sites[0].type.name} onClick={handleClick} >Troca de Vencimento</button></li> */
            // <li><button id={sites[1].type.name} onClick={handleClick} >Multa Recisória</button></li>
            // <li><button id={sites[2].type.name} onClick={handleClick} >Análise de desconto</button></li>
            // img style={{cursor: 'pointer'}} src={logo} alt="logo" className="menu" onClick={()=>setSite(<Emex/>)}/>
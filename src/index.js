import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import background from './images/Biodiesel.jpg'
import proprietà from './images/Qualità.jpg'
import money from './images/money.jpg'
import disponibilità from './images/produzione.jpg'
import ambiente from './images/ambiente.jpg'

//Component for background's image
function Background(props) {
  return(
    <img src={props.image} id={props.id} alt=""/>
  )
}

//Component for the Start button
//OnClick it will render the 4-topic's page
function Start() {
  function topics() {
    ReactDOM.render(
      <Index />,
      document.getElementById('root')
    )
  }
  return (
    <button id="start" type="button" onClick={topics}>Iniziamo</button>
  )
}

//Component for the single topic
function Topic(props) {
  return (
    <div>
      <button id={props.id} onClick={props.link}>
        <img src={props.image} id="images" alt=""/>
        <h2>{props.name}</h2>
      </button>
    </div>
  );
}

//Component for topic's index
function Index() {
  //function to return back
  function returning() {
    ReactDOM.render(
      <Landing />,
      document.getElementById('root')
    )
  }

  //functions to link index's topic to their page
  function qualità() {
    ReactDOM.render(
      <Qualità />,
      document.getElementById('root')
    )
  }
  function impatto() {
    ReactDOM.render(
      <Impatto />,
      document.getElementById('root')
    )
  }
  function produzione() {
    ReactDOM.render(
      <Produzione />,
      document.getElementById('root')
    )
  }
  function finanza() {
    ReactDOM.render(
      <Finanza />,
      document.getElementById('root')
    )
  }

  return (
    <div id="container">
      <button onClick={returning} id="link-container">
        Biodiesel: <br /> Il carburante che ci guida nel futuro
      </button>
      <Topic id="topic1" image={proprietà} link={qualità} name="Qualità, specifiche e proprietà"/>
      <Topic id="topic2" image={ambiente} link={impatto} name="Impatto ambientale"/>
      <Topic id="topic3" image={disponibilità} link={produzione} name="Produzione e disponibilità"/>
      <Topic id="topic4" image={money} link={finanza} name="Efficienza ed aspetti finanziari"/>
    </div>
  );
}

//Landing page
function Landing(){
  return (
    <div id="main">
      <Background image={background}/>
      <div id="text-and-button">
        <a href="https://it.wikipedia.org/wiki/Biodiesel" id="title" title="Immagine interattiva" target="_blank">Biodiesel</a>
        <Start />
      </div>
      <div id="names">
        <h4><a href="https://github.com/lucaincarnato/biodiesel" target="_blank">Creato</a> da:</h4>
        <h4>Bellingrath Paola</h4>
        <h4>Incarnato Luca Maria</h4>
        <h4>Passante Giammarco</h4>
        <h4>Sorvillo Giusy</h4>
      </div>
    </div>
  );
}

//function for the Qualità page
function Qualità(props){
  //function to return back
  function returning() {
    ReactDOM.render(
      <Index />,
      document.getElementById('root')
    )
  }

  function GC() {
    ReactDOM.render(
      <Gascromatografia />,
      document.getElementById('root')
    )
  }
  return(
    <div id="qualit">
      <Background image={proprietà} id="image-qualità"/>
      <div id="impatto-container">
        <button id="topic-title" onClick={returning}>Qualità, specifiche e proprietà</button>
        <div id="qualità">
          <div id="left-line"></div>
          <div id="points">
            <button id="point1">Biocombustibile liquido trasparente</button>
            <button id="point2">Estere dimetilico vegetale a lunga catena di acidi grassi</button>
            <button id="point3">Prodotto della transesterificazione dell'olio vegetale</button>
          </div>
        </div>
        <div id="specifiche">
          <div id="central-line"></div>
          <div id="points">
            <button id="point1">BD100 (biodiesel puro, il numero indica la percentuale di purezza)</button>
            <button id="point2" onClick={GC}>Prodotto con la gascromatografia</button>
          </div>
        </div>
        <div id="proprietà">
          <div id="right-line"></div>
          <div id="points">
          <button id="point1">Energia rinnovabile</button>
          <button id="point2">Possibile impiego nei motori a diesel se mescolato con il gasolio</button>
          <button id="point3">Si incendia più velocemente per il maggior numero di cetano</button>
          <button id="point4">Punto di fusione solitamente più alto di quello del gasolio</button>
          <button id="point5">Prodotto biodegradabile</button>
          </div>
        </div>
      </div>
    </div>
  )
}

//function for Gascromatografia
function Gascromatografia(props){
  function returning() {
    ReactDOM.render(
      <Qualità />,
      document.getElementById('root')
    )
  }

  //function to go to the Produzione page
  function Prod(){
    ReactDOM.render(
      <Produzione />,
      document.getElementById('root')
    )
  }

  return (
    <div id="qualit">
      <Background image={proprietà} id="image-qualità"/>
      <div id="impatto-container">
        <button id="topic-title" onClick={returning}>Gascromatografia</button>
        <div id="gascrom">
          <button id="point1" onClick={Prod}>Rimozione glicerolo</button>
          <button id="point2" onClick={Prod}>Rimozione catalizzatore</button>
          <button id="point3" onClick={Prod}>Rimozione alcoli</button>
          <button id="point4" onClick={Prod}>Rimozione acidi grassi</button>
        </div>
      </div>
    </div>
  )
}

//function for the Impatto ambientale page
function Impatto(props){
  //function to return back
  function returning() {
    ReactDOM.render(
      <Index />,
      document.getElementById('root')
    )
  }

  return(
    <div id="impatto">
      <Background image={ambiente} id="image-ambiente"/>
      <div id="impatto-container">
        <button id="topic-title" onClick={returning}>Impatto ambientale</button>
        <div id="vantaggi">
          <h2 id="van-text">Vantaggi</h2>
          <div id="scroll">
            <button className="impatto-points" id="vant1">Maggiore incendiabilità</button>
            <button className="impatto-points" id="vant2">Non è esplosivo</button>
            <button className="impatto-points" id="vant3">Biodiegradabile</button>
            <button className="impatto-points" id="vant4">Minori emissioni</button>
            <button className="impatto-points" id="vant5">Composto da risorse rinnovabili</button>
            <button className="impatto-points" id="vant6">Composizione sostenibile</button>
          </div>  
        </div>
        <div id="separator"></div>
        <div id="svantaggi">
          <h2 id="svan-text">Svantaggi</h2>
          <div id="scroll">
            <button className="impatto-points" id="svan1">Emissione di ossido di azoto</button>
            <button className="impatto-points" id="svan2">Intensificazione produzione oli vegetali</button>
            <button className="impatto-points" id="svan3">Aumento del prezzo delle materie prime</button>
          </div>
        </div>
      </div>

    </div>
  )
}

//function for the Produzione e disponibilità page
function Produzione(props) {
  //function to return back
  function returning() {
    ReactDOM.render(
      <Index />,
      document.getElementById('root')
    )
  }

  return(
    <div id="produzione">
      <Background image={disponibilità} id="image-produzione"/>
      <div id="impatto-container">
        <button id="topic-title" onClick={returning}>Produzione e disponibilità</button>
      </div>
    </div>
  )
}

//function for the Finanza page
function Finanza(props){
  //function to return back
  function returning() {
    ReactDOM.render(
      <Index />,
      document.getElementById('root')
    )
  }

  return(
    <div id="finanza">
      <Background image={money} id="image-finanza"/>
      <div id="impatto-container">
        <button id="topic-title" onClick={returning}>Efficienza ed aspetti finanziari</button>
      </div>
    </div>
  )
}


ReactDOM.render(
  <Landing />,
  document.getElementById('root')
);

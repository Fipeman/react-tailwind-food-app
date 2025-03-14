import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Step from './components/Step';
import BottomLead from './components/BottomLead';
import Footer from './components/Footer';

import logo from "./assets/bujia2.svg";
import Rectangle_3 from './assets/PcMobileBujia.png';
import Rectangle_4 from './assets/2PcMobileBujia.png';
import Rectangle_5 from './assets/bujiaRewards.png';


function App() {
  const data = {
    hero:{
      appType: 'Bujia',
      tagLine: 'Mantiene al dia todos los registros de tu vehiculo',
      description: 'Ingresa a la plataforma ahora!, es SUPER simple!',
      mainActionText: 'Ingresa',
      extraActionText: 'Registrate',
    },
    step1: {
      title: 'Crea una cuenta',
      heading: 'Puedes crear una cuenta o ingresar con tus RRSS',
      description: 'asi de simple ya tienes tu cuenta en bujia y puedes empezar a utilizar la plataforma GRATIS!',
      img: Rectangle_3,
      alternate: false,
    },
    step2: {
      title: 'Explora tu panel de usuario',
      heading: 'registra tu auto y comienza la experiencia Bujia',
      description: 'facilmente registra tu auto con lso campos solicitados y luego comienza a subir los registros de mantencion/servicios que le has realizado',
      img: Rectangle_4,
      alternate: true,
    },
    step3: {
      title: 'Beneficios',
      heading: "Obten muchos beneficios con Bujia junto a nuestro programa de rewards!",
      description: "Cada vez que interactuas con Bujia acumulas puntos los cuales te otorgan nivel para acceder a descuentos y promociones en el mundo automotriz",
      img: Rectangle_5,
      alternate: false,
    },
    bottomLead: {
      actionText: 'Se parte de',
      extraText:'Bujia Partner',
      description: 'Es una plataforma con la cual podras llevar a tu negocio a otro nivel en la transformacion digital',
      mainActionText: 'Ingresa',
      extraActionText: 'Mas info',
    },
  }
  return (
    // __________________________TODO: ____________________
    // Add Montserrat font to everything (body)
    
    <div className="box-border font-Inter">
      <div className="flex flex-col">
        
        <Navbar logo={logo}/>
        <Hero 
          appType={data.hero.appType}
          tagLine={data.hero.tagLine}
          description={data.hero.description}
          mainActionText={data.hero.mainActionText}
          extraActionText={data.hero.extraActionText}
        />
        
        {/* <div id="divider" className="rounded-full ring-2 ring-gray-200 lg:w-1/2 lg:mx-auto "></div> */}
        
        <div id="faq" className="lg:pt-20 lg:mb-20 sm:pt-8 sm: mb-8 text-2xl font-semibold text-center text-gray2 lg:font-bold">¿Como funciona? </div>
        
        <Step
          title={data.step1.title}
          heading={data.step1.heading}
          description={data.step1.description}
          img={data.step1.img}
          alternate={data.step1.alternate}
          />
          <Step
          title={data.step2.title}
          heading={data.step2.heading}
          description={data.step2.description}
          img={data.step2.img}
          alternate={data.step2.alternate}
          />
          <Step
          title={data.step3.title}
          heading={data.step3.heading}
          description={data.step3.description}
          img={data.step3.img}
          alternate={data.step3.alternate}
          />
          
          <BottomLead 
            actionText={data.bottomLead.actionText}
            extraText={data.bottomLead.extraText}
            description={data.bottomLead.description}
            mainActionText={data.bottomLead.mainActionText}
            extraActionText={data.bottomLead.extraActionText}
          />

          <Footer logo={logo}/>
      </div>
    </div>
  );
}

export default App;

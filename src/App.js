import { Container } from 'react-bootstrap';
import './App.css';
import './bootstrap.min.css';
import WholeNav from './Components/Nav/WholeNav';
import MainSection from './Components/MainSection/MainSection';
import TitleBanner from './Components/MainSection/TitleBanner/TitleBanner';
//import ParticlesBg from './Components/Particles/ParticlesBg';
import ContactSection from './Components/ContactSection/ContactSection';
import CarouselSection from './Components/CarousellSection/CarouselSection';
import FooterSection from './Components/FooterSection/FooterSection';
import OfferSection from './Components/OfferSection/OfferSection';

function App() {
  return (
    <div className='App'>
      {/* <ParticlesBg id='top' /> */}
      <WholeNav />
      <Container>
        <section id='titleBanner'>
          <TitleBanner />
        </section>
        <section id='mainSection' style={{ overflow: 'hidden' }}>
          <MainSection />
        </section>
        <section id='carousel'>
          <CarouselSection />
        </section>
        <section id='offerSection'>
          <OfferSection />
        </section>
        <section id='contactSection'>
          <ContactSection />
        </section>
      </Container>
      <footer>
        <FooterSection />
      </footer>
    </div>
  );
}

export default App;

import { Container } from 'react-bootstrap';
import './App.css';
import './bootstrap.min.css';
import WholeNav from './Components/Nav/WholeNav';
import MainSection from './Components/MainSection/MainSection';
import TitleBanner from './Components/TitleBanner/TitleBanner';

function App() {
  return (
    <div className='App'>
      <WholeNav />
      <Container>
        <section id='titleBanner'>
          <TitleBanner />
        </section>
        <section id='mainSection'>
          <MainSection />
        </section>
      </Container>
    </div>
  );
}

export default App;

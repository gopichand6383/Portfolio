import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Partners from './components/Partners';
import Works from './components/Works';
import WorkStrategy from './components/WorkStrategy';
import './App.css';
import ServicesOffer from './components/ServicesOffer';
import AdditionalDetails from './components/AdditionalDetails';
import Contact from './components/Contact';
import Metrics from './components/Metrics';
import Brands from './components/Brands';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Partners />
      <div id="content">
        <Works />
        <div id="about">
          <Metrics/>
          <WorkStrategy />
          <Brands/>
          <ServicesOffer />
          <AdditionalDetails />
        </div>
        <Contact />
      </div>
    </div>
  );
}

export default App;
import './App.css';
import FakeBackend from './api/fakeBackend/FakeBackend.jsx'
import About from './components/about/About.jsx';
import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';
import Hero from './components/hero/Hero.jsx';



function App() {

  return (
    <div className="App">
      <FakeBackend>
        <Header />
        <Hero />
        <About />
        <Footer />
      </FakeBackend>
    </div>
  );
}

export default App;

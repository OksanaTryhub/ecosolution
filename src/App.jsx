import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Cases from './components/Cases';
import Faq from './components/Faq';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Electricity from './components/Electricity/Electricity';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Main />
        <About />
        <Electricity/>
        <Cases />
        <Faq />
        <ContactUs/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;

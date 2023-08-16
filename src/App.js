import './App.css';
import HeroSection from './Components/Hero/HeroSection';
import PaymentSection from './Components/Payments/PaymentSection';
import BankingSection from './Components/Banking/BankingSection';
import CashCard from './Components/CashCard/CashCard';
import InvestSection from './Components/Investing/InvestSection';

function App() {
  return (
    <div className="App">
        <HeroSection/>
        <PaymentSection/>
        <BankingSection/>
        <CashCard/>
        <InvestSection/>  
    </div>
  );
}

export default App;

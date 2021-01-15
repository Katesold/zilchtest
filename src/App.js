import { useState } from 'react';
import CardView from './CardView';
import AddCardForm from './AddCardForm';
import './App.css';

function App() {

  const [name, setName] = useState('John Doe');
  const [cardNumber, setCardNumber] = useState('1234123412341234');
  const [cardType, setCardType] = useState('Visa');
  const [month, setMonth] = useState('10');
  const [year, setYear] = useState('22');
  const [CVV, setCVV] = useState('123');

  const months = {
    "january": 1,
    "february": 2,
    "march": 3,
    "april": 4,
    "may": 5,
    "june": 6,
    "july": 7,
    "august": 8,
    "september": 9,
    "october": 10,
    "november": 11,
    "december": 12,
  }

  const years = {
    "2021": 21,
    "2022": 22,
    "2023": 23,
    "2024": 24,
    "2025": 25,
  }

  const handleNumberChange = (number) => {
    setCardNumber(number);
  }

  const handleMonthChange = (monthName) => {
    const newMonth = months[monthName];
    setMonth(newMonth);
  }

  const handleYearChange = (yearName) => {
    const newYear = years[yearName];
    setYear(newYear);
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="homepage__title">Add New Card</h1>
      </header>
      <section className="card">
      <CardView  name={name} cardNumber={cardNumber} cardType={cardType} month={month} year={year} CVV={CVV} />
      <AddCardForm setName={setName} handleNumberChange={handleNumberChange} setCardType={setCardType} handleMonthChange={handleMonthChange} handleYearChange={handleYearChange} setCVV={setCVV} />
      </section>
    </div>
  );
}

export default App;

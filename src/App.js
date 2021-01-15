import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardView from './CardView';
import AddCardForm from './AddCardForm';
import { saveCardData } from './store/actions/card';
import './App.css';

function App() {

  /**
   * The App component handles the state and logic for its children AddCardForm and CardView
   * AddCardForm updates the states upon user interaction via state hooks
   * CardView displays the card details on a formatted area visually representing a real card object 
   */

  const dispatch = useDispatch(); // Redux hook for dispatching actions

  const isCardSaved = useSelector(state => state.card.cardSaved); // if the API call was successful then it's true

  const [name, setName] = useState('John Doe');
  const [cardNumber, setCardNumber] = useState('1234123412341234');
  const [cardType, setCardType] = useState('Visa');
  const [month, setMonth] = useState('10');
  const [year, setYear] = useState('22');
  const [CVV, setCVV] = useState('123');
  const [notification, setNotification] = useState(false);

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

  useEffect(() => {
    if (isCardSaved) {
      setNotification(true);
    }
  }, [isCardSaved])

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

  const handleSave = (e) => {
    e.preventDefault();
    const cardData = {
      name,
      cardNumber,
      cardType,
      month,
      year,
      CVV
    }
    // save card details POST API call and if it was successful then Card saved will be displayed to user
    dispatch((saveCardData(cardData)));
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="homepage__title">Add New Card</h1>
        {notification ? <p>Card Saved!</p> : null}
      </header>
      <section className="card">
        <CardView name={name} cardNumber={cardNumber} cardType={cardType} month={month} year={year} CVV={CVV} />
        <AddCardForm setName={setName} handleNumberChange={handleNumberChange} setCardType={setCardType} handleMonthChange={handleMonthChange} handleYearChange={handleYearChange} setCVV={setCVV} handleSave={handleSave} />
      </section>
    </div>
  );
}

export default App;

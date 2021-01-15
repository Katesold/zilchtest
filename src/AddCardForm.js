import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './AddCardForm.css';

const AddCardForm = ({ setName, handleNumberChange, setCardType, handleMonthChange, handleYearChange, setCVV, handleSave }) => {

    const [newCardNumber, setNewCardNumber] = useState(1234123412341234);
    const [isInvalid, setIsInvalid] = useState(false);
    const [isInvalidCVV, setIsInvalidCVV] = useState(false);
    const [newCVV, setNewCVV] = useState(0);

    // warning for user if card number includes string values
    useEffect(() => {
        if (newCardNumber.length > 16) {
            setIsInvalid(true);
        } else {
            setIsInvalid(false);
        }
    }, [newCardNumber]);

    // warning for user if CVV includes string values
    useEffect(() => {
        const copyOfCVV = newCVV;
        const testIfNumber = Number(copyOfCVV);
        if (newCVV.length > 3 || Number.isNaN(testIfNumber)) {
            setIsInvalidCVV(true);
        } else {
            setIsInvalidCVV(false);
        }
    }, [newCVV]);

    const handleNewNumberChange = (e) => {
        setNewCardNumber(e.target.value);
        handleNumberChange(e.target.value);
    }

    const handleNewCVVChange = (e) => {
        setCVV(e.target.value);
        setNewCVV(e.target.value);
    }

    return (
        <div className="add-cc">
            <form className="add-cc__credit-card">
                <div className="add-cc__form-header">
                    <h2 className="add-cc__title2">Add New Credit Card</h2>
                </div>
                <div className="add-cc__form-body">
                    <input type="text" className="add-cc__name" placeholder="John Doe" onChange={(e) => setName(e.target.value)}></input>
                    <input type="number" className="add-cc__card-number" maxLength="16" placeholder="Card Number" onChange={handleNewNumberChange}></input>
                    {isInvalid ? <p className="invalid">Invalid! 16 digits required</p> : null}
                    <div className="add-cc__date-field">
                        <div className="add-cc__month">
                            <select name="Month" onChange={(e) => handleMonthChange(e.target.value)} >
                                <option value="january">January</option>
                                <option value="february">February</option>
                                <option value="march">March</option>
                                <option value="april">April</option>
                                <option value="may">May</option>
                                <option value="june">June</option>
                                <option value="july">July</option>
                                <option value="august">August</option>
                                <option value="september">September</option>
                                <option value="october">October</option>
                                <option value="november">November</option>
                                <option value="december">December</option>
                            </select>
                        </div>
                        <div className="add-cc__year">
                            <select name="Year" onChange={(e) => handleYearChange(e.target.value)}>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2024">2025</option>
                            </select>
                        </div>
                    </div>

                    <div className="add-cc__verification">
                        <div className="add-cc__cvv">
                            <input type="number" placeholder="CVV" maxLength="3" onChange={handleNewCVVChange}></input>
                            {isInvalidCVV ? <p className="add-cc__cvv-details alert">3 digits at the back</p> : <p className="add-cc__cvv-details">3 digits at the back</p> }
                        </div>
                        <div className="add-cc__type">
                            <select name="Type" onChange={(e) => setCardType(e.target.value)}>
                                <option value="visa">Visa</option>
                                <option value="mastercard">MasterCard</option>
                            </select>
                        </div>
                    </div>

                    <button onClick={handleSave} className="add-cc__save-card">Save</button>
                </div>
            </form>
        </div>
    );
}

AddCardForm.propTypes  = {
    setName: PropTypes.func.isRequired, 
    handleNumberChange: PropTypes.func.isRequired, 
    setCardType: PropTypes.func.isRequired, 
    handleMonthChange: PropTypes.func.isRequired, 
    handleYearChange: PropTypes.func.isRequired, 
    setCVV: PropTypes.func.isRequired, 
    handleSave: PropTypes.func.isRequired,
}

export default AddCardForm;
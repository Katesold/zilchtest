import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CardView.css';

const CardView = ({ name, cardNumber, cardType, month, year, CVV }) => {
    const dispatch = useDispatch();

    const [displayNumber, setDisplayNumber] = useState('1234 1234 1234 1234')

    useEffect(() => {
        const formattedNums = [...cardNumber].map((d, i) => (i) % 4 == 0 ? ' ' + d : d).join('').trim();
        setDisplayNumber(formattedNums);
    },[cardNumber])

    return (
        <div className="card-view">
                <h2 className="card-view__title">Card Details</h2>
                <div className="card-view__container">
                        <div className="card-view__credit-card"> 
                            <p className="card-view__company">Famous Bank</p>
                            <div className="card-view__cardnumber">
                                <p className="card-view__digits">{displayNumber}</p>
                            </div>
                            <div className="card-view__expire">
                                <p className="card-view__text">CVV</p>
                                <p>{CVV}</p>
                                <p className="card-view__text">Expires</p>
                                <p>{month}/{year}</p>
                            </div>
                            <p className="card-view__cardholder">{name}</p>
                            <p className="card-view__type">{cardType}</p>
                        </div>
            </div>

        </div>);
}

export default CardView;
import { render, screen } from '@testing-library/react';
import  CardView from './CardView';

test('should render with passed in data displayed', () => {
    const props = {
        name: 'test', cardNumber: '4444444444444444', cardType: 'Visa', month: 11, year: 21, CVV: 333
    }
    render(<CardView {...props} />)

    const visaText = screen.getByText('Visa');
    expect(visaText).toBeInTheDocument(true);

    const dateText = screen.getByText('11/21');
    expect(dateText).toBeInTheDocument(true);

    const nameText = screen.getByText('test');
    expect(nameText).toBeInTheDocument(true);

    const titleText = screen.getByText('Card Details');
    expect(titleText).toBeInTheDocument(true);
})
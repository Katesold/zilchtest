import { render, screen } from '@testing-library/react';
import AddCardForm from './AddCardForm';

test('should render with default data displayed', () => {

    const setName = jest.fn(x => 'test2');
    const handleNumberChange = jest.fn(x => '22');
    const setCardType = jest.fn(x => 'MasterCard');
    const handleMonthChange = jest.fn(x => 'january');
    const handleYearChange = jest.fn(x => '2024');
    const setCVV = jest.fn(x => '334');
    const handleSave = jest.fn(x => {});

    const props = {
        setName, handleNumberChange, setCardType, handleMonthChange, handleYearChange, setCVV, handleSave
    }
    render(<AddCardForm {...props} />);

    const titleText = screen.getByText('Add New Credit Card');
    expect(titleText).toBeInTheDocument(true);

    const warningText = screen.queryAllByText('Invalid! 16 digits required');
    expect(warningText).toHaveLength(0);

    const nameText = screen.getByPlaceholderText('John Doe');
    expect(nameText).toHaveClass('add-cc__name');

    const yearText = screen.getByText('2021');
    expect(yearText).toBeInTheDocument(true);

    const digitsText = screen.getByText('3 digits at the back');
    expect(digitsText).toHaveClass('add-cc__cvv-details');

    const button = screen.getByRole('button');
    expect(button).toHaveClass('add-cc__save-card');
    expect(button).toHaveTextContent('Save');
    
});
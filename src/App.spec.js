import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import store from './store/store';
import App from './App';


jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

const server = setupServer(
  rest.post('/save', (req, res, ctx) => {
    return res('Data written to file');
  })
)

beforeAll(() => {
  server.listen();
})
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('renders App main component', () => {
  const dispatch = jest.fn();
  render(<Provider store={store}><App /></Provider>);

  const titleElement = screen.getByText('Add New Card');
  expect(titleElement).toBeInTheDocument(true);

  const addedElement = screen.queryByText('Card Saved!');
  expect(addedElement).toBe(null);
  
});

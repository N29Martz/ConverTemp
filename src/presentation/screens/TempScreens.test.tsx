// TempScreens.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { TempScreens } from './TempScreens';

jest.mock('../hooks/useTemp', () => ({
  useTemp: () => ({
    temp: '',
    tempUnit: 'C',
    handleTempChange: jest.fn(),
    handleUnitChange: jest.fn(),
    handleConvert: jest.fn(() => '32.00'),
  }),
}));

describe('TempScreens', () => {
  it('renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(<TempScreens />);
    expect(getByText('Convertidor de Tememperatura')).toBeTruthy();
    expect(getByPlaceholderText('Ingrese temperatura en C')).toBeTruthy();
    expect(getByText('Celsius a Fahrenheit')).toBeTruthy();
    expect(getByText('Fahrenheit a Celsius')).toBeTruthy();
    expect(getByText('Convertir')).toBeTruthy();
  });

  it('handles button press', () => {
    const { getByText } = render(<TempScreens />);
    const convertButton = getByText('Convertir');
    fireEvent.press(convertButton);
    // You might want to add more assertions here to check if the alert is shown
  });
});
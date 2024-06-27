// useTemp.test.tsx
import { renderHook, act } from '@testing-library/react-native';
import { useTemp } from './useTemp';

describe('useTemp', () => {
  // ... otros tests ...

  it('converts Celsius to Fahrenheit correctly', () => {
    const { result } = renderHook(() => useTemp());
    act(() => {
      result.current.handleTempChange('0');
      result.current.handleUnitChange('C');
    });
    let convertedTemp;
    act(() => {
      convertedTemp = result.current.handleConvert();
    });
    expect(convertedTemp).toBe('32.00');
  });

  it('converts Fahrenheit to Celsius correctly', () => {
    const { result } = renderHook(() => useTemp());
    act(() => {
      result.current.handleTempChange('32');
      result.current.handleUnitChange('F');
    });
    let convertedTemp;
    act(() => {
      convertedTemp = result.current.handleConvert();
    });
    expect(convertedTemp).toBe('0.00');
  });
});
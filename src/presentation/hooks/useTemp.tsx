import {useState} from 'react';

export const useTemp = () => {
  const [temp, setTemp] = useState(''); // Valor temperatura
  const [tempUnit, setTempUnit] = useState('C'); // unidad ingresada

  const handleTempChange = (value: string) => {
    setTemp(value);
  };

  const handleUnitChange = (value:string) => {
    setTempUnit(value);
  };

  const handleConvert = () => {
    const parsedTemp = parseFloat(temp);
    if (!isNaN(parsedTemp)) {
      let result;
      if (tempUnit === 'C') {
        result = parsedTemp * (9 / 5) + 32; // Convertir de Celsius a Fahrenheit
      } else {
        result = (parsedTemp - 32) * (5 / 9); // Convertir de Fahrenheit a Celsius
      }
      setTemp(''); // Limpiar el input después de la conversión
      return result.toFixed(2);
    } else {
        return null;
    }
  };

  return {
    temp,
    tempUnit,
    handleTempChange,
    handleUnitChange,
    handleConvert,
  };
};

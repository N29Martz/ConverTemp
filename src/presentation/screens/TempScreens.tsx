import {Alert, Pressable, Text, TextInput, View} from 'react-native';
import {styles} from '../../config/temp-theme';
import {RadioButton} from 'react-native-paper';
import {useTemp} from '../hooks/useTemp';

export const TempScreens = () => {
  const {
    temp,
    tempUnit,
    handleTempChange,
    handleUnitChange,
    handleConvert,
  } = useTemp();

  const showAlert = (convertedTemp: string) => {
    Alert.alert(
      "Temperatura Convertida",
      `La temperatura convertida es: ${convertedTemp} °${tempUnit === 'C' ? 'F' : 'C'}`,
      [{ text: "OK", onPress: () => console.log("OK Pressed") }]
    );
  };

  const handlePress = () => {
    const convertedTemp = handleConvert();
    if (convertedTemp !== null) {
      showAlert(convertedTemp);
    }
  };

  return (
    <View style={styles.background}>
      <Text style={styles.title}>Convertidor de Tememperatura</Text>
      <TextInput
        style={styles.tempInput}
        placeholder={`Ingrese temperatura en ${tempUnit}`}
        placeholderTextColor="gray"
        keyboardType="numeric"
        value={temp}
        onChangeText={handleTempChange}
      />
      <Text style={styles.tempText}>
        Seleccione la Temperatura a la que desea Convertir
      </Text>

      <RadioButton.Group onValueChange={handleUnitChange} value={tempUnit}>
        <View style={styles.tempSelect}>
          <RadioButton value="C" />
          <Text style={styles.tempText}>Celsius a Fahrenheit</Text>
        </View>
        <View style={styles.tempSelect}>
          <RadioButton value="F" />
          <Text style={styles.tempText}>Fahrenheit a Celsius</Text>
        </View>
      </RadioButton.Group>

      <Pressable style={styles.tempButton} onPress={handlePress}>
        <Text>Convertir</Text>
      </Pressable>

    </View>
  );
};

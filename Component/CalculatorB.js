import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styleS from '../styleS'

export default function CalculatorB() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(null);

  // Handle numbers from user
  const handleNumberPress = (ButtonValue) => {
    if (result !== null) {
      // Reset if a new calculation starts after getting a result
      setFirstNumber(ButtonValue);
      setResult(null);
    } else {
      setFirstNumber(firstNumber + ButtonValue);
    }
  };

  // Handle operations from user
  const handleOperationPress = (ButtonValue) => {
    if (result !== null) {
        setSecondNumber(result);
        setFirstNumber("");
        setOperation(ButtonValue);
        setResult(null);
      } 
      else {
        setOperation(ButtonValue);
        setSecondNumber(firstNumber);
        setFirstNumber("");
      }
  };

  // Clear the screen
  const clearScreen = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setResult(null);
  };

  // Perform operations on user values
  const calculateResult = () => {
    switch (operation) {
      case "+":
        clearScreen();
        setResult(parseInt(secondNumber) + parseInt(firstNumber));
        break;
      case "-":
        clearScreen();
        setResult(parseInt(secondNumber) - parseInt(firstNumber));
        break;
      case "*":
        clearScreen();
        setResult(parseInt(secondNumber) * parseInt(firstNumber));
        break;
      case "/":
        clearScreen();
        setResult(parseInt(secondNumber) / parseInt(firstNumber));
        break;
      default:
        clearScreen();
        setResult(0);
        break;
    }
  };

  const CalcButton = ({ title, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styleS.button, style]}>
      <Text style={styleS.buttonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styleS.container}>
      {/* Box to display Numbers on a Bg */}
      <View style={styleS.displayContainer}>
      <Text style={styleS.displayText}>
  {result !== null ? result : `${secondNumber} ${operation} ${firstNumber}` || "0"}
</Text>
      </View>

      {/* Calculator Key Pad */}
      <View style={styleS.row}>
        <CalcButton title="C" onPress={clearScreen} style={styleS.operationButton} />
        <CalcButton title="+/-" onPress={() => handleOperationPress("+/-")} style={styleS.operationButton} />
        <CalcButton title="%" onPress={() => handleOperationPress("%")} style={styleS.operationButton} />
        <CalcButton title="÷" onPress={() => handleOperationPress("/")} style={styleS.operationButton} />
      </View>

      <View style={styleS.row}>
        <CalcButton title="7" onPress={() => handleNumberPress("7")} />
        <CalcButton title="8" onPress={() => handleNumberPress("8")} />
        <CalcButton title="9" onPress={() => handleNumberPress("9")} />
        <CalcButton title="x" onPress={() => handleOperationPress("*")} style={styleS.operationButton} />
      </View>

      <View style={styleS.row}>
        <CalcButton title="4" onPress={() => handleNumberPress("4")} />
        <CalcButton title="5" onPress={() => handleNumberPress("5")} />
        <CalcButton title="6" onPress={() => handleNumberPress("6")} />
        <CalcButton title="-" onPress={() => handleOperationPress("-")} style={styleS.operationButton} />
      </View>

      <View style={styleS.row}>
        <CalcButton title="1" onPress={() => handleNumberPress("1")} />
        <CalcButton title="2" onPress={() => handleNumberPress("2")} />
        <CalcButton title="3" onPress={() => handleNumberPress("3")} />
        <CalcButton title="+" onPress={() => handleOperationPress("+")} style={styleS.operationButton} />
      </View>

      <View style={styleS.row}>
        <CalcButton title="." onPress={() => handleNumberPress(".")} style={styleS.button1}/>
        <CalcButton title="0" onPress={() => handleNumberPress("0")} style={styleS.button1}/>
        <CalcButton title="=" onPress={calculateResult} style={styleS.wideButton} />
      </View>

    </View>
  );
}

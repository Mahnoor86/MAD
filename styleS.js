import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    padding: 20,
  },
  displayContainer: {
    backgroundColor: 'transparent',
    padding: 30,
    borderRadius: 8,
    marginBottom: 10,
  },
  displayText: {
    fontSize: 48,
    color: 'white',
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  button: {
    width: 94,
    height: 94,
    backgroundColor: 'gray',
    borderRadius: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wideButton: {
    width: 125, 
    backgroundColor: 'orange',
  },
  button1:{
    width: 125, 
  },
  operationButton: {
    backgroundColor: 'orange',
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
  },
});

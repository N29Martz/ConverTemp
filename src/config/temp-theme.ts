import {StyleSheet} from 'react-native';

export const colors = {
  darkGray: '#373A40',
  lightGray: '#686D76',
  title: '#7776B3',
  text: '#000000',
  background: '#EEEEEE',
};

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.background,
  },
  title: {
    color: colors.title,
    fontSize: 24,
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 25,
    fontWeight: '900',
    fontStyle: 'italic',
  },
  tempInput: {
    color: colors.lightGray,
    borderColor: colors.lightGray,
    borderWidth: 2,
    borderRadius: 15,
    margin: 15,
    padding: 10,
    fontSize: 15,
  },
  tempText: {
    color: colors.text,
    fontSize: 17,
    fontWeight: 'regular',
    marginLeft: 8,
  },
  tempSelect: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  tempButton: {
    backgroundColor: colors.title,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 25,
    padding: 10,
  },
  tempResult: {
    color: colors.text,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '300',
  },
});

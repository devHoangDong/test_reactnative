import { StyleSheet } from 'react-native';
import { scaledSize } from './scaledSize';
import theme from './theme';
import { trackPromise, usePromiseTracker } from "react-promise-tracker";


const styleUserInfo = StyleSheet.create({
  cardContainer: {
    marginHorizontal: scaledSize(theme.HORIZONTAL_PADDING),
    flex: 1,
    width: '100%'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: scaledSize(30)
  },
  button: {
    width: "40%"
  },
});

export default styleUserInfo;

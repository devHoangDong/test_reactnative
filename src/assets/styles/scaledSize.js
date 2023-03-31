import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('screen');

// Use iPhone X as base size which is 375 x 812
const baseWidth = 375;
const baseHeight = 812;

let scaleWidth = width / baseWidth;
let scaleHeight = height / baseHeight;
if (Platform.OS !== 'ios') {
  scaleHeight = (height - 50) / baseHeight;
}

const scale = Math.min(scaleWidth, scaleHeight);

export const scaledSize =
  (size) => Math.ceil((size * scale));

import { StyleSheet } from 'react-native';
import { scaledSize } from './../assets/styles/scaledSize';
import globalStyles from './../assets/styles/stylesGlobal';
import theme from './../assets/styles/theme';

const stylesButton = StyleSheet.create({
    wrapper: {
        backgroundColor: theme.COLORS.primary,
        height: scaledSize(theme.SIZES.BUTTON_HEIGHT),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: scaledSize(theme.SIZES.BUTTON_BORDER_RADIUS),
    },
    wrapperOutline: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: theme.COLORS.border_button_color,
    },
    text: {
        ...globalStyles.text,
        fontSize: theme.FONT_SIZE_LARGE,
        color: theme.COLORS.text_button_color,
        fontWeight: theme.FONT_WEIGHT_SEMI_BOLD,
    },
    wrapText: {
        justifyContent: 'center',
        alignContent: 'space-around',
    },
    textWhite: {
        color: theme.COLORS.white,
    },
});

export default stylesButton;

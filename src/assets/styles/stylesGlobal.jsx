import { StyleSheet } from 'react-native';
import { scaledSize } from './scaledSize';
import theme from './theme';

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.COLORS.white,
        paddingHorizontal: scaledSize(theme.SIZES.HORIZONTAL_PADDING),
    },
    content: {
        paddingHorizontal: scaledSize(theme.SIZES.CONTENT_HORIZONTAL_PADDING),
    },
    text: {
        color: theme.COLORS.text,
        fontFamily: theme.FONT,
        fontSize: scaledSize(theme.FONT_SIZE_MEDIUM),
    },
    textDanger: {
        color: theme.COLORS.error,
    },
    textCenter: {
        textAlign: 'center',
    },
    textPrimary: {
        color: theme.COLORS.primary,
    },
    textError: {
        color: theme.COLORS.error,
    },
    textSuccess: {
        color: theme.COLORS.success,
    },
    textWarning: {
        color: theme.COLORS.warning,
    },
    textInfo: {
        color: theme.COLORS.primary,
    },
    wrapInput:{
        marginBottom: scaledSize(theme.SIZES.INPUT_MARGIN_BOTTOM),
    },
    inputText: {
        fontFamily: theme.FONT,
        fontWeight: theme.FONT_WEIGHT_THIN,

        height: scaledSize(theme.SIZES.INPUT_HEIGHT),
        width: '100%',

        alignItems: 'center',
        fontSize: scaledSize(theme.FONT_SIZE_LARGE),
        paddingHorizontal: scaledSize(theme.SIZES.INPUT_HORIZONTAL),

        borderRadius: scaledSize(theme.SIZES.BORDER_RADIUS),
        borderWidth: theme.SIZES.BORDER_WIDTH,
        borderColor: theme.COLORS.border_color,
    },
    fontWeightSemiBold: {
        fontWeight: theme.FONT_WEIGHT_SEMI_BOLD,
    },
    fontWeightBold: {
        fontWeight: theme.FONT_WEIGHT_BOLD,
    },
    fontWeightExtraBold: {
        fontWeight: theme.FONT_WEIGHT_EXTRA_BOLD,
    },
    fontWeightMedium: {
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
    },
    fontWeightLight: {
        fontWeight: theme.FONT_WEIGHT_LIGHT,
    },
});

export default globalStyles;

import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import theme from './../assets/styles/theme';
import stylesButton from './Button.style';

function Button(props) {
    const { color, label, style, icon, type, ...extraProps } = props;
    const colorMap = {
        success: theme.COLORS.success,
        warning: theme.COLORS.warning,
        error: theme.COLORS.error,
        primary: theme.COLORS.primary,
    };
    const codeColor = colorMap[color] ?? theme.COLORS.text_button_color;

    if (type === 'outline') {
        return (
            <TouchableOpacity
                style={{ ...stylesButton.wrapper, ...stylesButton.wrapperOutline, ...style, borderColor: codeColor }}
                activeOpacity={0.75}
                {...extraProps}
            >
                {icon}
                <Text
                    style={{
                        ...stylesButton.text,
                        color: codeColor,
                    }}
                >
                    {label}
                </Text>
            </TouchableOpacity>
        );
    }
    return (
        <TouchableOpacity
            style={{ ...stylesButton.wrapper, ...style, backgroundColor: codeColor, borderColor: codeColor }}
            activeOpacity={0.75}
            {...extraProps}
        >
            {icon}

            <Text
                style={{
                    ...stylesButton.text,
                    color: theme.COLORS.white,
                }}
            >
                {label}
            </Text>
        </TouchableOpacity>
    );
}

export default Button;

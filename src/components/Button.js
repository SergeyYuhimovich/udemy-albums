import React from 'react';
import { Text, TouchableOpacity} from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',

        marginHorizontal: 5,

        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',

        backgroundColor: '#fff'
    },
    textStyle: {
        alignSelf: 'center',

        paddingVertical: 10,

        fontSize: 16,
        fontWeight: '600',
        color: '#007aff'
    }
};

export default Button;

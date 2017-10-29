import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
    const { headerViewStyle, headerTextStyle } = styles;
    const { headerText } = props;

    return (
        <View style={headerViewStyle}>
            <Text style={headerTextStyle}>{headerText}</Text>
        </View>
    );
};

const styles = {
    headerViewStyle: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',

        height: 60,
        paddingTop: 15,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,

        backgroundColor: '#f8f8f8',

        elevation: 2
    },

    headerTextStyle: {
        fontSize: 20
    }
};

export default Header;

import React from 'react';
import { View, Text } from 'react-native';

const CardSection = (props) => {
    const { cardSectionViewStyle } = styles;

    return (
        <View style={cardSectionViewStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    cardSectionViewStyle: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'flex-start',

        padding: 5,

        borderBottomWidth: 1,
        borderColor: '#ddd',

        backgroundColor: '#fff'
    }
};

export default CardSection;
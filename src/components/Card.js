import React from 'react';
import { View } from 'react-native';

const Card = (props) =>  {
    const { cardViewStyle } = styles;

    return (
        <View style={cardViewStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    cardViewStyle: {
        marginTop: 10,
        marginHorizontal: 5,

        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,

        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 2,
        shadowColor: '#000',
        shadowOpacity: 0.1,

        elevation: 1
    }
};

export default Card;
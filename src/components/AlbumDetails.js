import React from 'react';
import { View, Image, Text, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetails = ({ album }) => {
    const { thumbnail_image, title, artist, image, url } = album;
    const { thumbnailWrapperStyle, thumbnailStyle, infoWrapperStyle, albumTitleStyle, imageStyle } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailWrapperStyle}>
                    <Image source={{uri: thumbnail_image}} style={thumbnailStyle}/>
                </View>

                <View style={infoWrapperStyle}>
                    <Text style={albumTitleStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image source={{uri: image}} style={imageStyle}/>
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    thumbnailWrapperStyle: {

    },
    thumbnailStyle: {
        height: 50,
        width: 50,
        marginRight: 5
    },
    infoWrapperStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    albumTitleStyle: {
        fontSize: 18
    },
    imageStyle: {
        height: 300,
        width: '100%',
    }
};

export default AlbumDetails;
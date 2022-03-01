
import React from 'react'
import FastImage from 'react-native-fast-image'

type Props = {
    uri: string,
    style: {}
};

const ImageComponent = ({ uri, style }: Props) => {
    return (
        <FastImage
            style={style}
            source={{
                uri: uri,
                priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
        />
    )
}

export default ImageComponent
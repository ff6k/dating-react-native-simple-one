import React from 'react'
import { Icon } from 'react-native-eva-icons';

export default function icon(props) {
    const { color, size, name, style } = props
    return (
        <Icon name={name}
            style={style}
            fill={color}
            width={size}
            height={size} />
    )
}


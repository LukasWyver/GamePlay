import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon() { 
    const uri = 'https://www.logolynx.com/images/logolynx/ef/efc8ae34e50a8920fbede4cffc2eacc6.png';
    
    return (
        <Image 
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"
        />
    );
}
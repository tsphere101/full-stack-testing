import React, { JSX } from 'react';

import styles from './Image.module.css';

interface ImageProps {
    imageUrl: string;
}

export default function Image({ imageUrl }: ImageProps): JSX.Element {
    return <img src={imageUrl} className={styles['profile-image']}></img>;
}

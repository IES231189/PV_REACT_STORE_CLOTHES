
import React from 'react';
import Image from '../atoms/Image';
import Text from '../atoms/Text';

const Card = ({ imgSrc, altText, description }) => {
    return (
        <div className="card">
            <Image src={imgSrc} alt={altText} />
            <Text>{description}</Text>
        </div>
    );
};

export default Card;
    
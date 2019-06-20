import React from 'react';
import styled from 'styled-components';

import Tile from '../components/Tile';

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 100px);
    grid-gap: 5px;
    grid-auto-rows: minMax(100px, auto);
    background-color: grey;
    width: 415px;
    height: 415px;
    padding: 5px;
    pointer-events: ${props => (props.clicksEnabled ? 'auto' : 'none')};
`
const generateKey = (image, index) => {
    const key = `${image}-${index}`
    console.log(key)
    return key
}
export default class Board extends React.Component {
    render() {
        const { onTileClick, imageDisplays, clicksEnabled, images} = this.props
        console.log({images})
        return (
            <Grid clicksEnabled={clicksEnabled}>
                {images.map((image, index) => (
                    <Tile key={generateKey(image, index)} id={index} src={image}
                        onTileClick={onTileClick}
                        imageDisplay={imageDisplays[index]}>
                    </Tile>
                ))}
            </Grid>
        )
    }
}

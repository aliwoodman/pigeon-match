import React from 'react';
import styled from 'styled-components';

const StyledTile = styled.div`
 background-color: purple;
`

export default class Tile extends React.Component {
    render() {
        return (
            <StyledTile id={this.props.id} onClick={this.props.onTileClick}>
                <img src={this.props.src} alt="" style={{ display: this.props.imageDisplay }} />
            </StyledTile>
        )
    }
}

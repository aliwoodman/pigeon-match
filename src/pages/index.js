import React from "react"

import Board from "../components/Board"

const pictures = ["https://source.unsplash.com/tmaPzp8yVZY/100x100", "https://source.unsplash.com/DPXytK8Z59Y/100x100",
    "https://source.unsplash.com/ANOUzKhSVfg/100x100", "https://source.unsplash.com/YdeNI9QXCoc/100x100",
    "https://source.unsplash.com/eqXiLNfZDc0/100x100", "https://source.unsplash.com/HTUS2lGILmw/100x100",
    "https://source.unsplash.com/KI2KaOeT670/100x100", "https://source.unsplash.com/RPUD-n9V6E0/100x100"]

const IMAGE_DISPLAYS = {
    HIDDEN: 'none',
    VISIBLE: 'block'
}

const arrangePictures = (pictures) => {
    return pictures.concat(pictures).sort(() => Math.random() - 0.5)
}

const generateImageDisplays = (pictures) => {
    let array = []
    for (var i = 0; i < (pictures.length * 2); i++) {
        array.push(IMAGE_DISPLAYS.HIDDEN);
    }
    return array
}

const compareImages = (selectedImageA, selectedImageB) => {
    return selectedImageA === selectedImageB ? true : false
}
export default class Game extends React.Component {
    constructor(props) {
        super(props)
        console.log('in constructor')
        this.state = {
            imageDisplays: generateImageDisplays(pictures),
            orderedImages: arrangePictures(pictures),
            selectedImage: {},
            counter: 0,
            clicksEnabled: true
        }
        console.log('ordered images', this.state.orderedImages)
    }

    onTileClick = (event) => {
        event.preventDefault();
        const imageDisplays = this.state.imageDisplays
        const tileId = event.target.id
        imageDisplays.splice(tileId, 1, IMAGE_DISPLAYS.VISIBLE)

        this.setState({
            imageDisplays
        })


        if (this.state.selectedImage.src) {
            this.setState({
                clicksEnabled: false
            })

            this.handleTurn(tileId)
        }
        else {
            this.setState({
                selectedImage: {
                    src: this.state.orderedImages[tileId],
                    id: tileId
                }
            })
        }
    }

    handleTurn = (tileId) => {
        const { selectedImage, orderedImages, counter } = this.state
        const imagesMatch = compareImages(selectedImage.src, orderedImages[tileId])
        if (imagesMatch) {
            this.setState({
                selectedImage: {},
                counter: counter + 1,
                clicksEnabled: true
            })
        }
        else {
            setTimeout(() => {
                const imageDisplays = this.state.imageDisplays
                imageDisplays.splice(tileId, 1, IMAGE_DISPLAYS.HIDDEN)
                imageDisplays.splice(selectedImage.id, 1, IMAGE_DISPLAYS.HIDDEN)

                this.setState({
                    imageDisplays,
                    selectedImage: {},
                    counter: counter + 1,
                    clicksEnabled: true
                })
            }, 1000)
        }
    }

    render() {
        return (
            <div>
                <Board images={this.state.orderedImages}
                    onTileClick={this.onTileClick}
                    imageDisplays={this.state.imageDisplays}
                    clicksEnabled={this.state.clicksEnabled}></Board>
                <div>{this.state.counter}</div>
            </div>
        )
    }
}

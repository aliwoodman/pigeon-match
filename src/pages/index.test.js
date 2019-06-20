import React from "react"
import { shallow, mount } from 'enzyme';

import Game from "./index"
import Tile from "../components/Tile"
import Board from "../components/Board"

describe("Game", () => {
  it("renders", () => {
    const game = shallow(<Game/>)
      
    expect((game).exists()).toBe(true)
  })

  it("initialises with tiles", () => {
    const game = mount(<Game/>)
    const tiles = game.find(Board).find(Tile)
    expect(tiles).toHaveLength(16)
  })
})

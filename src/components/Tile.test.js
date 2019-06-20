import React from "react"
import { shallow } from 'enzyme';

import Tile from "./Tile"

describe("Tile", () => {
  it("renders", () => {
    const tile = shallow(<Tile/>)
      
    expect((tile).exists()).toBe(true)
  })
})

import React from "react"
import renderer from 'react-test-renderer'

import { Blocks } from "../code-blocks"
import { Square } from "../../square/square"

describe('Blocks component', () => {

    const Block = renderer
        .create(<Blocks digits={[4,6,7,3]} stage={'win'}/>)

    it('renders correctly', () => {
        expect(Block.toJSON()).toMatchSnapshot()
    })

    it('renders exact number of blocks', () => {
        expect(Block.root.findAllByType(Square).length).toBe(4);
    })

})
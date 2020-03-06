import React from "react"
import renderer from 'react-test-renderer'

import { Header} from "../header"

describe('Header component', () => {

    const HeaderTest = renderer
        .create(<Header/>)

    it('renders correctly', () => {
        expect(HeaderTest.toJSON()).toMatchSnapshot()
    })
})
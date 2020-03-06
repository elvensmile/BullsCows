import React from 'react'
import {Row} from './row'
import {Blocks} from "../code-blocks/code-blocks"
import {Counter} from "../bulls-cows-counter/counter"


export default {
    component: Row,
    title: 'Row',
    parameters: {
        info: {
            text: `
   Row Components for wrapping elements in a beautiful row.\n
   *Children -  anything*\n
  `,
        },
    },
}

export const row = () => <Row>
    <Blocks stage={'win'} digits={[1,2,3,4]}/>
    <Counter bulls={4} cows={0} total={4}/>
</Row>
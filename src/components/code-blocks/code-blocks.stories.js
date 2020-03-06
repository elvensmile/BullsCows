import React from 'react'
import { Blocks } from './code-blocks'

export default {
    component: Blocks,
    title: 'Blocks',
    parameters: {
        info: {
            text: `
    Component renders status of user input code.
    
    *WIN - Green color.*\n
    *LOSE - Coral color.*\n
    *GUESS in progress - Yellow color.*\n
  `,
        },
    },
}

export const block_guess = () => <Blocks digits={[1,2,3,4]} stage={'guess'} />
export const block_win = () => <Blocks digits={[1,2,3,4]} stage={'win'} />
export const block_lose = () => <Blocks digits={[1,2,3,4]} stage={'lose'} />

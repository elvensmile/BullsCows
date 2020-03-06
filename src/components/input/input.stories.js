import React from 'react'
import { InputGuess } from './input'
import { action } from '@storybook/addon-actions';


export default {
    component: InputGuess,
    title: 'Input',
    parameters: {
        info: {
            text: `
   Input Components for user digits.\n
   *Order - order of block in block row*\n
   *Value - value of user input*\n
   *onChange - custom onChange*\n
  `,
        },
    },
}

export const input = () => <InputGuess onChange={action('Im changing!')} order={1} />
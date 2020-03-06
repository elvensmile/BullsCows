import React from 'react'
import { Square } from './square'

export default {
    component: Square,
    title: 'Square',
    parameters: {
        info: {
            text: `
   Components for the single digit.\n
   *Stage - stage of game (win, guess, lose)*\n
   *Children - digit (but could be anything in general)*\n
  `,
        },
    },
}

export const input = () => <Square stage={'win'}>5</Square>
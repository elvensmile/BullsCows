import React from 'react'
import { Counter } from './counter'

export default {
    component: Counter,
    title: 'Counter',
    parameters: {
        info: {
            text: `
    Counter for displaying how many numbers are guessed.
    
    *Bulls - Green color, same value, same index in the initial code.*\n
    *Cows - Coral color, same value, but different in the initial code.*\n
    *Unguessed - Gray color, digit is wrong.*\n
  `,
        },
    },
}

export const all_4_guessed = () => <Counter bulls={4} cows={0} total={4} />

export const no_guessed = () => <Counter bulls={0} cows={0} total={4} />

export const some_guessed = () => <Counter bulls={1} cows={2} total={4} />

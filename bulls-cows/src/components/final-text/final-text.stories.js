import React from 'react'
import { FinalText } from './final-text'

export default {
    component: FinalText,
    title: 'FinalText',
    parameters: {
        info: {
            text: `
    The Final Screen. Text with information about win or lose and number of attempts.
  `,
        },
    },
}

export const final_text_win = () => <FinalText stage={'win'} attempts={12} />
export const final_text_lose = () => <FinalText stage={'lose'} attempts={5} />
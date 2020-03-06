import React from 'react'
import { Button } from './button'
import { actions } from '@storybook/addon-actions'


export default {
    component: Button,
    title: 'Button',
    parameters: {
        info: {
            text: `
    Button, just a common button. 
    
    Children - any string. If there is no children - it is a Submit Button.\n
    Events - OnClick, onMouseEnter, onMouseLeave
  `
        }
    }
}

const eventsFromObject = actions({ onClick: 'clicked', onMouseEnter: 'hovered', onMouseLeave: 'left'});

export const common_button = () => <Button {...eventsFromObject}>Just a button</Button>

export const submit_code_button = () => <Button />
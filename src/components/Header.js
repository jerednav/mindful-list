import React from 'react'
import Button from './Button'

export const Header = () => {
    const onClick = () => {
        console.log('click')
    }

    return (
        <header className='header'>
            Task Tracker
            <Button onClick={onClick} />
        </header>
    )
}


import React from 'react'
import Button from './Button'

export const Header = ({onAdd, showAdd}) => {


    return (
        <header className='header'>
            Task Tracker
            <Button text={showAdd ? 'Close' : 'Add'} color ={showAdd ? 'red' : 'green'} onClick={onAdd} />
        </header>
    )
}

export default Header
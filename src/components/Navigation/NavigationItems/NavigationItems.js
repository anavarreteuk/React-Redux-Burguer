import React from 'react'
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = props => (

    <ul className='navigationitems'>
    <NavigationItem link='/' active>Burguer Builder </NavigationItem>
    <NavigationItem link='/'>CheckOut</NavigationItem>
    </ul>
) 

export default navigationItems
import React, { useState } from 'react'

const NavigationDots = ({ active }) => {

    const [items, setItems] = useState(['home', 'about', 'work', 'skills', 'contact'])
    const [toggle, setToggle] =useState(false)

    return (
        <div className='app__navigation'>
            {items.map((item, index) => {
                return (
                    <a
                        href={`#${item}`}
                        key={index}
                        className="app__navigation-dot"
                        style={active === item ? {background: '#313BAC'} : {}}
                        onClick={() => setToggle(false)}
                    />
                )
            })}
        </div>
    )
}

export default NavigationDots;
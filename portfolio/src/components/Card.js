import React from 'react'
import CardItem from './CardItem'
import '../css/Card.css'

function Card() {
    return (
        <div className='card'>
            <h1>More about me!</h1>
            <div className='card__container'>
                <div className='card__wrapper'>
                    <ul className='card__items'>
                        <CardItem 
                            src='images/img-9.jpg'
                            text='Programming tech I have experience with! From JavaScript and React, to Kubernetes and Docker.'
                            label='Languages and Tech'
                            path='/technologies'
                        />
                        <CardItem 
                            src='images/img-2.jpg'
                            text='Experience in the field. Details about my time in the software industry'
                            label='Professional Experience'
                            path='/experience'
                        />
                        <CardItem 
                            src='images/img-7.jpg'
                            text='More about my personal life. Learn more about what makes me, Me! &#128513;'
                            label='Personal'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card

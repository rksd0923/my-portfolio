import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './Carousel.css'
import Slide1 from '../assets/porto1.jpg'
import Slide2 from '../assets/porto2.jpg'
import Slide3 from '../assets/porto3.jpg'
import ScrollDown from './scrolldown'


const MyCarousel = () => {
    return (

        <div id="home">
            <div className="home">
                <Carousel controls={false} indicators interval={3500} pause={false}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 custom-img"
                            src={Slide1}
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 custom-img"
                            src={Slide2}
                            alt="Second slide"
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 custom-img"
                            src={Slide3}
                            alt="Third slide"
                        />


                    </Carousel.Item>
                </Carousel>
                <ScrollDown />

            </div>
        </div>
    )
}

export default MyCarousel

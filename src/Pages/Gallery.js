import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import '../Styles/home.css'
import { imgsGallery } from '../img/ImgData'
import { Fragment } from 'react'
import reactHelmet from 'react-helmet'

function Gallery() {

    const [ImgCard, setImgCard] = useState([])

    useEffect(() => {
        setImgCard(imgsGallery)
    }, [])

    return (
        <Fragment>
            <reactHelmet>
                <title>Initial D | Gallery</title>
            </reactHelmet>
            <div className="cardContent">
                {ImgCard.map((val, index) => {
                    return <Card style={{ width: '20rem', height: '450px' }}>
                        <Card.Img variant="top" src={val.img} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <Card.Body>
                            <Card.Title style={{ fontSize: 'large' }}>{val.title}</Card.Title>
                            <Card.Text style={{ fontSize: 'small' }}>
                                {val.caption}
                            </Card.Text>
                        </Card.Body>
                        <Button variant="primary">More Info...</Button>
                    </Card>
                })}

            </div>
        </Fragment>
    )
}

export default Gallery

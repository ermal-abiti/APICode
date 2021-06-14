import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'
export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                       src="https://t4.ftcdn.net/jpg/03/00/53/93/240_F_300539366_J4pPjsOvM7KujxDU3M8W9nrBDS3G9vDI.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h5>Shpija Prishtin</h5>
                        <p>Bleni me ne behu pjes e familjes.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://t4.ftcdn.net/jpg/04/32/17/25/240_F_432172560_tao7RgpaJiIJEn31aD17yTpJ2RrrUoEE.jpg"
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h5>Shpija T milionerave N MITROVIC</h5>
                        <p>Shpija e Iljas Nezirit konsiderohet si vila me e mir ne Kosov.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://t4.ftcdn.net/jpg/02/76/47/25/240_F_276472551_bWs3qHpFUaUptlCN3VOnV0LKnhXE7p3Z.jpg"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h5>Filloni Nje Jet Te re</h5>
                        <p>Per nje te ardhme te mir.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className="content">
                    <p>Jeta e re me ESTATOR, platforma jon u mundeson te gjithve te blejn,shesin apo leshimin me qera te 
                        shtepijave,apartmenteve apo garazhdave te ndryshme me cilesi,siguri edhe komoditet te lart.</p>
                </div>

            </div>
        )
    }
}

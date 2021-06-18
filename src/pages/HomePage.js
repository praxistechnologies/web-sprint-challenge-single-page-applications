import React from 'react'
import "./home.css"
import Card from '../components/Card'
import { Link } from 'react-router-dom'

const dummyData = [
    {
        title: "McDonald's",
        description: "American - Fast Food - Burgers",
        timeline: "20 - 30 Min",
        fee: "5.99"
    },
    {
        title: "sweetgreen",
        description: "Healthy - Salads",
        timeline: "30 - 45 Min",
        fee: "4.99"
    },
    {
        title: "Starbucks",
        description: "Cafe - Coffee & Tea - Breakfast and Brunch",
        timeline: "10 - 20 MIn",
        fee: "3.99"
    },
]

const HomePage = () => {
    return (        
        <div className="homepage-section">
            <div className="home-header-section">
                <h1>Your favorite food, delivered while coding.</h1>
                <Link to="/pizza" className="pizza-btn">Pizza?</Link>
            </div>
            <div className="home-content-section">
                <div>
                    <h6>
                        Food Delivery in Gotham City
                    </h6>                    
                </div>
                <div className="list-section">
                    {
                        dummyData.map((item) => (
                            <Card item = {item}/>
                        ))
                    }
                    <hr></hr>
                </div>
            </div>
        </div>        
    )
}

export default HomePage
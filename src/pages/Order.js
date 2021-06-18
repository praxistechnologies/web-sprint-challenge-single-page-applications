import React, {useState} from 'react'
import "./order.css"

const Order = () => {

    const [submitted, SetSubmitted] = useState(false)

    const handleSubmit = () => {
        console.log("form submitted")
    }

    return (
        <div className="order-div">
            <div className="order-header-sec">
                <h3>Build Your Own Pizza</h3>
                <div className="order-header-img">
                    image Section
                </div>
            </div>
            <form onSubmit={handleSubmit} className="form-div" id="pizza-form">     
                <h3>Build Your Own Pizza</h3>           

                <div className="size-section">
                    <label style={{fontWeight: 500}}>Choice of size</label><br></br>
                    <select name="size" className="size-selection">
                        <option>Size</option>
                    </select>
                </div>

                <div className="radio-btn-section">
                    <label style={{fontWeight: 500}}>Choice of Sauce</label><br></br>
                    
                    <input type="radio" id="original-red-input" name="sauce"/>
                    <label for="original-red-input">Original Red</label><br></br>

                    <input type="radio" id="garlic-ranch-input" name="sauce"/>
                    <label for="garlic-ranch-input">Garlic Ranch</label><br></br>

                    <input type="radio" id="bbq-sauce-input" name="sauce"/>
                    <label for="bbq-sauce-input">BBQ Sauce</label><br></br>

                    <input type="radio" id="spinach-alfredo-input" name="sauce"/>
                    <label for="spinach-alfredo-input">Spinach Alfredo</label>
                </div>

                <div className="add-toppings-section">
                    <label style={{fontWeight: 500}}>Add Toppings</label><br></br>
                    <div style={{display: "flex"}}>
                        <div className="left-side">
                            <input type="checkbox" id="pepperoni"/>
                            <label for="pepperoni">Pepperoni</label><br></br>

                            <input type="checkbox" id="sausage"/>
                            <label for="sausage">Sausage</label><br></br>

                            <input type="checkbox" id="bacon"/>
                            <label for="bacon">Canadian Bacon</label><br></br>

                            <input type="checkbox" id="spicy"/>
                            <label for="spicy">Spicy Italian Sausage</label><br></br>

                            <input type="checkbox" id="grilled-chicken"/>
                            <label for="grilled-chicken">Grilled Chicken</label><br></br>

                            <input type="checkbox" id="onions"/>
                            <label for="onions">Onions</label><br></br>

                            <input type="checkbox" id="green-pepper"/>
                            <label for="green-pepper">Green Pepper</label><br></br>                            
                        </div>
                        <div className="right-side">
                            <input type="checkbox" id="diced-tomatos"/>
                            <label for="diced-tomatos">Diced Tomatos </label><br></br>

                            <input type="checkbox" id="black-olives"/>
                            <label for="black-olives">Black Olives</label><br></br>

                            <input type="checkbox" id="roasted-garlic"/>
                            <label for="roasted-garlic">Roasted Garlic</label><br></br>

                            <input type="checkbox" id="artichoke-hearts"/>
                            <label for="artichoke-hearts">Artichoke Hearts</label><br></br>

                            <input type="checkbox" id="three-cheese"/>
                            <label for="three-cheese">Three Cheese</label><br></br>

                            <input type="checkbox" id="pineapple"/>
                            <label for="pineapple">Pineapple</label><br></br>

                            <input type="checkbox" id="extra-cheese"/>
                            <label for="extra-cheese">Extra Cheese</label><br></br>
                        </div>
                    </div>

                    <div className="substitute">
                        <label style={{fontWeight: 500}}>Choice of Substitute</label><br></br>                        
                        <label className="switch"><input type="checkbox"/><span className="slider"></span></label>&nbsp;
                        <label>Gluten Free Crust (+ $100)</label>                        
                    </div>

                    <div className="instructions">
                        <label style={{fontWeight: 500}}>Special Instructions</label><br></br>
                        <input type="text" placeholder="Anything you'd like to add?" name="instructions-input"/>
                    </div>

                    <div className="add-cart">
                        <input type="number" style={{width:30, padding: 5}} min="0"/>
                        <button style={{padding: "5px 20px"}}>Add to Order&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$17.99</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Order
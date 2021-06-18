import React, {useState} from 'react'
import "./order.css"

const Order = () => {

    const [submitted, SetSubmitted] = useState(false)
    const [state, setState] = useState({
        nameInput: "",
        addressInput: "",
        sizeDropdown: "",
        toppings: {
            'topping1': false,
            'topping2': false,
            'topping3': false,
            'topping4': false,
            'topping5': false,
            'topping6': false,
            'topping7': false,
            'topping8': false,
            'topping9': false,
            'topping10': false,
            'topping11': false,
            'topping12': false,
            'topping13': false,
            'topping14': false,
        }
    })

    const [errName, setErrName] = useState("")

    const handleChange = (event) => {
        const value = event.target.value      
        const checked = event.target.checked;  
        setState({
            ...state,
            [event.target.name]: value
        })
        console.log("value", state)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(state.nameInput.length < 2 ) {
            setErrName("Name must be at least 2 characters")
        } else {
            setErrName("")
            window.location.href="/success"
        }
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
                <div className="name-input">
                        <label style={{fontWeight: 500}}>Your Name</label><br></br>
                        <input type="text" id="name-input" placeholder="First and Last Name" name="nameInput" value={state.nameInput} onChange={handleChange}/><br></br>
                        <span style={{color: "red"}}>{errName}</span>
                    </div><br></br>

                    <div className="address-input">
                        <label style={{fontWeight: 500}}>Address</label><br></br>
                        <input type="text" placeholder="Address" name="addressInput" value={state.addressInput} onChange={handleChange}/>
                    </div><br></br>


                <div className="size-section">
                    <label style={{fontWeight: 500}}>Choice of size</label><br></br>
                    <select name="sizeDropdown" id="size-dropdown" className="size-selection" onChange={handleChange}>
                        <option>Size</option>
                        <option>Large</option>
                        <option>Medium</option>
                        <option>Small</option>
                    </select>
                </div><br></br>

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
                </div><br></br>

                <div className="add-toppings-section">
                    <label style={{fontWeight: 500}}>Add Toppings</label><br></br>
                    <div style={{display: "flex"}}>
                        <div className="left-side">
                            <input type="checkbox" id="pepperoni" name="topping1"/>
                            <label for="pepperoni">Pepperoni</label><br></br>

                            <input type="checkbox" id="sausage" name="topping2"/>
                            <label for="sausage">Sausage</label><br></br>

                            <input type="checkbox" id="bacon" name="topping3"/>
                            <label for="bacon">Canadian Bacon</label><br></br>

                            <input type="checkbox" id="spicy" name="topping4"/>
                            <label for="spicy">Spicy Italian Sausage</label><br></br>

                            <input type="checkbox" id="grilled-chicken" name="topping5"/>
                            <label for="grilled-chicken">Grilled Chicken</label><br></br>

                            <input type="checkbox" id="onions" name="topping6"/>
                            <label for="onions">Onions</label><br></br>

                            <input type="checkbox" id="green-pepper" name="topping7"/>
                            <label for="green-pepper">Green Pepper</label><br></br>                            
                        </div>
                        <div className="right-side">
                            <input type="checkbox" id="diced-tomatos" name="topping8"/>
                            <label for="diced-tomatos">Diced Tomatos </label><br></br>

                            <input type="checkbox" id="black-olives" name="topping9"/>
                            <label for="black-olives">Black Olives</label><br></br>

                            <input type="checkbox" id="roasted-garlic" name="topping10"/>
                            <label for="roasted-garlic">Roasted Garlic</label><br></br>

                            <input type="checkbox" id="artichoke-hearts" name="topping11"/>
                            <label for="artichoke-hearts">Artichoke Hearts</label><br></br>

                            <input type="checkbox" id="three-cheese" name="topping12"/>
                            <label for="three-cheese">Three Cheese</label><br></br>

                            <input type="checkbox" id="pineapple" name="topping13"/>
                            <label for="pineapple">Pineapple</label><br></br>

                            <input type="checkbox" id="extra-cheese" name="topping14"/>
                            <label for="extra-cheese">Extra Cheese</label><br></br>
                        </div>
                    </div><br></br>

                    <div className="substitute">
                        <label style={{fontWeight: 500}}>Choice of Substitute</label><br></br>                        
                        <label className="switch"><input type="checkbox"/><span className="slider"></span></label>&nbsp;
                        <label>Gluten Free Crust (+ $100)</label>                        
                    </div><br></br>

                    <div className="instructions">
                        <label style={{fontWeight: 500}}>Special Instructions</label><br></br>
                        <input type="text" id="special-text" placeholder="Anything else you'd like to add?" name="instructions-input"/>
                    </div><br></br>

                    <div className="add-cart">
                        <input type="number" style={{width:30, padding: 5}} min="0"/>
                        <button type="submit" style={{padding: "5px 20px"}}>Add to Order&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$17.99</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Order
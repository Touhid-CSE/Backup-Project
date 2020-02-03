import React, { useState, useEffect } from 'react'

export default function RegForm(props) {

    const firstName = useFormInput()
    const lastName = useFormInput()
    const age = useFormInput()
    const gender = useFormInput()
    const travelingTo = useFormInput()
    const isVegetarian = useFormInput()
    const isKosher = useFormInput()
    const isLactoseFree = useFormInput()

    const width = useWindowWith()

    const handleSubmit = (event) => {
        
        event.preventDefault()
        alert(
            'First Name: '+firstName.value+
            '\nLast Name: '+lastName.value+
            '\nAge: '+age.value+
            '\nGender: '+gender.value+
            '\nLocation: '+travelingTo.value+
            '\nDietary Restrictions: '+dietRestrictions(isVegetarian,isKosher,isLactoseFree).join(", ")
        )
    }

    return (
        <div className="travel-form-section">
            <div className="travel-form">
            <h3>Enter Personal Information</h3>
                <form onSubmit={handleSubmit}>
                    <label>
                        <input 
                            type="text" 
                            placeholder="First Name" 
                            {...firstName}
                           
                        />
                    </label>
                    <br/>
                    <label>
                        <input 
                            type="text" 
                            placeholder="Last Name" 
                            {...lastName}
                        />
                    </label>
                    <br/>
                    <label>
                        <input 
                            type="number" 
                            placeholder="Age" 
                            {...age}
                        />
                    </label>
                    <br/>
                    Gender:
                    <br/>
                    <label>
                        <input 
                            type="radio" 
                            value="Male"
                            name="gender"
                            checked={gender.value === 'Male'}
                            onChange={gender.onChange}
                        />
                            Male
                    </label>

                    <label>
                        <input 
                            type="radio" 
                            value="Female"
                            name="gender"
                            checked={gender.value === 'Female'}
                            onChange={gender.onChange}
                        />
                        Female
                    </label>
                    <br/>
                    <label>Destination</label>
                    <br/>
                    <select {...travelingTo}>
                        <option selected disabled value="">--Select destination--</option>
                        <option value="Cox's Bazar">Cox's Bazar</option>
                        <option value="Sajek Valley">Sajek Valley</option>
                        <option value="Bandarban">Bandarban</option>
                    </select>
                    <br/>
                    <label>Dietary Restriction</label><br/>
                    <label>
                        <input 
                            type="checkbox" 
                            name="isVegetarian"
                            checked={isVegetarian.value}
                            onChange={isVegetarian.onChange}
                        />
                        Vegetarian
                    </label>
                    <br/>
                    <label>
                        <input 
                            type="checkbox" 
                            name="isKosher"
                            checked={isKosher.value}
                            onChange={isKosher.onChange}
                        />
                        Kosher
                    </label>
                    <br/>
                    <label>
                        <input 
                            type="checkbox" 
                            name="isLactoseFree"
                            checked={isLactoseFree.value}
                            onChange={isLactoseFree.onChange}
                        />
                        Lactose Free
                    </label>
                    <br/>
                    <br/>
                    <button>Submit</button>
                </form>
            </div>
            <div className="travel-form-display">
                <h3>Entered Information</h3>
                <p>Your Name: {firstName.value} {lastName.value}</p>
                <p>Your Age: {age.value}</p>
                <p>Your Gender: {gender.value}</p>
                <p>Destination : {travelingTo.value}</p>
                <p>Your dietary restrictions: {dietRestrictions(isVegetarian,isKosher,isLactoseFree).join(", ")}</p>
                <p>Window width: {width}</p>
            </div>
        </div>
    )
}

const useFormInput = (initialValue) => {

    const [value, setValue] = useState(initialValue)
    function handleChange(event){
        event.target.type === 'checkbox' ? setValue(event.target.checked) : setValue(event.target.value)
    }

    return {
        value,
        onChange: handleChange
    }

}

const dietRestrictions = (isVegetarian,isKosher, isLactoseFree) => {
    let dietaryRestrictions = []
    if(isVegetarian.value){
        dietaryRestrictions.push("Vegetarian")
    }
    if(isKosher.value){
        dietaryRestrictions.push("Kosher")
    }
    if(isLactoseFree.value){
        dietaryRestrictions.push("Lactose Free")
    }
    return dietaryRestrictions

}

const useWindowWith = () => {
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        };
    })
    return width
}

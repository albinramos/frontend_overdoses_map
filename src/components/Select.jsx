import { useState } from "react";

const Select = ({name, options, defaultOption, handleYear}) => {
    const [selectedOption, setSelectedOption] = useState(defaultOption)

    const handleChange = (event) => {
        //console.log(event.target.value)
        const year = event.target.value
        setSelectedOption(year)
        handleYear(year)
    }

    return(
        <select value={selectedOption} onChange={handleChange}>
            {options.map((option) => (
                <option
                    key={option}
                    value={option}
                >
                    {option}
                </option>
            ))}
        </select>
    )
}


export default Select
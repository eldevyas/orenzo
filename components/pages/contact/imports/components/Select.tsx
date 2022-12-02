import React from "react";
import Select from "react-select";

const options = [
    { value: "Budget not defined", label: "Budget not defined" },
    { value: "1500,00 MAD - 3000,00 MAD", label: "1500,00 MAD - 3000,00 MAD" },
    {
        value: "3000,00 MAD - 10000,00 MAD",
        label: "3000,00 MAD - 10000,00 MAD",
    },
    { value: "+10000,000 MAD", label: "+10000,00 MAD" },
];

const SelectBudget = () => (
    <Select
        className="SelectControl"
        options={options}
        menuShouldScrollIntoView={true}
        hideSelectedOptions
    />
);

export default SelectBudget;

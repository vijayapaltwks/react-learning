import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { useEffect, useState } from "react";

function CheckboxGroup(props) {
  const {options, name, onChange} = props;

  const [selectedValues, setSelectedValues] = useState([]);

  const handleChange = (event) => {
    var currentValues = [];
    const { name, value } = event.target;
    if(event.target.checked){
      currentValues = [...selectedValues, value]      
    }
    else{
      currentValues = selectedValues.filter(selectedValue => selectedValue !== value);
    }
    setSelectedValues(currentValues);
    onChange(event, currentValues);
  };

  useEffect(()=>{
    console.log(selectedValues);
  }, [selectedValues])

  return (
    <FormGroup row>
      {
        options.map(option=>{
          return(
            <FormControlLabel control={  
              <Checkbox name={name} value={option.value} onChange={handleChange}/>} label={option.text} />
            );
          })
      }
    </FormGroup>
  );
}

export default CheckboxGroup;

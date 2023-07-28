import * as React from 'react';
import {useState} from 'react';
import { Grid, Slider, Button, IconButton} from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CheckboxGroup from "../shared/components/CheckboxGroup/CheckboxGroup";
import {getTestData} from "./Service";
import SearchResult from './SearchResult';

function Search() {

  const defaultPrice = 50;

  const [openResult, setOpenResult] = useState(false);
  const [formData, setFormData] = useState(
    {
      products: [],
      price: defaultPrice,
      brands:[]
    }
  );
  const [Result, setResult] = useState("");

  const handleChange = (event, selectedValues) => {
    const { name, value } = event.target;    
    setFormData((prevFormData) => ({ ...prevFormData, [name]: selectedValues || value }));
  };

  const handleSearchClick = ()=>{
    setOpenResult(false);
    getTestData(formData).then(response=>{
      alert(response);
      setResult(response);
    }).catch(ex=>{
      alert(ex);
    });
    setTimeout(()=>{
      setOpenResult(true);
    }, 300)
  }

  const products = [
    {
      text: "Mobiles", value: "Mobiles",
    },
    {
      text:"Watches", value:"Mobiles",
    },
    {
      text:"Glasses", value:"Glasses"
    }
  ];

  const brands = [
    {
      text: "One plus", value: "Oneplus",
    },
    {
      text:"Vivo", value:"Vivo",
    },
    {
      text:"Samsung", value:"Samsung"
    }
  ];

  return (
    <div className="search">
      <div className="title">Product Search</div>
      <div>
        <Grid spacing={2} container className="search-form">
          <Grid xs={12} container className="row">
            <Grid xs={4} className="row">
              Products
              <CheckboxGroup
                options = {products}
                name="products"
                onChange={handleChange}
              />
            </Grid>
            <Grid xs={4} className="row">
              Brands
              <CheckboxGroup
                options = {brands}
                name="brands"
                onChange={handleChange}
              />           
            </Grid>
            <Grid xs={4} className="row">
              Price
              <Slider name="price" onChange={handleChange} defaultValue={defaultPrice} aria-label="Default" valueLabelDisplay="auto" style={{width:500}} />
            </Grid>
        </Grid>
        </Grid>
      </div>
      <div >
        <Button variant="contained" color="primary" onClick={()=>handleSearchClick()}>Search</Button>
      </div>
      <br></br>
      <div className="title">Search Results</div>
      <div className="result">
        {openResult && <SearchResult Result={Result} />}
      </div>
    </div>
  );
}

export default Search;

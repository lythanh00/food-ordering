import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Divider from '@mui/material/Divider'; 
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import MenuCard from './MenuCard';

const categories=[
  "pizza",
  "biryani",
  "burger",
  "chicken",
  "rice"
]
const foodTypes=[
  {label:"All",value:"all"},
  {label:"Vegetarian only",value:"vegetarian"},
  {label:"Non-Vegetarian",value:"non_vegetarian"},
  {label:"Seasonal",value:"seasonal"},
]
const menu=[1,1,1,1,1,1]

const RestaurantDetails = () => {
  const [foodType,setFoodType]=useState("all")

  const handleFillter=(e)=>{
    console.log(e.target.value,e.target.name)
  }
  return (
    <div className='px-5 lg:px-20'>
      <section>
        <h3 className='text-gray-500 py-2 mt-10'>Home/india/indian fast food/3</h3>
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <img 
                    className='w-full h-[40vh] object-cover'
                    src='https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <img 
                    className='w-full h-[40vh] object-cover'
                    src='https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <img 
                    className='w-full h-[40vh] object-cover'
                    src='https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
                </Grid>

            </Grid>
        </div>
        <div className='pt-3 pb-5'>
            <h1 className='text-4xl font-semibold'>Indian Fast Food</h1>
            <p className='text-gray-500 mt-1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Placeat cum at porro, natus facere eveniet laborum, odio molestiae consequatur dolore 
            suscipit nulla a, dolorum exercitationem eum? Atque numquam autem repellat
            </p>
            <div>
            <p className='text-gray-500 flex items-center gap-3'>
              <LocationOnIcon/>
                <span>
                Mumbai, Maharstra
                </span>
            </p>
            <p className='text-gray-500 flex items-center gap-3'>
              <CalendarTodayIcon/>
                <span>
                Mon-Sun: 9:00 AM - 9:00 Pm (Today)
                </span>
            </p>
            </div>
          
        </div>
      </section>
      <Divider/>
      <section className='pt-[2rem] lg:flex relative'>
        <div className='space-y-10 lg:w-[20%] filter'>
          <div className='box space-y-5 lg:sticky top-28 p-5 d'>
            <div>
              <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
                Food Type
              </Typography>
              <FormControl className='py-10 space-y-5' component={"fieldset"}>
                <RadioGroup onChange={handleFillter} name="food_type" value={foodType}>
                  {foodTypes.map((item)=> <FormControlLabel key={item.value} value={item.value} control={<Radio />} label={item.label} />)}
                </RadioGroup>

              </FormControl>
            </div>
            <Divider/>
            <div>
              <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
                Food Category
              </Typography>
              <FormControl className='py-10 space-y-5' component={"fieldset"}>
                <RadioGroup onChange={handleFillter} name="food_type" value={foodType}>
                  {categories.map((item)=> <FormControlLabel key={item} value={item} control={<Radio />} label={item} />)}
                </RadioGroup>

              </FormControl>
            </div>

          </div>
        </div>
        <div className='space-y-5 lg:w-[80%] lg:pl-10'>
          {menu.map((item)=> <MenuCard/>)}
        </div>

      </section>
    </div>
  )
}

export default RestaurantDetails

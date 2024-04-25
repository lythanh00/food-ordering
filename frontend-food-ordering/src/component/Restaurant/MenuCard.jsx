import React from 'react'
import {Accordion, AccordionDetails, AccordionSummary} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import { categorizeIngredients } from '../util/categorizeIngredients';



const demo=[
    {
        category: "Nuts & seeds",
        ingredients: ["Cashews"]
    },
    {
        category: "Protein",
        ingredients: ["Ground beef", "Bacon strips"]
    },
    
]

const MenuCard = ({item}) => {
    const handleCheckBoxChange=(value)=>{
        console.log(value)
    }
  return (
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className='lg:flex items-center justify-between'>
            <div className='lg:flex items-center lg:gap-5'>
                <img 
                    className='w-[7rem] h-[7rem] object-cover' 
                    src={item.images[0]} 
                    alt=''
                />
                <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                    <p className='font-semibold text-xl'>{item.name}</p>
                    <p>₹{item.price}</p>
                    <p className='text-gray-400'>{item.description}</p>

                </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <div className='flex gap-5 flex-wrap'>
                {
                    Object.keys(categorizeIngredients(item.ingredients)).map((category)=> 
                    <div>
                        <p>{category}</p>
                        <FormGroup>
                            {categorizeIngredients(item.ingredients)[category].map((item)=><FormControlLabel key={item.name} control={<Checkbox onChange={()=>handleCheckBoxChange(item)}/>} label={item.name} />)}
                    
                    </FormGroup>
                    </div>
                    )
                }
            </div>
            <div className='pt-5'>
                <Button variant='contained' disabled={false} type="submit">{true?"Add to Cart":"Out Of Stock"}</Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
  )
}

export default MenuCard

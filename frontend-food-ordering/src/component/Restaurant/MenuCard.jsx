import React from 'react'
import {Accordion, AccordionDetails, AccordionSummary} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';



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

const MenuCard = () => {
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
                    src='https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&w=600' 
                    alt=''
                />
                <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                    <p className='font-semibold text-xl'>Burger</p>
                    <p>₹499</p>
                    <p className='text-gray-400'>nice food</p>

                </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <div className='flex gap-5 flex-wrap'>
                {
                    demo.map((item)=> 
                    <div>
                        <p>{item.category}</p>
                        <FormGroup>
                            {item.ingredients.map((item)=><FormControlLabel control={<Checkbox onChange={()=>handleCheckBoxChange(item)}/>} label={item} />)}
                    
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

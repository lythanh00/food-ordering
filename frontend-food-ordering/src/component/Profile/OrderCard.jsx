import React from 'react'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-5'>
        <div className='flex items-center space-x-5'>
            <img 
            className='h-16 w-16'
            src="https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="" 
            />
            <div>
                <p>Biryani</p>
                <p>$399</p>
            </div>
        </div>
        <div>
            <Button  className='cursor-not-allowed'> completed </Button>
        </div>

    </Card>
  )
}

export default OrderCard

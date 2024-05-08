import React from 'react'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

const OrderCard = ({item, order}) => {
  return (
    <Card className='flex justify-between items-center p-5'>
        <div className='flex items-center space-x-5'>
            <img 
            className='h-16 w-16'
            src={item.food.images[0]}
            // src='https://images.pexels.com/photos/845798/pexels-photo-845798.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt="" 
            />
            <div>
                <p>{item.food.name}</p>
                {/* <p>binary</p> */}
                <p>${item.totalPrice}</p>
                {/* <p>$399</p> */}
            </div>
        </div>
        <div>
            <Button  className='cursor-not-allowed'> 
              {order.orderStatus} 
              {/* complete */}
            </Button>
        </div>

    </Card>
  )
}

export default OrderCard

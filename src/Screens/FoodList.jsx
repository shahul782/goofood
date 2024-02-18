import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card';
import { API } from '../global';

export default function FoodList() {
   

    const [food, setFood] = useState([]); 

    function f1(){
        
        fetch(`${API}/food/getfood`,{method: 'GET'}).then(response => response.json())
        .then(data => setFood(data));

    }
    // f1();

    useEffect(()=>
        f1()
    ,[food]);
    
    console.log(food);
  return (
<div className='container'>
  <div>
    {
      food.map((food, index) => <div className='  m-5' key={index}><Card props={food} /></div>)
    }
  </div>
</div>

  )
}

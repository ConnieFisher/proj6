import axios from 'axios'
import React,{ useState, useEffect} from 'react'
import '../index.css'




const MenuTable = () =>
{
    const [items, setItems] = useState( [] )
    
    useEffect( () =>
    {
        axios.get( '/db/menu.json' )
        .then(( res ) => setItems( res.data ) )
        .catch(err=>console.log(err))
    },[])

  return (
      <div>
          <h1 className='menutitle'>Menu</h1>
          <table>
              <thead>
                  <tr>  
                      <th>Date</th>
                      <th>Day</th>
                      <th>Entre</th>
                      <th>Vegetable</th>
                      <th>Starch</th>
                      <th>Occasion</th>
                  </tr>
              </thead>
              <tbody>
                  {items.map(item  => (
                      <tr key={item.id}>
                          <td>{item.date}</td>
                          <td>{item.dayofweek}</td>
                          <td>{item.entre}</td>
                          <td>{item.veg}</td>
                          <td>{item.starch}</td>
                          <td>{item.occasion}</td>
                      </tr>
                  ) )}
              </tbody>
          </table>
    </div>
  )
}

export default MenuTable

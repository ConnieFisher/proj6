import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const DailyMenu = styled.div`
list-style-type: none;
text-decoration: none;
padding-left: 25px;
width: 35%;
margin: auto;
padding-top: 25px;
text-align: center;
`;

const MenuFilter = () => {
  const [items, setItems] = useState([])
  const date = new Date()

  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()

  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${month}-${day}-${year}`

  useEffect(() => {
    axios
      .get('/db/menu.json')
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err))
  }, [])

  const daily = items.filter((item) => item.date === currentDate)
  const myMenu = daily.map((item) => (
      <ol key={item.id}>
          {item.entre}, {item.veg}, {item.starch}
    </ol>
  ))
  return (
    <>
      <DailyMenu>
          <p>For dinner, we are having </p>
          {myMenu}
      </DailyMenu>
      
      </>
  )
}

export default MenuFilter

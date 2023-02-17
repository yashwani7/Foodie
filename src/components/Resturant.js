import React,{useState} from 'react'
import './Style.css'
import Menu from "./MenuApi"
import MenuCard from "./MenuCard"
import './Style.css'
import MenuApi from "./MenuApi"


const uniqueData=[...new Set(
  Menu.map((curElem)=>{
    return curElem.category;
  })
)
]
console.log(uniqueData);

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const filterItem=(category)=>{
    const updatedList=Menu.filter((curElem)=>{
      return curElem.category===category;
    })
    setMenuData(updatedList);
  }
  
    
  return (
    <>
    <nav className="navbar">
      <div className='btn-group'>
        <button className='.btn-group__item' onClick={()=>filterItem("breakfast")}>Breakfast</button>
        <button className='.btn-group__item' onClick={()=>filterItem("lunch")}>Lunch</button>
        <button className='.btn-group__item' onClick={()=>filterItem("evening")}>Evening</button>
        <button className='.btn-group__item' onClick={()=>filterItem("dinner")}>Dinner</button>
        <button className='.btn-group__item' onClick={()=>setMenuData(Menu)}>All</button>
      </div>
    </nav>
       <MenuCard menuData={menuData}/>
    </>
  )
}

export default Resturant
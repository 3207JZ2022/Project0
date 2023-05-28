import React, {useRef} from 'react'
import { useNavigate } from 'react-router';
import './ItemList.css'
import Item from './Item.js'
export default function ItemList({searchResults=[]}) {

  const itemRef = useRef();
  const navigate=useNavigate();

  function navToProduct(e){
      const id =e.currentTarget.id;
      navigate('/products?id=' +id )
  }

  return (
    <div>
        <ul className="query-item-list">
            {searchResults.map((x,index)=>{return(
                <li className="query-item-container" 
                id={x.id} key={index} onClick={navToProduct} ref={itemRef}>
                    <Item title={x.title} src={x.src} ></Item>
                </li>)
            })}
        </ul>
    </div>
  )
}

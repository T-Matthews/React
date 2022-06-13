
import { useContext, useState } from "react"
import { DataContext } from '../DataProvider';
import { useDatabase, useUser } from 'reactfire';
import { set, ref } from 'firebase/database';
import { Link } from 'react-router-dom';

let Cart = () => {
  // access user and database systems
  const { cart, setCart } = useContext(DataContext)
  return (
    < div className="container">
      {/*  one per hero */}
      <h1>Total Cost: ${cart.total}</h1>
        <h3>You have {cart.size} heroes in your cart.</h3>
      {Object.values(cart.items).map((hero) => {
        return <div className = "justify-content-center">
          
          <div className="card" style={{ width: 18 + 'rem' }}>
            <img className="card-img-top" src={hero.obj.image} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{hero.obj.name}</h5>
              <p className="card-text">{hero.obj.description}</p>
              <a href="#" className="btn btn-primary">Cost: 1000</a>
            </div>
          </div>
        </div>
      })}
      {/*  one per hero */}
    </div>
  )


}
export default Cart
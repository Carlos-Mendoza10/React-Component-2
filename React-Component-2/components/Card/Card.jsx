import { useState } from 'react'
import Thank from '../Thanks/Thank'
import './Card.scss'

function Card () {
  const array = [1,2,3,4,5]
  const [Score,Setscore]= useState(1)
  const [Send,Setsend]= useState(true)

  function toggle (item) {
    Setscore(item)
  }
  function submit () {
    Setsend(false)
  }

  return (
    <div className='card'>
      <div className={Send? 'card__calificacion-show':'card__calificacion'}>
        <div className='icon'>
            <img src="../public/icon-star.svg" alt="Icono" />
        </div>
        <div className='card__text'>
          <h1>How did we do?</h1>
          <p>
              Please let us know how we did with your support request All feedback is appreciatedto help us to improve our offering.
          </p>
        </div>
          <div className='calificacion__buttoms'>
                {array.map((item)=>(
                  <button className='calificacion__buttom' key={item} onClick={() => toggle(item)}>{item}</button>
                ))
                }
          </div>

          <button className='submit__bottom-send' onClick={() => submit()}>Submit</button>
      </div>
       <Thank 
       score={Score}
       show={Send}
       />
    </div>
  )
}

export default Card
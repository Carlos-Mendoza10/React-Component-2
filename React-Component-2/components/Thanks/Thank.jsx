import './Thank.scss'
function Thank ({ score , show }) {
  return(
    <div className={show? 'thank__hidden': 'thank'}>
      <div className='thank__img'>
        <img src="../public/illustration-thank-you.svg" alt="" />
      </div>
      <div className='thank__msj'>
        <span>You selected {score} out of 5</span>
        </div>
      <div className='thank__you'>Thank you!</div>
      <div className='thank__p'>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, do not hesitate to get in touch!</p>
      </div>
  </div>
  )
}
export default Thank
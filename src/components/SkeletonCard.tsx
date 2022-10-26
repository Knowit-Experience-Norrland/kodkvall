import '../styles/MovieCard.scss'

const star = '\u2605'

export const SkeletonCard = () => {
  return (
    <div className="card__wrapper card__skeleton">   
        <div className="card__img" ></div>
        <div className='card__body'>          
          <p className="card__rating">10/10 <span className='card__star-icon'>{star}</span> </p>
          <h3 className="card__title">.....</h3>
        </div>
    </div>
  )
}
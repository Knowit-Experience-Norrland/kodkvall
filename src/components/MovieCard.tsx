import { Media } from '../graphql/types/graphql';
import '../styles/MovieCard.scss'

const star = '\u2605'

export const MovieCard: React.FC<Media> = ({averageScore, title, coverImage}) => {
  if(!averageScore || !title || !coverImage || !coverImage.large) {return null;}

  return (
    <div className="card__wrapper">   
        <img src={coverImage?.large} alt={title + ' cover img'} className="card__img" />
        <div className='card__body'>          
          <p className="card__rating">{averageScore/10}/10 <span className='card__star-icon'>{star}</span> </p>
          <h3 className="card__title">{title?.english}</h3>
        </div>
    </div>
  )
}
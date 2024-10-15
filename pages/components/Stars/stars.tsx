import { FaRegStar, FaRegStarHalfStroke, FaStar } from 'react-icons/fa6';

export default function Stars(rating: number){
    const stars: JSX.Element[] = [];

    for(let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push(<FaStar key={i}/>)
      } else if (i < rating) {
        stars.push(<FaRegStarHalfStroke key={i}/>)
      } else {
        stars.push(<FaRegStar key={i}/>)
      }
    }

    return stars
  }

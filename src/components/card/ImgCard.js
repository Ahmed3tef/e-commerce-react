import './ImgCard.css';

const ImgCard = ({ src }) => {
  return (
    <div>
      <img src={src} alt='img' className='card__img img-fluid' />
    </div>
  );
};

export default ImgCard;

type RatingInputRadioProps = {
  rating: number | null;
  index: number;
  title: string;
  handleInputClick: (event: React.MouseEvent<HTMLInputElement>) => void;
}

export default function RatingInputRadio({rating, index, title, handleInputClick}:RatingInputRadioProps): JSX.Element {
  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" defaultValue={index} id={`${index}-stars`} type="radio" onClick={handleInputClick} defaultChecked={rating === index}/>
      <label htmlFor={`${index}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

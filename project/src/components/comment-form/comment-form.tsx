import { useState } from 'react';
import RatingInputRadio from '../rating-input-radio/rating-input-radio';
import {ratingLevels} from '../../const';

export default function CommentForm(): JSX.Element {

  const [reviewText, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>):void => {
    setReview(event.target.value);
  };

  const handleInputClick = (event: React.MouseEvent<HTMLInputElement>):void => {
    setRating(Number(event.currentTarget.value));
  };

  // const onSubmit = () => {
  //   // dispatch(());
  // };

  // const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   onSubmit({
  //     id,
  //     comment: reviewText,
  //     rating: rating,
  //   });
  // };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingLevels.map((level, index) => <RatingInputRadio rating={rating} index={index + 1} title={level} handleInputClick={handleInputClick} key={level} />)}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" defaultValue={reviewText} onChange={handleTextareaChange}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

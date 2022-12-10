import {useState, useRef, useEffect} from 'react';
import RatingInputRadio from '../rating-input-radio/rating-input-radio';
import {ratingLevels, DEFAULT_RATING, MIN_LENGTH_COMMENT, MAX_LENGTH_COMMENT} from '../../const';
import {submitCommentAction} from '../../store/api-action';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {TSubmitComment} from '../../types/';

type CommentFormProps = {
  hotelId: number;
}

export default function CommentForm({hotelId}:CommentFormProps): JSX.Element {
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const dispatch = useAppDispatch();
  const [reviewText, setReview] = useState('');
  const [rating, setRating] = useState(DEFAULT_RATING);
  const [isReset, setIsReset] = useState(false);

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>):void => {
    setReview(event.target.value);
  };

  const handleInputClick = (event: React.MouseEvent<HTMLInputElement>):void => {
    setRating(Number(event.currentTarget.value));
  };

  const resetForm = () => {
    setReview('');
    setRating(DEFAULT_RATING);
  };

  useEffect(() => {
    setIsReset(reviewText === '' || rating === DEFAULT_RATING || reviewText.length < MIN_LENGTH_COMMENT || reviewText.length >= MAX_LENGTH_COMMENT);
  }, [reviewText, rating]);

  const onSubmit = async (data: TSubmitComment) => {
    await dispatch(submitCommentAction(data));
    resetForm();
  };

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit({
      hotelId,
      comment: reviewText,
      rating: rating,
    });
  };

  return (
    <form onSubmit={handleSubmitForm} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingLevels.map((level, index) => <RatingInputRadio rating={rating} index={5 - index} title={level} handleInputClick={handleInputClick} key={level} />)}
      </div>
      <textarea ref={textRef} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={reviewText} onChange={handleTextareaChange}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isReset}>Submit</button>
      </div>
    </form>
  );
}

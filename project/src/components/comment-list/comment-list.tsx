import { TComment } from '../../types';
import Comment from '../comment/comment';
// import {sortByDate} from '../../utils';

type CommentListProps = {
  allComments:TComment[];
}

export default function CommentList({allComments}:CommentListProps): JSX.Element {

  return (
    <ul className="reviews__list">
      {allComments.map((comment) => <Comment currentComment={comment} key={comment.id}/>)}
    </ul>
  );
}

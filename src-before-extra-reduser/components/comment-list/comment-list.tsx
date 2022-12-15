import { TComment } from '../../types';
import Comment from '../comment/comment';

type CommentListProps = {
  allComments: TComment[];
}

export default function CommentList({allComments}:CommentListProps): JSX.Element {

  return (
    <ul className="reviews__list">
      {allComments.slice(0, 10).map((comment) => <Comment currentComment={comment} key={comment.id}/>)}
    </ul>
  );
}

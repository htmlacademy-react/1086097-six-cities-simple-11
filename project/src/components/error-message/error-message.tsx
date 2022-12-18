import {useAppSelector} from '../../hooks/useAppSelector';
import './error-style.css';
import {getError} from '../../store/app-process/selectors';

export default function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getError);
  return error ? <div className='error-message'>{error}</div> : null;
}

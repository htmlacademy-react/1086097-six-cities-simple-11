import ClipLoader from 'react-spinners/ClipLoader';
import { CSSProperties } from 'react';

function Loading(): JSX.Element {

  const override: CSSProperties = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderColor: 'red',
    borderWidth: '5px',
  };

  return (
    <main className="page__main page__main--index">
      <div className="container">
        <ClipLoader size={100} aria-label="Loading Spinner" data-testid="loader" cssOverride={override}/>
      </div>
    </main>
  );
}

export default Loading;

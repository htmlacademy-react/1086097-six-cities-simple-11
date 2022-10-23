import MainPage from '../../pages/main-page/main-page';

type AppScreenProps = {
  amountCards: number;
}

function App({amountCards}: AppScreenProps): JSX.Element {
  return (
    <MainPage amountCards={amountCards}/>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.scss';

import './fonts/BRSonoma-Regular.otf';
import FormProvider from './services/context';
import LoginPage from './views/Login/Login';
import Plans from './views/Plans/Plans';
import Summary from './views/Summary/Summary';

export default function App(props: any) {
  const { Component, pageProps } = props;
  return (
    <FormProvider>
      <Routes>
        <Route path='/' element={<LoginPage></LoginPage>}></Route>
        <Route path='/plans' element={<Plans></Plans>}></Route>
        <Route path='/summary' element={<Summary></Summary>}></Route>
      </Routes>
    </FormProvider>
  );
}

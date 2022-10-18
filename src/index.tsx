import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import LoginContext from './context/login-context';
import useConnection from './hooks/useConnection';
import Spinner from './components/Spinner'
import ReduxCounterPage from './pages/ReduxCounterPage'
import { Provider } from 'react-redux'
import { store } from './store/store'

// import App from './App';
// import LoginPage from './pages/LoginPage';
// import SearchPage from './pages/SearchPage';
// import Layout from './hoc/Layout';

const App = lazy(() => import('./App'))
const LoginPage = lazy(() => import('./pages/LoginPage'))
const SearchPage = lazy(() => import('./pages/SearchPage'))
const Heroes = lazy(() => import('./pages/Heroes'))
const HeroDetails = lazy(() => import('./pages/HeroDetails'))
const Layout = lazy(() => import('./hoc/Layout'))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Root = () => {
  const { connected, username, login, logout } = useConnection();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <LoginContext.Provider
          value={{
            connected,
            username,
            login,
            logout,
          }}
        >
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<App />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="search" element={<SearchPage />} />
                <Route path="counter" element={<ReduxCounterPage />} />
                <Route path="heroes" element={<Heroes />} />
                <Route path="heroes/:id" element={<HeroDetails />} />
                <Route path="*" element={<section>Page not found</section>} />
              </Route>
            </Routes>
          </Suspense>
        </LoginContext.Provider>
      </BrowserRouter>
    </Provider>
  );
};

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);

reportWebVitals();

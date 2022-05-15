import { Routes, Route } from 'react-router-dom';
import { useCheckAuth } from 'hooks/useCheckAuth';
import { HomePage } from 'pages/HomePage';
import { LoginPage } from 'pages/LoginPage';
import { GlobalStyles } from './GlobalStyles';

function App() {
  useCheckAuth();

  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;

import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { renewSession } from 'stores/auth/effects';
import { $auth } from 'stores/auth/store';

export function useCheckAuth() {
  const [isInitLoadingPassed, setIsInitLoadingPassed] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!isInitLoadingPassed) {
      renewSession().finally(() => setIsInitLoadingPassed(true));
    }
  }, [isInitLoadingPassed]);

  useEffect(() => {
    if (!isInitLoadingPassed) {
      return;
    }

    return $auth.watch(state => {
      if (!state.isLoggedIn && pathname !== '/login') {
        navigate('/login');

        return;
      }

      if (state.isLoggedIn && pathname === '/login') {
        navigate('/');
      }
    });
  }, [isInitLoadingPassed, navigate, pathname]);
}
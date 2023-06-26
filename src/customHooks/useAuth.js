import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../slices/authSlice';

const useAuth = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAuthenticatedUser = async () => {
      await dispatch(loadUser(localStorage.getItem('token')));
      setLoading(false);
    };

    loadAuthenticatedUser();
  }, [dispatch]);

  return { isAuthenticated, loading };
};

export default useAuth;

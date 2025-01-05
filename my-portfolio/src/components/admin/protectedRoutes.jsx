import { useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      navigate('/login');
    }
  }, [navigate]);

  return children;
};

export default ProtectedRoute;

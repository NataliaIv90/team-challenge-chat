import { useNavigate } from 'react-router-dom';

export const Page404 = () => {
  const navigate = useNavigate();
  const goBackHome = () => navigate('/');

  return (
    <div>
      <p>Page not found</p>
      <button onClick={goBackHome}>Go back home</button>
    </div>
  );
};

import React from 'react';
import Navbar from '../components/Navbar';
import RateLimiterUI from '../components/RateLimiterUI';

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = React.useState(false);
  return (
    <div className="min-h-screen">
      <Navbar />
      {isRateLimited && <RateLimiterUI />}
    </div>
  );
};

export default HomePage;

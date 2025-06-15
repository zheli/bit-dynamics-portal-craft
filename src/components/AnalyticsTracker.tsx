
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

// IMPORTANT: Replace with your Google Analytics Measurement ID
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; 

if (import.meta.env.PROD && GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== "G-XXXXXXXXXX") {
  ReactGA.initialize(GA_MEASUREMENT_ID);
}

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (import.meta.env.PROD && GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== "G-XXXXXXXXXX") {
      ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
    }
  }, [location]);

  return null;
};

export default AnalyticsTracker;

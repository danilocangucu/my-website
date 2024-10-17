import { useState, useCallback, useEffect } from "react";
import axios from "axios";

const useBackendStatus = (subdomain) => {
  const [backendStatus, setBackendStatus] = useState("[Checking status...]");

  const checkBackendHealth = useCallback(async () => {
    try {
      const response = await axios.get(`https://${subdomain}/api/v1/health`);
      setBackendStatus(response.status === 200 ? "Online" : "Offline");
    } catch (error) {
      setBackendStatus("Offline");
    }
  }, [subdomain]);

  useEffect(() => {
    checkBackendHealth();
  }, [checkBackendHealth]);

  return backendStatus;
};

export default useBackendStatus;

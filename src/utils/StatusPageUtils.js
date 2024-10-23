import axios from "axios";

export const PROGRESS_DURATION = 10000;
export const INTERVAL_TIME = 100;
export const MIN_WAIT_TIME = 2000;

export const calculateIncrement = () => {
  return 100 / (PROGRESS_DURATION / INTERVAL_TIME);
};

let countdownInterval;

export const fetchBackendStatus = async (projectName) => {
  const ec2BackendUrl = process.env.REACT_APP_EC2_BACKEND_URL;

  try {
    const response = await axios.get(ec2BackendUrl, {
      params: { projectName },
    });

    let status = "offline.";

    if (response.status === 200) {
      status = "online!";
    } else if (response.status === 202) {
      status = "starting...";
    }

    return status;
  } catch (error) {
    // TODO Handle properly the error
    return "offline.";
  }
};

export const startFetch = async (
  projectName,
  setBackendStatus,
  setIsLoading,
  setProgress,
  startProgressAnimation
) => {
  setBackendStatus("...");
  setIsLoading(true);

  const status = await fetchBackendStatus(projectName);

  setTimeout(() => {
    setIsLoading(false);
    setProgress(0);
    setBackendStatus(status);
    startProgressAnimation(
      setProgress,
      projectName,
      setBackendStatus,
      setIsLoading
    );
  }, MIN_WAIT_TIME);
};

export const startProgressAnimation = (
  setProgress,
  projectName,
  setBackendStatus,
  setIsLoading
) => {
  const increment = calculateIncrement();

  clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
    setProgress((prevProgress) => {
      if (prevProgress >= 100) {
        clearInterval(countdownInterval);
        startFetch(
          projectName,
          setBackendStatus,
          setIsLoading,
          setProgress,
          startProgressAnimation
        );
        return 100;
      }
      return prevProgress + increment;
    });
  }, INTERVAL_TIME);

  return () => clearInterval(countdownInterval);
};

export const stopProgressAnimation = () => {
  clearInterval(countdownInterval);
  countdownInterval = null;
};

export const updateBackendStatus = async (status) => {
  const ec2BackendUrl = process.env.REACT_APP_EC2_BACKEND_URL;

  try {
    const response = await axios.put(ec2BackendUrl, { status });

    return response.status === 200;
  } catch (error) {
    // TODO Handle properly the error
    return false;
  }
};
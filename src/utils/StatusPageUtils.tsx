import axios from "axios";

export const PROGRESS_DURATION = 10000;
export const INTERVAL_TIME = 100;
export const MIN_WAIT_TIME = 2000;

export const calculateIncrement = () => {
  return 100 / (PROGRESS_DURATION / INTERVAL_TIME);
};

let countdownInterval: string | number | undefined | NodeJS.Timeout | null = null;

export const fetchBackendStatus = async (projectName: string) => {
  const ec2BackendUrl = process.env.REACT_APP_EC2_BACKEND_URL;

  if (!ec2BackendUrl) {
    // TODO Handle properly the error
    return
  }

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
  projectName: string,
  setBackendStatus: (status: string) => void,
  setIsLoading: (arg0: boolean) => void,
  setProgress: (arg0: number) => void,
  startProgressAnimation: { (setProgress: any, projectName: any, setBackendStatus: any, setIsLoading: any): () => void; (arg0: any, arg1: string, arg2: (status: string) => void, arg3: any): void; }
) => {
  setBackendStatus("...");
  setIsLoading(true);

  const status = await fetchBackendStatus(projectName);

  if (!status) {
    // TODO Handle properly the error
    return;
  }

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
  setProgress: (arg0: number) => void,
  projectName: string,
  setBackendStatus: (status: string) => void,
  setIsLoading: (arg0: boolean) => void
) => {
  const increment = calculateIncrement();


  if (countdownInterval !== null) {
    clearInterval(countdownInterval);
  }


  // TODO FIX the type of prevProgress and countdownInterval
  countdownInterval = setInterval(() => {
    // @ts-ignore
    setProgress((prevProgress) => {
      if (prevProgress >= 100) {
        // @ts-ignore
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

  return () => {
    if (countdownInterval !== null) {
      clearInterval(countdownInterval);
    }
  };
};

// TODO FIX the type of countdownInterval
export const stopProgressAnimation = () => {
  // @ts-ignore
  clearInterval(countdownInterval);
  countdownInterval = null;
};

export const updateBackendStatus = async (status: string) => {
  const ec2BackendUrl = process.env.REACT_APP_EC2_BACKEND_URL;

  if (!ec2BackendUrl) {
    // TODO Handle properly the error
    return false;
  }

  try {
    const response = await axios.put(ec2BackendUrl, { status });

    return response.status === 200;
  } catch (error) {
    // TODO Handle properly the error
    return false;
  }
};
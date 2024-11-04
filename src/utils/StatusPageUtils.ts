import axios from "axios";

export const PROGRESS_DURATION = 10000;
export const INTERVAL_TIME = 100;
export const MIN_WAIT_TIME = 2000;

export const calculateIncrement = () => {
  return 100 / (PROGRESS_DURATION / INTERVAL_TIME);
};

let countdownInterval: string | number | undefined | NodeJS.Timeout | null = null;

// TODO env vars validation
export const apiUrl = process.env.REACT_APP_API_URL;
export const ec2BackendUrl = `${apiUrl}/ec2`;
export const errorReportUrl = `${apiUrl}/errors/report`;

const reportError = async (error: Error, errorContext: string) => {
  try {
    await axios.post(errorReportUrl, {
      errorMessage: `${errorContext}: ${error.message}`,
      errorStack: error.stack,
    });
  } catch (reportError) {
    if (axios.isAxiosError(reportError)) {
      // TODO implement more effective solution for report error
      console.error("Failed to report error:", reportError.message);
    } else {
      console.error("Failed to report error:", reportError);
    }
  }
};

export const fetchBackendStatus = async (projectName: string) => {
  if (!ec2BackendUrl) {
    throw new Error(
      "Configuration error: Backend URL (REACT_APP_EC2_BACKEND_URL) is missing."
    );
  }

  try {
    const response = await axios.get(ec2BackendUrl, {
      params: { projectName },
      timeout: 4000,
    });

    switch (response.status) {
      case 200:
        return "online!";
      case 202:
        return "starting...";
      // TODO handle properly other guaranteed offline cases that will allow user to start ec2
      case 204:
        return "offline.";
      default:
        const error = new Error(`Unexpected status code: ${response.status}`);
        await reportError(error, "Handling response status");
        return "unavailable.";
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.code === "ECONNABORTED") {
        await reportError(error, "Request timed out.");
        return "unavailable.";
      } else {
        await reportError(
          error,
          `Request failed at fetchBackendStatus: ${error.message}`
        );
        return "unavailable.";
      }
    }
  }
};

export const startFetch = async (
  projectName: string,
  setBackendStatus: (status: string) => void,
  setIsLoading: (arg0: boolean) => void,
  setProgress: (arg0: number) => void,
  startProgressAnimation: {
    (
      setProgress: any,
      projectName: any,
      setBackendStatus: any,
      setIsLoading: any
    ): () => void;
    (arg0: any, arg1: string, arg2: (status: string) => void, arg3: any): void;
  }
) => {
  setBackendStatus("...");
  setIsLoading(true);

  const status = await fetchBackendStatus(projectName);

  if (!status) {
    const error = new Error(
      `No status found for ${projectName} at startFetch.`
    );
    await reportError(error, "Failed to fetch backend status.");
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
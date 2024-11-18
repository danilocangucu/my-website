import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { setHohohoLanguage } from "../redux/hohohoSlice";

const useLanguageDetection = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const languageFromQuery = urlParams.get("lang");

    const languageToUse =
      languageFromQuery || localStorage.getItem("hohohoLanguage") || "en";

    dispatch(setHohohoLanguage(languageToUse));

    if (!localStorage.getItem("hohohoLanguage")) {
      localStorage.setItem("hohohoLanguage", languageToUse);
    }
  }, [location.search, dispatch]);
};

export default useLanguageDetection;

import { useEffect } from "react";
import { useSelector } from "react-redux";
import i18next from "i18next";
import { RootState } from "../../../redux/store";

const useLanguage = () => {
  const language = useSelector((state: RootState) => state.hohoho.language);

  useEffect(() => {
    if (language) {
      i18next.changeLanguage(language);
    }
  }, [language]);

  return language;
};

export default useLanguage;

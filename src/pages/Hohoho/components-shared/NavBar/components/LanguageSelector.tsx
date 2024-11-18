import React from 'react';
import classNames from 'classnames';
import { useLocation, useNavigate } from 'react-router-dom';
import { RootState } from '../../../../../redux/store';
import { useSelector } from 'react-redux';
import { setHohohoLanguage } from '../../../redux/hohohoSlice';
import { useDispatch } from 'react-redux';

const languages = [
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
    { code: 'ptbr', label: 'PT-BR' },
];

const LanguageSelector = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const currentLanguage = useSelector((state: RootState) => state.hohoho.language);
    // TODO language change needs to be debugged here and in Hohoho.tsx
    const handleLanguageChange = (lang: string) => {
        if (currentLanguage === lang) return;


        const searchParams = new URLSearchParams(location.search);
        searchParams.set('lang', lang);
        dispatch(setHohohoLanguage(lang));
        localStorage.setItem("hohohoLanguage", lang);
        navigate({
            pathname: location.pathname,
            search: `?${searchParams.toString()}`,
        }, { replace: true });
    };

    return (
        <div>
            {languages.map((lang, index) => (
                <React.Fragment key={lang.code}>
                    <span
                        className={classNames(
                            'padding--space-3xs',
                            {
                                'padding-left-0': index === 0,
                                'text-decoration--underline': currentLanguage !== lang.code,
                                'cursor-pointer': currentLanguage !== lang.code,
                                'color-quaternary': currentLanguage === lang.code,
                                'color-border': currentLanguage !== lang.code,
                            }
                        )}
                        onClick={() => handleLanguageChange(lang.code)}
                    >
                        {lang.label}
                    </span>
                    {index < languages.length - 1 && <span> · </span>}
                </React.Fragment>
            ))}
        </div>
    );
};

export default LanguageSelector;

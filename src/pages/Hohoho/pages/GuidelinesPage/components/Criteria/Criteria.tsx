import React from 'react'

import CriteriaList from './CriteriaList';
import Header from '../../../../components-elements/Header/Header'
import Paragraph from '../../../../components-elements/Paragraph'
import Separator from '../../../../components-shared/Separator';

import useFadeInAnimation from '../../../../hooks/useFadeInAnimation';
import { useTranslation } from 'react-i18next';
import { getCriteriaFromTranslationData } from '../../../../utils/CriteriaUtils';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../redux/store';

function Criteria({ separator }: { separator: string }) {
    const { h1Ref, h2Ref, sectionRef, separatorRef, isVisible } = useFadeInAnimation({
        delay: 1100,
    });

    const currentLanguage = useSelector((state: RootState) => state.hohoho.language) as "en" | "es" | "ptbr";

    const { t, i18n } = useTranslation("hohoho/guidelines-page");

    const criteriaList = getCriteriaFromTranslationData(i18n.store.data, 'hohoho/guidelines-page', currentLanguage);

    if (!isVisible) {
        return null;
    }

    return (
        <>
            <div className="u-container">
                <Header
                    h1Text={t('criteria-h1')}
                    h2Text={t('criteria-h2')}
                    h1Ref={h1Ref}
                    h2Ref={h2Ref}
                />
                <section className="p-grid p-grid--font-size" ref={sectionRef} style={{ opacity: 0 }}>
                    <Paragraph>{t('criteria-p1')}</Paragraph>
                    <CriteriaList criteria={criteriaList} />
                </section>
            </div>
            <Separator separator={separator} separatorRef={separatorRef} />
        </>
    )
}

export default Criteria

import React, { useState } from 'react';
import Collapsible from 'react-collapsible';

import Button from '../../../../components-elements/Button';
import RegisterForm from '../IntroApplication/RegisterForm';
import LoginForm from '../IntroApplication/LoginForm';
import { useTranslation } from 'react-i18next';

const CollapsibleManager: React.FC = () => {
    const [selectedForm, setSelectedForm] = useState<string | null>(null);
    const [closing, setClosing] = useState<boolean>(false);
    const [needsDelay, setNeedsDelay] = useState<boolean>(false);

    const handleSelectForm = (formType: string) => {
        if (selectedForm === formType) {
            setSelectedForm(null);
        } else {
            if (selectedForm !== null) {
                setClosing(true);
                setNeedsDelay(true);
            } else {
                setSelectedForm(formType);
            }
        }
    };

    const { t } = useTranslation('hohoho/application-page');

    // Apply the delay only when the needsDelay flag is true
    React.useEffect(() => {
        if (needsDelay) {
            const timer = setTimeout(() => {
                setClosing(false);
                setSelectedForm((prevSelectedForm) => (prevSelectedForm === 'register' ? 'login' : 'register'));
                setNeedsDelay(false);
            }, 400);

            return () => clearTimeout(timer);
        }
    }, [needsDelay]);

    return (
        <div>
            <div className="two-buttons-container">
                {/* TODO clicked button should keep its clicked colour if open */}
                <Button
                    text={t("button-register")}
                    onClick={() => handleSelectForm('register')}
                    variant="secondary"
                    size="small"
                    hasArrow={true}
                    arrowState={selectedForm === 'register'}
                />
                <Button
                    text="LOGIN"
                    onClick={() => handleSelectForm('login')}
                    variant="secondary"
                    size="small"
                    hasArrow={true}
                    arrowState={selectedForm === 'login'}
                />
            </div>

            {/* register Form */}
            <Collapsible
                trigger=""
                open={selectedForm === 'register' && !closing}
                transitionTime={300}
            >
                <RegisterForm />
            </Collapsible>

            {/* login Form */}
            <Collapsible
                trigger=""
                open={selectedForm === 'login' && !closing}
                transitionTime={300}
            >
                <LoginForm />
            </Collapsible>
        </div>
    );
};

export default CollapsibleManager;

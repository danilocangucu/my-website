import React from 'react';
import Button from '../../../../components-elements/Button';
import { hideErrorMessage } from '../../../../utils/MyApplicationUtils';

function FormErrorMessage() {

    return (
        <div className="error-message-overlay display-none" id="div-error">
            <div className="error-message-content margin-sides-10 text-white">
                <h1 className="mountains-of-christmas-bold mountains-o-c-b--h1 mountains-o-c-b--h1-error">Sorry!</h1>
                <p className="quattrocento-regular">
                    Your application couldn’t be <span id="span-error">processed</span>.<br /><br />
                    <b>This issue has been reported, and your changes are backed up. </b>
                    Danilo is on it and will have things sorted soon.
                    Please try again shortly.<br /><br />
                    Thanks for your patience!<br />
                    <Button
                        text="CLOSE"
                        size="x-small"
                        variant="secondary"
                        inlineStyles={{ marginTop: "var(--space-s)", marginBottom: "var(--space-xs)" }}
                        onClick={() => hideErrorMessage()}
                    />
                </p>
            </div>
        </div>
    );
}

export default FormErrorMessage;
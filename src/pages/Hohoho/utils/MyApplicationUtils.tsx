import axios from "axios";
import gsap from "gsap";

import { ApplicationDetailsDTO } from "../HohohoTypes";
import { HOHOHO_BASE_API_URL } from "./HohohoUtils";

export const inputClass = 'input-modern';

// TODO fix LoadFormDataResponse type
interface LoadFormDataResponse {
    data: any;
}

// TODO fix loadApplicationReturn type
interface loadApplicationReturn {
    applicationData: any
    loadMessage: any
}

export const loadApplicationData = async (token: string): Promise<loadApplicationReturn> => {
    try {
        const response: LoadFormDataResponse = await axios.get(`${HOHOHO_BASE_API_URL}/applications`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return { applicationData: response.data as ApplicationDetailsDTO, loadMessage: "Form data loaded successfully." };
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            return { applicationData: null, loadMessage: error.response.data.message };
        } else {
            return { applicationData: null, loadMessage: "Error: Something went wrong." };
        }
    }
};

// TODO fix createEmptyApplication to new data structure from db
export const createEmptyApplication = () => ({
    personalInformation: {
        fullName: "",
        emailAddress: "",
        phoneNumber: "",
        preferredLanguage: ""
    },
    aboutProject: {
        websiteDescription: "",
        websiteFeatures: ["", "", ""],
    },
    isComplete: undefined
});

export const submitApplication = async (formData: any, token: string) => {
    try {
        const response = await fetch(`${HOHOHO_BASE_API_URL}/applications/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(formData),
        });

        return response;
    } catch (error) {
        if (error instanceof Error) {
            return new Error('Error submitting application: ' + error.message);
        } else {
            return new Error('Error submitting application: An unknown error occurred.');
        }
    }
};

export function showErrorMessage(actionType: string) {
    const spanError = document.getElementById('span-error');
    if (spanError) {
        spanError.textContent = actionType;
    }

    const errorDiv = document.getElementById('div-error');
    if (errorDiv) {
        setTimeout(() => {
            errorDiv.classList.remove('display-none');
        }, 3500);
    }
}

// TODO add fade out while hiding error message
export function hideErrorMessage() {
    const errorDiv = document.getElementById('div-error');
    if (errorDiv) {
        errorDiv.classList.add('display-none');
    }

    const spanError = document.getElementById('span-error');
    if (spanError) {
        spanError.textContent = "processed";
    }
}

export async function sendErrorReport(formData: any, applicantEmail: string, response: Response | Error): Promise<void> {
    let errorMessage = "";
    try {
        if (response instanceof Response) {
            const responseData = await response.json();
            if (responseData && responseData.message) {
                errorMessage = responseData.message;
            }
        }

        const errorData = {
            errorMessage: `HOHOHO! Failed to ${formData.isComplete ? "submit" : "save"} the application.`,
            errorStack: JSON.stringify({
                formData: formData,
                applicantEmail: applicantEmail,
                responseStatus: (response instanceof Response ? response.status : "Type Error"),
                responseText: (response instanceof Response ? response.statusText : "Type Error"),
                errorMessage: errorMessage || response.toString(),
            }),
        };

        try {
            await axios.post("https://danilocangucu.net/api/errors/report", errorData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
        } catch (error) {
            // TODO handle this error without reporting to user's browser console
        }
    } catch (error) {
        // TODO handle this error without reporting to user's browser console
    }
}

export const handleSubmission = () => {
    console.log("handleSubmission called");
    const submitButton = document.getElementById("submit-button");
    console.log("got submit button", submitButton);

    if (submitButton) {
        console.log("disabling submit button");
        (submitButton as HTMLButtonElement).disabled = true;
        submitButton.classList.add("button--disabled");
    }
};

const updateCharCount = (textarea: HTMLTextAreaElement, charCountElem: HTMLElement, maxLength: number) => {
    const charCount = textarea.value.length;
    charCountElem.textContent = `${charCount} / ${maxLength}`;
};

export const addCharCountListeners = (textAreaConfig: { textareaId: string, charCountId: string, maxLength: number }[]) => {
    textAreaConfig.forEach(({ textareaId, charCountId, maxLength }) => {
        const textarea = document.getElementById(textareaId) as HTMLTextAreaElement;
        const charCountElem = document.getElementById(charCountId) as HTMLElement;

        if (textarea && charCountElem) {
            updateCharCount(textarea, charCountElem, maxLength);
            textarea.addEventListener("input", () => updateCharCount(textarea, charCountElem, maxLength));
        }
    });
};

export const validateFormFields = (delay: number) => {
    const timeoutId = setTimeout(() => {
        const form = document.getElementById('application-form') as HTMLFormElement;
        const submitButton = document.getElementById('submit-button') as HTMLButtonElement;

        if (form && submitButton) {
            const allInputsAndTextareasAndSelects = form.querySelectorAll('input, textarea, select');

            const requiredFields = Array.from(allInputsAndTextareasAndSelects).filter(field => {
                const isOptionalField =
                    field.id.includes('currentPresence') ||
                    field.id.includes('referenceWebsites') ||
                    field.id.includes('finalThoughts');
                return !isOptionalField && !(field as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement).disabled;
            });

            const validateForm = () => {
                const isValid = requiredFields.every(field => {
                    if (field instanceof HTMLSelectElement || field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) {
                        return field.value.trim() !== '';
                    }
                    return false;
                });

                submitButton.disabled = !isValid;

                if (isValid) {
                    submitButton.classList.remove('button--disabled');
                } else {
                    submitButton.classList.add('button--disabled');
                }
            };

            allInputsAndTextareasAndSelects.forEach(field => {
                field.addEventListener('input', validateForm);
            });

            validateForm();

            return () => {
                allInputsAndTextareasAndSelects.forEach(field => {
                    field.removeEventListener('input', validateForm);
                });

                clearTimeout(timeoutId);
            };
        }

    }, delay);

    return timeoutId;
};

export const scrollAndAnimate = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    gsap.to('.hohoho-page-container', {
        opacity: 1,
        duration: 0.7,
    });

    gsap.to('.footer', {
        opacity: 1,
        duration: 0.7,
        delay: 5.9,
    });
};

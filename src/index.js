/**
 * Creates a form data object and values from multiple DOM wrappers and encodes them (if you want to)
 * @version 0.0.1
 * @author Chris Boakes modified from archived (https://code.google.com/archive/p/form-serialize/)
 * @param Array of wrapper elements - form
 * @param Boolean - encode - do we want to encodeURIComponent?
 * @return FormData Object
 */
export default class {
    constructor(forms, encode) {
        this.formData = new FormData();

        // By default we want to encode the data
        this.encodeData = (typeof encode !== 'undefined') ? encode : true;

        if (forms !== 'null' && this.isArray(forms) && forms.length > 0) {
            for (let i in forms) {
                this.setFormDataArray(forms[i]);
            }
        }
    }

    // Loop through the form elements and assign their name and value to the FormData object
    setFormDataArray(formElement) {
        let i,
            j = [];

        let formChildren = formElement.querySelectorAll('input,select,textarea,button');

        for (i = formChildren.length - 1; i >= 0; i = i - 1) {
            if (formChildren[i].name === '') {
                continue;
            }
            switch (formChildren[i].nodeName) {
                case 'INPUT':
                    switch (formChildren[i].type) {
                        case 'text':
                        case 'hidden':
                        case 'button':
                        case 'reset':
                        case 'submit':
                        case 'number':
                        case 'color':
                        case 'date':
                        case 'datetime-local':
                        case 'email':
                        case 'month':
                        case 'range':
                        case 'search':
                        case 'tel':
                        case 'time':
                        case 'url':
                        case 'week':
                            this.appendFormData(
                                formChildren[i].name,
                                formChildren[i].value
                            );
                            break;
                        case 'checkbox':
                        case 'radio':
                            if (formChildren[i].checked) {
                                this.appendFormData(
                                    formChildren[i].name,
                                    formChildren[i].value
                                );
                            }
                            break;
                        case 'file':
                            break;
                    }
                    break;
                case 'TEXTAREA':
                    this.appendFormData(
                        formChildren[i].name,
                        formChildren[i].value
                    );
                    break;
                case 'SELECT':
                    switch (formChildren[i].type) {
                        case 'select-one':
                            this.appendFormData(
                                formChildren[i].name,
                                formChildren[i].value
                            );
                            break;
                        case 'select-multiple':
                            for (j = formChildren[i].options.length - 1; j >= 0; j = j - 1) {
                                if (formChildren[i].options[j].selected) {
                                    this.appendFormData(
                                        formChildren[i].name,
                                        formChildren[i].options[j].value
                                    );
                                }
                            }
                            break;
                    }
                    break;
                case 'BUTTON':
                    switch (formChildren[i].type) {
                        case 'reset':
                        case 'submit':
                        case 'button':
                            this.appendFormData(
                                formChildren[i].name,
                                formChildren[i].value
                            );
                            break;
                    }
                    break;
            }
        }
    }

    isArray(item) {
        return (Object.prototype.toString.call(item) === '[object Array]');
    }

    // Append single field to FormData object
    appendFormData(elementName, elementValue) {
        if (this.encodeData) {
            elementName = encodeURIComponent(elementName);
            elementValue = encodeURIComponent(elementValue);
        }
        this.formData.append(elementName, elementValue);
    }

    /**
     * Loop through the fields and assign them to the formData object
     * @return FormData Object
     */
    getFormData() {
        return this.formData;
    }
};

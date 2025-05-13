// Interface pour les options de la liste déroulante
export interface SelectOption {
    label: string;
    value: string;
}

// Interface pour le champ de sélection
export interface SelectField {
    id: string;
    name: string;
    type: string;
    placeholder: string;
    label: string;
    options: SelectOption[];
}

// Interface pour les options supplémentaires
export interface InputOptions {
    excludeFromData?: boolean;
}

// Interface pour les types de champs de saisie
export interface BaseInputField {
    id: string;
    name: string;
    type: string;
    label?: string;
    placeholder?: string;
    rows?: string;
    cols?: string
    checkboxLabel?: string;
    value?: string;
    options?: InputOptions | never;
}

// Interface pour les champs de texte, email, etc.
export interface TextField extends BaseInputField {
    type: 'text' | 'email';
}

// Interface pour les zones de texte
export interface TextareaField extends BaseInputField {
    type: 'textarea';
    rows: string;
    cols: string
}

// Interface pour les cases à cocher
export interface CheckboxField extends BaseInputField {
    type: 'checkbox';
    checkboxLabel: string;
}

// Interface pour les boutons d'envoi
export interface SubmitField extends BaseInputField {
    type: 'submit';
    value: string;
}

// Union type pour tous les types de champs
export type InputField = BaseInputField;

// Interface principale pour le formulaire
export interface ContactForm {
    select: SelectField;
    inputs: InputField[];
}

//
//
// Props
export type InputProps = {
    input: InputField
}
export type SelectProps = {
    select: SelectField
}
export type OptionProps = SelectField & { reset: boolean }

export type ModalStatusProps = {
    visible: boolean
    status?: string
    successMessage?: string
    errorMessage?: string
    successTitle?: string
    errorTitle?: string
}
import { ChangeEvent } from "react";
import { IFormInput } from "../../interface";
declare const useRegister: () => {
    items: {
        username: string;
        email: string;
        password: string;
        confirmPassword: string;
    };
    register: import("react-hook-form").UseFormRegister<IFormInput>;
    handleSubmit: import("react-hook-form").UseFormHandleSubmit<IFormInput, undefined>;
    onclick: (data: IFormInput) => void;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    errors: import("react-hook-form").FieldErrors<IFormInput>;
};
export default useRegister;

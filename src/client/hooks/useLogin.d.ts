import { ChangeEvent } from "react";
import { IFormInput } from "../../interface";
declare const useLogin: () => {
    values: {
        username: string;
        password: string;
    };
    register: import("react-hook-form").UseFormRegister<IFormInput>;
    handleSubmit: import("react-hook-form").UseFormHandleSubmit<IFormInput, undefined>;
    errors: import("react-hook-form").FieldErrors<IFormInput>;
    onSubmit: (data: IFormInput) => void;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
export default useLogin;

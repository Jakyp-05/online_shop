import { SubmitHandler } from "react-hook-form";
import { IFormLogin } from "@/interface";
declare const useLogin: () => {
    register: import("react-hook-form").UseFormRegister<IFormLogin>;
    handleSubmit: import("react-hook-form").UseFormHandleSubmit<IFormLogin, undefined>;
    onSubmit: SubmitHandler<IFormLogin>;
    errors: import("react-hook-form").FieldErrors<IFormLogin>;
};
export default useLogin;

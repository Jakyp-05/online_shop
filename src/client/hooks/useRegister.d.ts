import { SubmitHandler } from "react-hook-form";
import { IFormRegister } from "@/interface";
declare const useRegister: () => {
    register: import("react-hook-form").UseFormRegister<IFormRegister>;
    handleSubmit: import("react-hook-form").UseFormHandleSubmit<IFormRegister, undefined>;
    navigate: import("react-router").NavigateFunction;
    onSubmit: SubmitHandler<IFormRegister>;
    errors: import("react-hook-form").FieldErrors<IFormRegister>;
    handleEyes: () => void;
    handleClick: () => void;
    show: boolean;
    eyes: boolean;
};
export default useRegister;

import { useForm } from "react-hook-form";
import { schemaLogin } from "./yup";
import { yupResolver } from "@hookform/resolvers/yup";
const useLogin = () => {
    const { register, handleSubmit, formState: { errors }, reset, } = useForm({ resolver: yupResolver(schemaLogin) });
    const onSubmit = (data) => {
        console.log(data);
        reset();
    };
    return {
        register,
        handleSubmit,
        onSubmit,
        errors,
    };
};
export default useLogin;

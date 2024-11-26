import { SubmitHandler, useForm } from "react-hook-form";
import { schemaLogin } from "./yup";
import { IFormLogin } from "@/interface";
import { yupResolver } from "@hookform/resolvers/yup";

const useLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormLogin>({ resolver: yupResolver(schemaLogin) });

  const onSubmit: SubmitHandler<IFormLogin> = (data) => {
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

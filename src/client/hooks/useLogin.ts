import { ChangeEvent, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { IFormLogin } from "../../interface";
import { schemaLogin } from "./yup";

const useLogin = () => {
  const [values, setValues] = useState({ username: "", password: "" });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormLogin>({ resolver: yupResolver(schemaLogin) });

  const onSubmit = (data: IFormLogin) => {
    console.log(data);
    reset();
    setValues({ username: "", password: "" });
  };

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const target = e.target as InputNames; // Явно указываем, что e.target это HTMLInputElement
  //   const { name, value } = target;
  //   setValues((prevValues) => ({ ...prevValues, [name]: value }));
  // };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return { values, register, handleSubmit, errors, onSubmit, handleChange };
};

export default useLogin;

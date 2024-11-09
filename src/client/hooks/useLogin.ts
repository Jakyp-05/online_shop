import { ChangeEvent, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { IFormInput } from "../../interface";
import { schema } from "./yup";

const useLogin = () => {
  const [values, setValues] = useState({ username: "", password: "" });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({ resolver: yupResolver(schema) });

  const onSubmit = (data: IFormInput) => {
    console.log(data);
    reset();
    setValues({ username: "", password: "" });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;  // Типти туура көрсөтүү
    setValues({ ...values, [name]: value });
  };

  return { values, register, handleSubmit, errors, onSubmit, handleChange };
};

export default useLogin;

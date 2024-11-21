import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { IFormRegister } from "../../interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegister } from "./yup";

const useRegister = () => {
  const [items, setItems] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormRegister>({
    resolver: yupResolver(schemaRegister),
  });

  const onclick = (data: IFormRegister) => {
    console.log(data);
    reset();
    setItems({ username: "", email: "", password: "", confirmPassword: "" });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;
    setItems((prevItems) => ({ ...prevItems, [name]: value }));
  };

  return { items, register, handleSubmit, onclick, handleChange, errors };
};

export default useRegister;

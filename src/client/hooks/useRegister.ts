import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { IFormInput } from "../../interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./yup";

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
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onclick = (data: IFormInput) => {
    console.log(data);
    reset();
    setItems({ username: "", email: "", password: "", confirmPassword: "" });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setItems((prevItems) => ({ ...prevItems, [name]: value }));
  };

  return { items, register, handleSubmit, onclick, handleChange, errors };
};

export default useRegister;

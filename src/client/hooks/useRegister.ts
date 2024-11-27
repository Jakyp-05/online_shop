import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { schemaRegister } from "./yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFormRegister } from "../../interface";
import { yupResolver } from "@hookform/resolvers/yup";

const useRegister = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormRegister>({ resolver: yupResolver(schemaRegister) });
  const [show, setShow] = useState(false);
  const [eyes, setEyes] = useState(false);
  const navigate = useNavigate();

  const handleEyes = () => {
    setShow(!show);
  };

  const handleClick = () => {
    setEyes(!eyes);
  };

  const onSubmit: SubmitHandler<IFormRegister> = (data) => {
    console.log(data);
    reset();
  };
  return {
    register,
    handleSubmit,
    navigate,
    onSubmit,
    errors,
    handleEyes,
    handleClick,
    show,
    eyes,
  };
};

export default useRegister;

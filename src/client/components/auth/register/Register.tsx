import { Link, useNavigate } from "react-router-dom";
import useRegister from "../../../hooks/useRegister";
import { GoArrowLeft } from "react-icons/go";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Register: React.FC = () => {
  const [show, setShow] = useState(false);
  const [eyes, setEyes] = useState(false);
  const navigate = useNavigate();
  const { items, register, handleSubmit, onclick, handleChange, errors } =
    useRegister();

  const handleEyes = () => {
    setShow(!show);
  };

  const handleClick = () => {
    setEyes(!eyes);
  };

  return (
    <div className="register">
      <div className="container">
        <form className="register__content" onSubmit={handleSubmit(onclick)}>
          <div className="register__text">
            <span onClick={() => navigate(-1)}>
              <GoArrowLeft />
              Назад
            </span>
            <h2>Создайте свой аккаунт!</h2>
            <p>Ваши данные необходимы для целей отраслевого регулирования.</p>
          </div>

          <div className="register__inputs">
            <div className="inputs__label">
              <label>Ваше ФИО*</label>
              <input
                type="text"
                {...register("username")}
                onChange={handleChange}
                value={items.username}
                name="username"
                placeholder="ФИО"
              />
              {errors.username && (
                <p className="error">{errors.username.message}</p>
              )}
            </div>
            <div className="inputs__label">
              <label>Электронная почта*</label>
              <input
                type="text"
                {...register("email")}
                onChange={handleChange}
                value={items.email}
                name="email"
                placeholder="Email"
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>
            <div className="inputs__label">
              <label>Создайте пароль*</label>
              <input
                type={show ? "text" : "password"}
                {...register("password")}
                onChange={handleChange}
                value={items.password}
                name="password"
                placeholder="Пароль"
              />
              <p className="inputs__eyes" onClick={handleEyes}>
                {show ? <FaRegEyeSlash /> : <FaRegEye />}
              </p>

              {errors.password && (
                <p className="error">{errors.password.message}</p>
              )}
            </div>
            <div className="inputs__label">
              <label>Подтвердите пароль*</label>
              <input
                type={eyes ? "text" : "password"}
                {...register("confirmPassword")}
                onChange={handleChange}
                value={items.confirmPassword}
                name="confirmPassword"
                placeholder="Пароль"
              />
              <p className="inputs__eyes" onClick={handleClick}>
                {eyes ? <FaRegEyeSlash /> : <FaRegEye />}
              </p>

              {errors.confirmPassword && (
                <p className="error">{errors.confirmPassword.message}</p>
              )}
            </div>
            <div className="inputs__checkbox">
              <input type="checkbox" />
              <p>Я согласен с положениями и условиями</p>
            </div>
          </div>

          <div className="register__btn">
            <button type="submit">Зарегистрироваться</button>
            <p>
              У вас уже есть аккаунт?
              <span>
                <Link to="/login">Авторизоваться</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

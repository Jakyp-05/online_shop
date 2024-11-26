import React from "react";
import useLogin from "../../../hooks/useLogin";

const Login: React.FC = () => {
  const { register, handleSubmit, onSubmit, errors } = useLogin();

  return (
    <section className="login">
      <div className="container login__container">
        <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
          <h2>Login</h2>
          <div className="login__control">
            <label htmlFor="username">Username</label>
            <input
              className={errors.username ? "login__error-input" : ""}
              {...register("username")}
              placeholder="Username"
            />
            {errors.username && (
              <p className="login__error-text">{errors.username.message}</p>
            )}
          </div>
          <div className="login__control">
            <label htmlFor="email">Password</label>
            <input
              className={errors.password ? "login__error-input" : ""}
              {...register("password")}
              placeholder="Password"
            />
            {errors.password && (
              <p className="login__error-text">{errors.password.message}</p>
            )}
          </div>
          <button className="login__button" type="submit">
            Get started
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;

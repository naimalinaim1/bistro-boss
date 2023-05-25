import { useContext, useEffect, useRef, useState } from "react";
import useTitle from "../../hooks/useTitle/useTitle";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import loginImg from "../../assets/others/authentication1.png";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const input = useRef();

  const { loginUser } = useContext(AuthContext);

  useTitle("Login");
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((e) => console.log(e));
  };

  const handleCheck = () => {
    const inputText = input.current.value;
    if (validateCaptcha(inputText)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div className="w-[75%] md:w-[90%] max-w-[1100px] mx-auto mt-20">
      <h2 className="text-center text-4xl font-bold mb-6">Please Login</h2>
      <div className="grid justify-center items-center md:grid-cols-2 gap-6">
        <div>
          <img src={loginImg} alt="" />
        </div>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">
                <LoadCanvasTemplate />
              </span>
            </label>
            <input
              ref={input}
              type="text"
              name="captcha"
              placeholder="Type the captcha"
              className="input input-bordered"
              required
            />
            <p onClick={handleCheck} className="btn btn-xs mt-2">
              Check
            </p>
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value="login"
              disabled={disabled}
              className={`btn btn-primary`}
            />
          </div>
          <p className="text-orange-500 mt-4 text-center">
            New Here?{" "}
            <Link to="/signup" className="underline">
              Create an account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

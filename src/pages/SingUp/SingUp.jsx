import { useForm } from "react-hook-form";
import singUpImg from "../../assets/others/authentication2.png";
import { Link, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle/useTitle";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const SingUp = () => {
  useTitle("Sing up");
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="w-[75%] md:w-[90%] max-w-[1100px] mx-auto mt-20">
      <h2 className="text-center text-4xl font-bold mb-6">Please Sing up</h2>
      <div className="grid justify-center items-center md:grid-cols-2 gap-6">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              {...register("name", { required: true })}
              placeholder="name"
              className="input input-bordered"
            />
            {errors.name && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="email"
              className="input input-bordered"
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              placeholder="password"
              className="input input-bordered"
            />
            {errors.password?.type === "required" && (
              <span className="text-red-500">This field is required</span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-red-500">password min 6 character</span>
            )}
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Sing Up"
              className={`btn btn-primary`}
            />
          </div>
          <p className="text-orange-500 mt-4 text-center">
            Already Sing up?{" "}
            <Link to="/login" className="underline">
              Login
            </Link>
          </p>
        </form>
        <div>
          <img src={singUpImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SingUp;

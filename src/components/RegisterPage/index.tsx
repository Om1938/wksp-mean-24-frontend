import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { useRegisterMutation } from "../../redux/auth/api";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  // Hook called useState
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const [register] = useRegisterMutation();

  const handleSubmit = () => {
    console.log({
      username,
      password,
      confirmPassword,
      email,
    });

    if (confirmPassword !== password) {
      alert("Password does not match");
      return;
    }

    register({
      email,
      password,
      username,
    })
      .unwrap()
      .then((res) => {
        console.log(res);
        navigate("/login");
      });
  };
  return (
    <div className="flex align-items-center justify-content-center">
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
          <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
          <span className="text-600 font-medium line-height-3">
            Don't have an account?
          </span>
          <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">
            Create today!
          </a>
        </div>

        <div>
          <label htmlFor="email" className="block text-900 font-medium mb-2">
            Email
          </label>
          <InputText
            id="email"
            type="text"
            placeholder="Email address"
            className="w-full mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="UserName" className="block text-900 font-medium mb-2">
            Username
          </label>
          <InputText
            id="UserName"
            type="text"
            placeholder="UserName"
            className="w-full mb-3"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />

          <label htmlFor="password" className="block text-900 font-medium mb-2">
            Password
          </label>
          <InputText
            id="password"
            type="password"
            placeholder="Password"
            className="w-full mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="password" className="block text-900 font-medium mb-2">
            Confirm Password
          </label>
          <InputText
            id="cnf-password"
            type="password"
            placeholder="Password"
            className="w-full mb-3"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Button
            label="Sign In"
            icon="pi pi-user"
            className="w-full"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

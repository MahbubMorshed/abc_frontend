import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import storeContext from "../../context/storeContext.jsx";
import api from "../../api.js";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(storeContext);

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const changeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // ================================
  //  LOGIN MUTATION
  // ================================
  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const { data } = await api.post("/auth/login", {
        email: input.email.trim(),
        password: input.password.trim(),
      });
      return data; // { token, user }
    },
    onSuccess: (data) => {
      localStorage.setItem("abcToken", data.token);

      dispatch({
        type: "login_success",
        payload: { token: data.token },
      });

      toast.success("Logged in successfully");

      // Redirect based on role
      if (data?.admin?.role === "admin") {
        navigate("/admin", { replace: true });
      } else {
        navigate("/unable-access");
      }
    },
    onError: (err) => {
      const msg =
        err?.response?.data?.message || "Invalid credentials or server error";
      toast.error(msg);
    },
  });

  const submitLogin = (e) => {
    e.preventDefault();
    mutate();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Admin Login</h1>

        <form onSubmit={submitLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={input.email}
              onChange={changeInput}
              required
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block font-medium mb-1">Password</label>
            <input
              name="password"
              type="password"
              value={input.password}
              onChange={changeInput}
              required
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
          >
            {isPending ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

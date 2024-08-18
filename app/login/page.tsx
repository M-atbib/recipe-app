"use client";

import { useState } from "react";
import Logo from "@/components/Logo";
import { Facebook, Google } from "@mui/icons-material";
import { createClient } from "@/utils/supabase/client";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp(
      {
        email,
        password,
      }
    );
    if (signUpError) {
      setError(signUpError.message);
    } else {
      setError("");
      const { data: insertData, error: insertError } = await supabase
        .from("user")
        .insert([{ email: email, created_at: new Date().toISOString() }])
        .select();
      if (insertError) {
        setError(insertError.message);
      } else {
        setError("");
        // Redirect or perform other actions on successful login
      }
    }
  };

  return (
    <div className="container">
      <div className="flex items-end gap-2 justify-center">
        <h1 className="text-xl font-bold">Login to </h1>
        <Logo />
      </div>

      <div className="flex justify-center items-center mx-auto gap-2 my-5">
        <button className="bg-gray-200 w-[25ch] py-3 font-semibold">
          Continue with Facebook
        </button>
        <button className="bg-gray-200 w-[25ch] py-3 font-semibold">
          Continue with Google
        </button>
      </div>

      <h3 className="text-slate-400 text-center">OR</h3>

      <form onSubmit={handleLogin} className="mt-5 w-[50%] space-y-3">
        <div>
          <label htmlFor="email" className="text-slate-600 ml-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="text-slate-600 ml-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="At least 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="flex w-fit gap-2">
          <input
            type="checkbox"
            name="keep_signed"
            id="keep_signed"
            className="w-9"
          />
          <label htmlFor="keep_signed" className="text-nowrap text-sm">
            Keep me signed in
          </label>
        </div>

        <button className="bg-primary w-full py-2 text-white font-medium text-lg">
          Login
        </button>
        <p className="text-sm text-slate-400 text-right">
          Don't have an account
        </p>
        <button className="bg-gray-400 px-4 font-semibold py-3 w-full">
          Sign up
        </button>
        <p className="text-sm text-slate-400 text-right">
          Forgot your password?
        </p>
      </form>
    </div>
  );
};

export default Login;

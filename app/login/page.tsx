"use client";

import { useState, FormEvent, useEffect } from "react";
import { login, logout } from "@/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import {
  Facebook as FacebookIcon,
  Google as GoogleIcon,
} from "@mui/icons-material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();
  const emailDisplay = useAppSelector((state: any) => state.auth.value.email);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      className="mt-8 flex flex-col items-center"
    >
      <CssBaseline />
      <Box className="flex flex-col items-center">
        <Typography component="h1" variant="h5">
          Log in to Epicure
        </Typography>
        <Box
          component="form"
          onSubmit={handleLogin}
          noValidate
          className="mt-4 w-full"
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2"
          />
          {/* <FormControlLabel
            control={
              <Checkbox
                value={keepSignedIn}
                color="primary"
                checked={keepSignedIn}
                onChange={() => dispatch(setKeepSignedIn(!keepSignedIn))}
              />
            }
            label="Keep me signed in"
            className="mt-2"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="mt-3 mb-2"
          >
            Log in
          </Button>
          {/* {loginError && (
            <Typography color="error" className="mt-2">
              {loginError}
            </Typography>
          )} */}
          <Link href="#" variant="body2" className="block text-center mt-2">
            Forgot your password?
          </Link>
          <Link href="#" variant="body2" className="block text-center mt-2">
            {"Don't have an account? Sign up"}
          </Link>
        </Box>

        <Typography component="h1" variant="h5">
          {emailDisplay}
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;

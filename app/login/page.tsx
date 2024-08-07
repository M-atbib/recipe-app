"use client";

import { useState, FormEvent, useEffect } from "react";
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
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepSignedIn, setKeepSignedIn] = useState(true);

  const http = axios.create({
    baseURL: "https://gestion-groupeelhouria-d5bfba1b9bb0.herokuapp.com",
    headers: {
      "X-Requested-With": "XMLHttpRequest",
    },
    withCredentials: true,
  });

  const fetchCsrfToken = async () => {
    const crsf = await http.get("/sanctum/csrf-cookie");
    console.log(crsf);
  };

  useEffect(() => {
    fetchCsrfToken();
  }, []);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://gestion-groupeelhouria-d5bfba1b9bb0.herokuapp.com/api/auth/login",
        {
          email,
          password,
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Login failed:", error);
    }
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
          <FormControlLabel
            control={
              <Checkbox
                value={keepSignedIn}
                color="primary"
                checked={keepSignedIn}
                onChange={() => setKeepSignedIn(!keepSignedIn)}
              />
            }
            label="Keep me signed in"
            className="mt-2"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="mt-3 mb-2"
          >
            Log in
          </Button>
          <Link href="#" variant="body2" className="block text-center mt-2">
            Forgot your password?
          </Link>
          <Link href="#" variant="body2" className="block text-center mt-2">
            {"Don't have an account? Sign up"}
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;

"use client";
import { useRouter } from "next/router";
import { Button } from "@mui/material";

export default function Home() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/login");
  };

  return (
    <main>
      <h1>Hello lhaj lmokhtar</h1>
      <Button variant="contained" color="primary" onClick={handleNavigate}>
        Go to Login
      </Button>
    </main>
  );
}

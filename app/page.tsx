"use client";

import Link from "next/link";
import { Button } from "@mui/material";
import { useAppSelector } from "@/redux/store";

export default function Home() {
  const emailDisplay = useAppSelector((state: any) => state.auth.value.email);
  return (
    <main>
      <h1>Hello lhaj lmokhtar</h1>
      <h1>{emailDisplay} </h1>
      <Link href="/login" passHref>
        <Button variant="contained" color="primary">
          Go to Login
        </Button>
      </Link>
    </main>
  );
}

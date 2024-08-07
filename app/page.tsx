"use client";
import Link from "next/link";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <main>
      <h1>Hello lhaj lmokhtar</h1>
      <Link href="/login" passHref>
        <Button variant="contained" color="primary">
          Go to Login
        </Button>
      </Link>
    </main>
  );
}

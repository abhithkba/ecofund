import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
//import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
//const stripePromise = loadStripe(process.env.stripe_public_key!);
import data from "../public/data.json";
import HeroSection from "./components/HeroSection";

export default function Home() {
  const router = useRouter();
  const createCPSession = async () => {
    const response = await fetch("/api/candypay", {
      method: "POST",
    });
    const data = await response.json();
    console.log("message", data);
    router.push(data.payment_url);
  };
  const createCPSession2 = async () => {
    const response = await fetch("/api/candypay2", {
      method: "POST",
    });
    const data = await response.json();
    console.log("message", data);
    router.push(data.payment_url);
  };

  return (
    <>
      <HeroSection
        createCPSession={createCPSession}
        createCPSession2={createCPSession2}
      />
    </>
  );
}

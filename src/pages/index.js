import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Banners from "@/components/Banner";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <Banners />
      <Hero />
    </div>
  );
}

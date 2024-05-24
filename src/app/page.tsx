import "../styles/globals.css";

import React from "react";
import Image from "next/image";
import RootLayout from "./layout";
import CourseGrid from "@/components/CourseGrid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatisticItem from "@/components/StatisticItem";
import destaqueImage from "@/assets/images/destaque.png";

const Page = () => {
  return (
    <RootLayout>
      <div className="container mx-auto min-h-screen bg-gray-200 p-0">
        <h1 className="bg-white text-primary">Cursos</h1>
        <hr />
        <section className="bg-white">
          <CourseGrid />
        </section>
      </div>
    </RootLayout>
  );
};

export default Page;

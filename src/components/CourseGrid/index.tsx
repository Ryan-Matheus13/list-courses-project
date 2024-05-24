"use client";

import React, { useEffect, useState } from "react";

import { ICourse, ICoursesResponse } from "@/interfaces";
import CourseCard from "../CourseCard";

export default function CourseGrid() {
  const [courses, setCourses] = useState<ICourse[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await handleGetCourses();
    };

    fetchData();
  }, []);

  const handleGetCourses = async (): Promise<void> => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_BASE_URL + "core_course_get_courses"
      );

      if (!response.ok) {
        throw new Error("Erro ao buscar dados");
      }

      const data: ICoursesResponse[] = await response.json();

      const formattedData: ICourse[] = [];

      data.map((item: ICoursesResponse) => {
        const obj: ICourse = {
          id: item.id,
          displayname: item.displayname,
          shortname: item.shortname,
          fullname: item.fullname,
          summary: item.summary,
          visible: item.visible,
        };

        formattedData.push(obj);
      });

      setCourses(formattedData);
      return;
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      throw error;
    }
  };

  return (
    <div className="grid gap-[1rem] grid-cols-[repeat(auto-fill,_minmax(22.5rem,_1fr))]">
      {courses.map((course: ICourse, index: number) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
}

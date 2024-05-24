"use client";

import { ICourse, ICoursesResponse } from "@/interfaces";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [course, setCourse] = useState<ICourse>();

  const params = useParams<{ id: string }>();

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

        if (item.id == Number(params.id)) {
          setCourse(obj);
        }
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
    <div>
      <h1 className="text-base font-bold text-left text-gray-700">
        {course?.fullname}
      </h1>
      <p
        className="text-left text-gray-700"
        dangerouslySetInnerHTML={{ __html: course?.summary }}
      ></p>
    </div>
  );
}

import { ICourse } from "@/interfaces";
import React from "react";
import Icone from "@/assets/Icon.svg";
import Image from "next/image";
import Link from "next/link";

type CourseCardProps = {
  course: ICourse;
};

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link
      href={`/course-detail/${course.id}`}
      className="bg-white flex gap-4 p-6 rounded-md border border-gray-300 items-center hover:bg-gray-100"
    >
      <div className="w-12">
        <Image src={Icone} alt="" width={75} height={75} />
      </div>
      <div className="flex items-center h-full">
        <h4 className="text-base font-bold text-left text-gray-700">
          {course.displayname}
        </h4>
      </div>
    </Link>
  );
}

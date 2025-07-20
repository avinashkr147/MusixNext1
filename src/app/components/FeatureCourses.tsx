"use client";
import React from "react";
import CourseData from "../data/music_courses.json";
import Link from "next/link";
import { p } from "motion/react-client";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title:string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

const FeatureCourses = () => {
  let featuredCourses = CourseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12  bg-gray-900">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          FEATURED COURSES
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Learn With the Best
        </p>
      </div>
      <div className="mt-11 ">
        <div id="feature-maincontainer" className="grid sm:px-3 lg:grid-cols-3 sm:grid-cols-2 gap-7 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center ">
              <BackgroundGradient className="flex flex-col  rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 gap-3.5 sm:p-6 flex flex-col items-center text-center flex-grow">
                    <p
                    className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200"
                    >{course.title}
                    </p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                        {course.description}</p>
                          <Link
                           className="bg-white px-2 py-1 text-gray-700 rounded-lg text-base"
                          href={`/courses/${course.slug}`}>
                                Learn More
                                </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 text-center">
        <Link
          href={"/courses"}
          className="py-4.5 z-19 px-6 text-sm rounded-md border border-solid border-gray-200 text-gray-600 cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-gray-300 hover:text-gray-800"
        >
          View All courses
        </Link>
      </div>
    </div>
  );
}; 

export default FeatureCourses;

"use client";
import { CardBody, CardContainer, CardItem } from "@/app/components/ui/3d-card";
import { div, h1 } from 'motion/react-client';
import React from 'react'
import courseData from "@/data/music_courses.json"


interface Course {
  id: number;
  title:string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}


const page = () => {
  return (
    <div className="min-h-screen bg-black py-12 px-4 pt-36">
        <h3 className="text-center text-4xl mt-5 text-gray-400 font-bold">All Courses ({courseData.courses.length})</h3>
      <div className="grid  grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-2  justify-center   mt-10">
          {courseData.courses.map((course:Course)=>(
         <CardContainer className="inter-var">
      <CardBody   className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-8 border   ">
        <CardItem  
          translateZ="50"
          className="font-bold text-neutral-600 dark:text-white mt-3  text-2xl"
        >
          {course.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500  max-w-sm mt-4 font-light text-[20px] dark:text-neutral-300"
        >
          {course.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4 text-2xl font-light text-gray-500">
         Instructor:{course.instructor}
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            as="a"
            href={course.slug}
            target="__blank"
            className=" px-3 rounded-xl text-xs font-normal dark:text-white"
          >
           {course.slug}
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            {course.price}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>

          )
            
          )}
      </div>
    </div>
  )
}

export default page
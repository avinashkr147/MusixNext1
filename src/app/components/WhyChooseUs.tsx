"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const MusicSchoolContent = [
  {
     title: "Instrument Lab Access",
    description: "Students have full access to a variety of instruments during dedicated practice hours — including electric and acoustic guitars, keyboards, synthesizers, drum kits, violins, and more. All instruments are regularly tuned and maintained, ensuring you get the best sound and playing experience every time.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Online + Offline Classes",
    description: "We provide the flexibility of both physical and virtual learning. Join us at our center for in-person classes, or attend live interactive sessions online from anywhere. All classes are recorded, so you’ll never miss a lesson and can revise at your own pace." ,
    content: (
      <Image
        src="https://images.pexels.com/photos/1656066/pexels-photo-1656066.jpeg"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    ),
  },
  {
    title: "State-of-the-Art Music Studios",
    description: "Our music studios are acoustically treated, soundproof, and equipped with top-tier instruments and digital gear. From grand pianos to modern recording equipment, we provide an immersive environment that feels just like a professional studio, helping students learn and create with confidence.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Art Music Studios
      </div>
    ),
  },
  {
   title: "Performance Stage & Studio",
    description: "Our in-house stage is fully equipped with lighting, sound systems, and recording tools. Students get regular opportunities to perform solo or with their bands. We also record these performances and provide professional footage for your portfolio or social media." ,
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <Image
          src="https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="img"
        />
      </div>
      
    ),
},
  

];


const WhyChooseUs = () => {
  return (
    <div className="w-full py-4">
        <div className="flex bg-black  mx-auto px-1.5 py-2 justify-center">
            <h3 className="text-3xl font-bold text-center text-neutral-900 mb-5 z-10">Why Choose Us..?</h3>
        </div>
    <StickyScroll content={MusicSchoolContent}/>

    </div>
  )
}

export default WhyChooseUs
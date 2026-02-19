"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "/images/skytree.jpg",
    "/images/temple.jpg",
    "/images/train.jpg",
    "/images/alley.jpg",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
        {/* 
        // <Image
        //   src="/images/skytree.jpg"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // /> */}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Hey, I&apos;m Ed. I&apos;m a Junior Developer who loves building
          clean, practical things that feel good to use. I&apos;m big on solid
          fundamentals, thoughtful UI, and the kind of small details that make a
          project feel finished rather than “almost there”
        </Paragraph>
        <Paragraph className=" mt-4">
          Most of my time goes into hands-on projects where I can learn by
          doing. I build web apps with React and modern tooling, and I&apos;m
          constantly improving how I structure components, handle form
          validation, keep styles consistent, and make pages responsive and
          accessible.
        </Paragraph>

        <Paragraph className=" mt-4">
          I&apos;m also building a 2D Unity side scroller game with a gloomy,
          rain soaked vibe, complete with custom pixel art, animation work, and
          a lot of problem solving around movement, sprite handling, and
          gameplay systems. It&apos;s been a great way to mix creative direction
          with real debugging and iteration.
        </Paragraph>
        <Paragraph className=" mt-4">
          Alongside that, I&apos;m developing my Python skills and working on
          smaller projects that help me practice logic, data handling, and clean
          code. I enjoy projects that have a clear goal, a simple interface, and
          room to scale up once the core works.
        </Paragraph>
        <Paragraph className=" mt-4">
          I care a lot about quality. I like writing code that&apos;s readable,
          testable, and easy to maintain, and I enjoy the QA side of development
          too, reproducing issues, writing clear bug notes, and tightening up
          edge cases until things behave properly.
        </Paragraph>
        <Paragraph className=" mt-4">
          When I&apos;m not coding, I&apos;m usually deep into games, tabletop
          campaigns, or planning a trip. I&apos;m especially into Japan travel
          planning and anything that mixes creativity with systems and
          structure.
        </Paragraph>
        <Paragraph className=" mt-4">
          If you&apos;d like to chat about a project, a role, or just want to
          swap ideas, feel free to reach out. I&apos;m always happy to connect
          and learn from other people building cool stuff.
        </Paragraph>
      </div>
    </div>
  );
}

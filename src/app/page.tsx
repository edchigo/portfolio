import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";

export function CardStackDemo() {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlighter = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className,
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <p>
        These cards are amazing, <Highlighter>I want to use them</Highlighter>{" "}
        in my project. Framer motion is a godsend ngl tbh fam 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <p>
        I dont like this Twitter thing,{" "}
        <Highlighter>deleting it right away</Highlighter> because yolo. Instead,
        I would like to call it <Highlighter>X.com</Highlighter> so that it can
        easily be confused with adult sites.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        The first rule of
        <Highlighter>Fight Club</Highlighter> is that you do not talk about
        fight club. The second rule of
        <Highlighter>Fight club</Highlighter> is that you DO NOT TALK about
        fight club.
      </p>
    ),
  },
];

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Ed</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a Junior Developer that loves{" "}
        <Highlight>turning ideas</Highlight> into polished web apps that are
        simple, useful, and enjoyable to use. I enjoy building clean interfaces,
        writing maintainable code, and improving things through iteration and
        feedback.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m always <Highlight>learning</Highlight>, and I’m excited to join
        a team where I can contribute, grow, and ship meaningful work.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}

import sidefolioAceternity from "public/images/sidefolio-aceternity-2.png";
import sidefolioAceternity2 from "public/images/sidefolio-aceternity-2.png";
import sidefolioAlgochurn from "public/images/sidefolio-algochurn.png";
import sidefolioAlgochurn2 from "public/images/sidefolio-algochurn.png";
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";
import japlansImg from "/images/japlans.jpg";
import japlansImg2 from "/images/japlansTwo.jpg";
import rainfallImg from "/images/rainfall.jpg";
import rainfallImg2 from "/images/rainfallTwo.jpg";

export const products = [
  {
    href: "https://japlans.com/",
    title: "Japlans Travel Blog",
    description:
      "A static site built with HTML/CSS/JS to share my travel experiences with the world.",
    thumbnail: japlansImg,
    images: [japlansImg, japlansImg2],
    stack: ["JavaScript", "CSS", "HTML"],
    slug: "japlans",
    content: (
      <div>
        <p>
          As an avid traveller, creating a blog as a convenient way to keep
          friends, loved ones and anyone interested informed on my travels, so
          made for an excellent first project.{" "}
        </p>
        <p>
          I learned a lot about building static sites, and got to practice
          HTML/CSS/JS by building a custom image gallery and other fun features
          to make the site more engaging. It was a great way to share my
          adventures and practice my web development skills at the same time!
        </p>{" "}
        <p>
          I also learned the benefits and drawbacks of building a static site
          from scratch, and how to optimize for performance and SEO without
          relying on frameworks. It was a fun project that sparked my passion
          for web development and motivated me to keep learning and building
          more projects.
        </p>{" "}
        <p>
          Overall, building the Japlans travel blog was a rewarding experience
          that allowed me to combine my love of travel with my interest in web
          development, and I&apos;m excited to keep improving it and plan on
          updating it more frequently with new content and features as I
          continue to learn and grow as a developer.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "",
    title: "Project Rainfall",
    description:
      "A 2D Unity side scroller set in a rain-soaked gothic city, featuring custom pixel art, responsive movement, and an umbrella-based gameplay mechanic.",
    thumbnail: rainfallImg,
    images: [rainfallImg, rainfallImg2],
    stack: ["Unity", "C#"],
    slug: "rainfall",
    content: (
      <div>
        <p>
          Project Rainfall is my ongoing 2D Unity side scroller built around a
          moody, rain soaked, gothic inspired city. It started as a way to push
          my skills beyond small web projects and into something more systems
          driven, where gameplay, art, and code all have to work together.
        </p>
        <p>
          A core feature of the game is the umbrella mechanic. It influences how
          the character moves and feels, and it&apos;s also tied into animation
          and player interaction. Building this has meant a lot of iteration in
          Unity, from movement and flipping logic, to keeping separate character
          parts in sync, and making sure everything still feels smooth and
          responsive.
        </p>
        <p>
          Overall, Project Rainfall has become my favourite learning playground.
          It combines creative direction with real problem solving, and it
          constantly teaches me how to debug, refine, and improve features until
          they feel polished. I&apos;m continuing to expand it with more levels,
          better animations, and new gameplay ideas as my Unity and C# skills
          grow.
        </p>
      </div>
    ),
  },
];

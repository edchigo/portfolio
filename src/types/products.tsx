import type { StaticImageData } from "next/image";
import type React from "react";

type Img = string | StaticImageData;

export type Product = {
  title: string;
  description: string;
  thumbnail: Img;
  images: Img[];
  href: string;
  slug?: string;
  stack?: string[];
  content?: React.ReactNode | string;
};

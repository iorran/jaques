"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { ProductCard } from "@/components/product-card";
import { useRef } from "react";

const data = [
  {
    id: 1,
    imageSrc: "/coffe1.jpg",
    title: "Coffee 1",
    price: "$10",
    description: "This is a description for coffee 1",
  },
  {
    id: 2,
    imageSrc: "/coffe2.jpg",
    title: "Coffee 2",
    price: "$15",
    description: "This is a description for coffee 2",
  },
  {
    id: 3,
    imageSrc: "/coffe3.jpg",
    title: "Coffee 1",
    price: "$20",
    description: "This is a description for coffee 3",
  },
];

export default function Home() {
  let coffeeRef = useRef<HTMLParagraphElement>(null);

  const scrollHandler = (e: any) => {
    e.preventDefault();
    // @ts-ignore
    coffeeRef.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <>
      <Header scrollHandler={scrollHandler} />
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 bg-white">
        <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p
              className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl"
              ref={coffeeRef}
            >
              Crafted by us, for you
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data &&
            data.map(({ imageSrc, title, price, description, id }) => (
              <ProductCard
                imageSrc={imageSrc}
                title={title}
                price={price}
                description={description}
                key={id}
              />
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

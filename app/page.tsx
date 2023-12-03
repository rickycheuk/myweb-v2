"use client";
import Image from "next/image";
import Link from "next/link";
import Card from "@/components/card";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Home() {
  const cardData = [
    {
      front: (
        <div className="w-48 h-48 rounded-[36px]">
          <Image
            src="/pfp.webp"
            alt="Ricky PFP"
            width="400"
            height="400"
            className="rounded-md w-full h-full"
          />
        </div>
      ),
      back: (
        <div className="w-48 h-48 rounded-[36px] bg-black border-2 border-zinc-700">
          <Image
            src="/pfp.webp"
            alt="Ricky PFP"
            width="400"
            height="400"
            className="rounded-md w-full h-full opacity-20"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center gap-3">
            <span className="text-white text-2xl font-bold">Ricky Cheuk</span>
            <span className="text-white text-sm">- Software Engineer -</span>
            <div className="flex items-center justify-center w-full gap-6 p-1">
              <a
                onClick={(e) => e.stopPropagation()}
                href="https://github.com/rickycheuk"
                target="_blank"
                className="rounded-md text-white/70 hover:text-white hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                onClick={(e) => e.stopPropagation()}
                href="https://www.linkedin.com/in/rickycheuk/"
                target="_blank"
                className="rounded-md text-white/70 hover:text-white hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                onClick={(e) => e.stopPropagation()}
                href="https://twitter.com/rickykccheuk"
                target="_blank"
                className="rounded-md text-white/70 hover:text-white hover:scale-110"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      front: (
        <div className="w-48 h-48 rounded-[36px]">
          <Image
            src="/noozz.webp"
            alt="Noozz.ai"
            width="400"
            height="400"
            className="rounded-md w-full h-full"
          />
        </div>
      ),
      back: (
        <div className="w-48 h-48 rounded-[36px] bg-black border-2 border-zinc-700 relative">
          <Image
            src="/noozz.webp"
            alt="Noozz.ai"
            width="400"
            height="400"
            className="rounded-md w-full h-full opacity-20"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center gap-3">
            <span className="text-white text-2xl font-bold">NOOZZ</span>
            <span className="text-white text-sm">News Summaries by AI</span>
            <a
              onClick={(e) => e.stopPropagation()}
              href="https://noozz.ai"
              target="_blank"
              className="px-8 p-2 border-2 border-white rounded-full font-extrabold text-xl hover:bg-white hover:text-black"
            >
              GO
            </a>
          </div>
        </div>
      ),
    },
    {
      front: (
        <div className="w-48 h-48 rounded-[36px]">
          <Image
            src="/unknown.webp"
            alt="Unknown"
            width="400"
            height="400"
            className="rounded-md w-full h-full"
          />
        </div>
      ),
      back: (
        <div className="w-48 h-48 rounded-[36px] bg-black border-2 border-zinc-700 relative">
          <Image
            src="/unknown.webp"
            alt="Unknown"
            width="400"
            height="400"
            className="rounded-md w-full h-full opacity-20"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center gap-3">
            <span className="text-white text-2xl font-bold">Coming Soon</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-8 gap-8">
      <a href="/" className="rounded-md ">
        <Image
          src="/logo.webp"
          alt="Ricky Logo"
          width="69"
          height="69"
          className="rounded-md"
        />
      </a>
      <div className="flex flex-col min-h-[80vh] items-center justify-center gap-8 md:flex-row">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="animate-fade-up opacity-0"
            style={{
              animationDelay: `${index * 0.15}s`,
              animationFillMode: "forwards",
            }}
          >
            <Card
              key={index}
              frontComponent={card.front}
              backComponent={card.back}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

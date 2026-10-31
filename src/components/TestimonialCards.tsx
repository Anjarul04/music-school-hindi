
"use client";
import { cn } from "@/lib/utils";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!",
    name: "Alex Johnson",
    title: "Guitar Student",
  },
  {
    quote:
      "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
    name: "Samantha Lee",
    title: "Piano Student",
  },
  {
    quote:
      "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
    name: "Michael Chen",
    title: "Vocal Student",
  },
  {
    quote:
      "As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.",
    name: "Emily Taylor",
    title: "Violin Student",
  },
  {
    quote:
      "The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!",
    name: "Chris Morales",
    title: "Music Production Student",
  },
];

const TestimonialCards = () => {
  return (
    <section className="relative flex min-h-[45rem] w-full flex-col items-center justify-center overflow-hidden bg-white px-4 py-24 dark:bg-black sm:px-6">

      {/* Grid Background */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Radial Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      {/* Heading Section */}
      <div className="relative z-10 mx-auto mb-16 max-w-3xl text-center">

        <span className="mb-5 inline-block rounded-full border border-purple-200 bg-purple-50 px-4 py-1.5 text-sm font-medium text-purple-600 dark:border-purple-900 dark:bg-purple-950/30 dark:text-purple-400">
          Student Testimonials
        </span>

        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl md:text-5xl">
          Hear Our Harmony:
          <span className="mt-2 block bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            Voices of Success
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-neutral-600 dark:text-neutral-400 sm:text-lg">
          Real stories from passionate musicians. Discover how our music
          school inspires creativity, builds confidence, and transforms
          musical journeys.
        </p>
      </div>

      {/* Moving Testimonials */}
      <div className="relative z-10 w-full max-w-7xl">
        <InfiniteMovingCards
          items={musicSchoolTestimonials}
          direction="right"
          speed="slow"
        />
      </div>

      {/* Bottom Text */}
      <p className="relative z-10 mt-12 text-center text-sm text-neutral-500 dark:text-neutral-500">
        Made with passion, music, and creativity.
      </p>

    </section>
  );
};

export default TestimonialCards;

import Head from "next/head";
import React from "react";

const Blog = () => {
  return (
    <div className="text-white">
      <Head>
        <title>Strong Roots Blogs</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <style>
        {`
    .bgimg1 {
      background-image: url("/child6.jpg");
    }
  `}
      </style>
      <div className="bgimg1 h-52 bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center">
        <div>
          <picture>
            <img src="/plant1.avif" alt="" className="w-28 rounded-full " />
          </picture>
        </div>
        <span
          className="text-white text-7xl font-semibold font-serif "
          data-aos="zoom-in-down"
          data-aos-duration="2000"
        >
          Blogs
        </span>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-12 py-12 mx-auto">
          <div className="flex flex-wrap space-x-8 space-y-8 justify-evenly -m-4">
            <div className="lg:w-1/5 md:w-1/2 mt-8  p-4 w-full shadow-md shadow-green-500  ">
              <a className="block relative h-48 rounded overflow-hidden">
                <picture>
                  <img
                    alt="ecommerce"
                    className="object-fill object-center w-full h-full block"
                    src="/ai24.avif"
                  />
                </picture>
              </a>
              <div className="mt-4  ">
                <h3 className="text-gray-800 text-xs tracking-widest title-font mb-1">
                  Quote
                </h3>

                <h2 className="text-gray-700 title-font text-sm text-start font-medium">
                  The greatest gift you can give someone is a tree. Its a
                  lasting reminder that you care about them and the planet.
                </h2>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2  p-4 w-full shadow-md shadow-green-500  ">
              <a className="block relative h-48 rounded overflow-hidden">
                <picture>
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/plant2.jpg"
                  />
                </picture>
              </a>
              <div className="mt-4  ">
                <h3 className="text-gray-800 text-xs tracking-widest title-font mb-1">
                  Quote
                </h3>

                <h2 className="text-gray-700 title-font text-sm text-start font-medium">
                  Plant a tree, plant a life; tree plantation drives, bring the
                  nature back to life.
                </h2>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2  p-4 w-full shadow-md shadow-green-500  ">
              <a className="block relative h-48 rounded overflow-hidden">
                <picture>
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/ai14.avif"
                  />
                </picture>
              </a>
              <div className="mt-4  ">
                <h3 className="text-gray-800 text-xs tracking-widest title-font mb-1">
                  Quote
                </h3>

                <h2 className="text-gray-700 title-font text-sm text-start font-medium">
                  The best friend on earth of man is the tree: When we use the
                  tree respectfully and economically, we have one of the
                  greatest resources on the earth.
                </h2>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2  p-4 w-full shadow-md shadow-green-500  ">
              <a className="block relative h-48 rounded overflow-hidden">
                <picture>
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/ai22.jpg"
                  />
                </picture>
              </a>
              <div className="mt-4  ">
                <h3 className="text-gray-800 text-xs tracking-widest title-font mb-1">
                  Quote
                </h3>

                <h2 className="text-gray-700 title-font text-sm text-start font-medium">
                  The best time to plant a tree is 20 years ago. The second-best
                  time is now.
                </h2>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2  p-4 w-full shadow-md shadow-green-500  ">
              <a className="block relative h-48 rounded overflow-hidden">
                <picture>
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/ai28.jpg"
                  />
                </picture>
              </a>
              <div className="mt-4  ">
                <h3 className="text-gray-800 text-xs tracking-widest title-font mb-1">
                  Quote
                </h3>

                <h2 className="text-gray-700 title-font text-sm text-start font-medium">
                  A tree is a wonderful living organism which gives shelter,
                  food, warmth and protection to all living things.
                </h2>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2  p-4 w-full shadow-md shadow-green-500  ">
              <a className="block relative h-48 rounded overflow-hidden">
                <picture>
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/ai9.avif"
                  />
                </picture>
              </a>
              <div className="mt-4  ">
                <h3 className="text-gray-800 text-xs tracking-widest title-font mb-1">
                  Quote
                </h3>

                <h2 className="text-gray-700 title-font text-sm text-start font-medium">
                  The true meaning of life is to plant trees, under whose shade
                  you do not expect to sit.
                </h2>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2  p-4 w-full shadow-md shadow-green-500  ">
              <a className="block relative h-48 rounded overflow-hidden">
                <picture>
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/ai2.avif"
                  />
                </picture>
              </a>
              <div className="mt-4  ">
                <h3 className="text-gray-800 text-xs tracking-widest title-font mb-1">
                  Quote
                </h3>

                <h2 className="text-gray-700 title-font text-sm text-start font-medium">
                  A society that destroys its soils destroys itself. Forests are
                  the lungs of our land, purifying the air and giving fresh
                  strength to our people.
                </h2>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2  p-4 w-full shadow-md shadow-green-500  ">
              <a className="block relative h-48 rounded overflow-hidden">
                <picture>
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/ai4.avif"
                  />
                </picture>
              </a>
              <div className="mt-4  ">
                <h3 className="text-gray-800 text-xs tracking-widest title-font mb-1">
                  Quote
                </h3>

                <h2 className="text-gray-700 title-font text-sm text-start font-medium">
                  The tree which moves some to tears of joy is in the eyes of
                  others only a green thing that stands in the way.
                </h2>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2  p-4 w-full shadow-md shadow-green-500  ">
              <a className="block relative h-48 rounded overflow-hidden">
                <picture>
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/ai17.avif"
                  />
                </picture>
              </a>
              <div className="mt-4  ">
                <h3 className="text-gray-800 text-xs tracking-widest title-font mb-1">
                  Quote
                </h3>

                <h2 className="text-gray-700 title-font text-sm text-start font-medium">
                  Trees exhale for us so that we can inhale them to stay alive.
                  Can we ever forget that? Let us love trees with every breath
                  we take until we perish.
                </h2>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2  p-4 w-full shadow-md shadow-green-500  ">
              <a className="block relative h-48 rounded overflow-hidden">
                <picture>
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/ai26.avif"
                  />
                </picture>
              </a>
              <div className="mt-4  ">
                <h3 className="text-gray-800 text-xs tracking-widest title-font mb-1">
                  Quote
                </h3>

                <h2 className="text-gray-700 title-font text-sm text-start font-medium">
                  To exist as a nation, to prosper as a state, and to live as a
                  people, we must have trees.
                </h2>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2  p-4 w-full shadow-md shadow-green-500  ">
              <a className="block relative h-48 rounded overflow-hidden">
                <picture>
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/ai8.jpg"
                  />
                </picture>
              </a>
              <div className="mt-4  ">
                <h3 className="text-gray-800 text-xs tracking-widest title-font mb-1">
                  Quote
                </h3>

                <h2 className="text-gray-700 title-font text-sm text-start font-medium">
                  Trees are the earth endless effort to speak to the listening
                  heaven.
                </h2>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2  p-4 w-full shadow-md shadow-green-500  ">
              <a className="block relative h-48 rounded overflow-hidden">
                <picture>
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/ai7.avif"
                  />
                </picture>
              </a>
              <div className="mt-4  ">
                <h3 className="text-gray-800 text-xs tracking-widest title-font mb-1">
                  Quote
                </h3>

                <h2 className="text-gray-700 title-font text-sm text-start font-medium">
                  A tree is known by its fruit; a man by his deeds. A good deed
                  is never lost; he who sows courtesy reaps friendship, and he
                  who plants kindness gathers love.
                </h2>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2  p-4 w-full shadow-md shadow-green-500  ">
              <a className="block relative h-48 rounded overflow-hidden">
                <picture>
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/ai3.jpg"
                  />
                </picture>
              </a>
              <div className="mt-4  ">
                <h3 className="text-gray-800 text-xs tracking-widest title-font mb-1">
                  Quote
                </h3>

                <h2 className="text-gray-700 title-font text-sm text-start font-medium">
                  The tree which bends to the ground is the one that is loaded
                  with fruit
                </h2>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2  p-4 w-full shadow-md shadow-green-500  ">
              <a className="block relative h-48 rounded overflow-hidden">
                <picture>
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/ai1.jpg"
                  />
                </picture>
              </a>
              <div className="mt-4  ">
                <h3 className="text-gray-800 text-xs tracking-widest title-font mb-1">
                  Quote
                </h3>

                <h2 className="text-gray-700 title-font text-sm text-start font-medium">
                  When you plant a tree, you plant a symbol of hope, of the
                  future, and of life.
                </h2>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2  p-4 w-full shadow-md shadow-green-500  ">
              <a className="block relative h-48 rounded overflow-hidden">
                <picture>
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/plant3.jpg"
                  />
                </picture>
              </a>
              <div className="mt-4  ">
                <h3 className="text-gray-800 text-xs tracking-widest title-font mb-1">
                  Quote
                </h3>

                <h2 className="text-gray-700 title-font text-sm text-start font-medium">
                  The best time to plant a tree is 20 years ago. The second best
                  time is now. Dont wait, plant a tree today
                </h2>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2  p-4 w-full shadow-md shadow-green-500  ">
              <a className="block relative h-48 rounded overflow-hidden">
                <picture>
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/plant5.avif"
                  />
                </picture>
              </a>
              <div className="mt-4  ">
                <h3 className="text-gray-800 text-xs tracking-widest title-font mb-1">
                  Quote
                </h3>

                <h2 className="text-gray-700 title-font text-sm text-start font-medium">
                  Trees are silent protectors, providing us with life,
                  nourishment, and beauty, without asking for anything in
                  return.
                </h2>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2  p-4 w-full shadow-md shadow-green-500  ">
              <a className="block relative h-48 rounded overflow-hidden">
                <picture>
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/ai19.jpg"
                  />
                </picture>
              </a>
              <div className="mt-4  ">
                <h3 className="text-gray-800 text-xs tracking-widest title-font mb-1">
                  Quote
                </h3>

                <h2 className="text-gray-700 title-font text-sm text-start font-medium">
                  Trees are living monuments that remind us of natures power,
                  resilience, and majesty.
                </h2>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2  p-4 w-full shadow-md shadow-green-500  ">
              <a className="block relative h-48 rounded overflow-hidden">
                <picture>
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/ai18.avif"
                  />
                </picture>
              </a>
              <div className="mt-4  ">
                <h3 className="text-gray-800 text-xs tracking-widest title-font mb-1">
                  Quote
                </h3>

                <h2 className="text-gray-700 title-font text-sm text-start font-medium">
                  Planting trees is an act of faith in the future, a commitment
                  to the well-being of generations to come.
                </h2>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2  p-4 w-full shadow-md shadow-green-500  ">
              <a className="block relative h-48 rounded overflow-hidden">
                <picture>
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/ai16.jpg"
                  />
                </picture>
              </a>
              <div className="mt-4  ">
                <h3 className="text-gray-800 text-xs tracking-widest title-font mb-1">
                  Quote
                </h3>

                <h2 className="text-gray-700 title-font text-sm text-start font-medium">
                  A tree is not just a plant, it is a legacy, a gift to the
                  world, a reminder that we are all connected.
                </h2>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2  p-4 w-full shadow-md shadow-green-500  ">
              <a className="block relative h-48 rounded overflow-hidden">
                <picture>
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/ai12.jpg"
                  />
                </picture>
              </a>
              <div className="mt-4  ">
                <h3 className="text-gray-800 text-xs tracking-widest title-font mb-1">
                  Quote
                </h3>

                <h2 className="text-gray-700 title-font text-sm text-start font-medium">
                  Every tree planted is a promise of a greener future, a
                  healthier environment, and a more sustainable world for all.
                </h2>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2  p-4 w-full shadow-md shadow-green-500  ">
              <a className="block relative h-48 rounded overflow-hidden">
                <picture>
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/ai21.avif"
                  />
                </picture>
              </a>
              <div className="mt-4  ">
                <h3 className="text-gray-800 text-xs tracking-widest title-font mb-1">
                  Quote
                </h3>

                <h2 className="text-gray-700 title-font text-sm text-start font-medium">
                  The more trees we plant, the more we invest in the future, and
                  the more we ensure a legacy of beauty, life, and hope.
                </h2>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2  p-4 w-full shadow-md shadow-green-500  ">
              <a className="block relative h-48 rounded overflow-hidden">
                <picture>
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/ai20.jpg"
                  />
                </picture>
              </a>
              <div className="mt-4  ">
                <h3 className="text-gray-800 text-xs tracking-widest title-font mb-1">
                  Quote
                </h3>

                <h2 className="text-gray-700 title-font text-sm text-start font-medium">
                  A tree is a symbol of life, of growth, of strength, and of the
                  endless cycles of nature that sustain us all.
                </h2>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2  p-4 w-full shadow-md shadow-green-500  ">
              <a className="block relative h-48 rounded overflow-hidden">
                <picture>
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/ai5.jpg"
                  />
                </picture>
              </a>
              <div className="mt-4  ">
                <h3 className="text-gray-800 text-xs tracking-widest title-font mb-1">
                  Quote
                </h3>

                <h2 className="text-gray-700 title-font text-sm text-start font-medium">
                  The best time to plant a tree was 20 years ago. The second
                  best time is now.
                </h2>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2  p-4 w-full shadow-md shadow-green-500  ">
              <a className="block relative h-48 rounded overflow-hidden">
                <picture>
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/ai29.avif"
                  />
                </picture>
              </a>
              <div className="mt-4  ">
                <h3 className="text-gray-800 text-xs tracking-widest title-font mb-1">
                  Quote
                </h3>

                <h2 className="text-gray-700 title-font text-sm text-start font-medium">
                  The greatest gift you can give someone is a tree. Its a
                  lasting reminder that you care about them and the planet.
                </h2>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2  p-4 w-full shadow-md shadow-green-500  ">
              <a className="block relative h-48 rounded overflow-hidden">
                <picture>
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/plant6.avif"
                  />
                </picture>
              </a>
              <div className="mt-4  ">
                <h3 className="text-gray-800 text-xs tracking-widest title-font mb-1">
                  Quote
                </h3>

                <h2 className="text-gray-700 title-font text-sm text-start font-medium">
                  The best time to plant a tree is 20 years ago. The second best
                  time is today. Plant a tree for a better tomorrow
                </h2>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2  p-4 w-full shadow-md shadow-green-500  ">
              <a className="block relative h-48 rounded overflow-hidden">
                <picture>
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/ai30.avif"
                  />
                </picture>
              </a>
              <div className="mt-4  ">
                <h3 className="text-gray-800 text-xs tracking-widest title-font mb-1">
                  Quote
                </h3>

                <h2 className="text-gray-700 title-font text-sm text-start font-medium">
                  When we plant trees, we plant the seeds of peace and hope.
                </h2>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2  p-4 w-full shadow-md shadow-green-500  ">
              <a className="block relative h-48 rounded overflow-hidden">
                <picture>
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/plant7.avif"
                  />
                </picture>
              </a>
              <div className="mt-4  ">
                <h3 className="text-gray-800 text-xs tracking-widest title-font mb-1">
                  Quote
                </h3>

                <h2 className="text-gray-700 title-font text-sm text-start font-medium">
                  A single tree can be the start of a forest, a home for
                  wildlife, and a source of inspiration for generations to come.
                </h2>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2  p-4 w-full shadow-md shadow-green-500  ">
              <a className="block relative h-48 rounded overflow-hidden">
                <picture>
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/ai25.avif"
                  />
                </picture>
              </a>
              <div className="mt-4  ">
                <h3 className="text-gray-800 text-xs tracking-widest title-font mb-1">
                  Quote
                </h3>

                <h2 className="text-gray-700 title-font text-sm text-start font-medium">
                  Trees are the lungs of the earth, breathing life into the air
                  we breathe, and cleansing our world of pollution.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

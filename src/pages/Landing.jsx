import React from "react";
import UserLayout from "../layout/UserLayout";
import { Link } from "react-router";
import picture1Img from "../assets/picture1.jpg";
import picture2Img from "../assets/picture2.jpg";
import picture3Img from "../assets/picture3.jpg";
import picture4Img from "../assets/picture4.jpg";
// import picture5Img from "../assets/picture5.jpg";
import picture6Img from "../assets/picture6.jpg";
import picture7Img from "../assets/picture7.jpg";

const Landing = () => {
  return (
    <UserLayout>
      <section>
        <div
          id="hero"
          className="bg-black/80 relative h-full flex flex-col justify-center items-center"
        >
          <h1 className="relative text-center text-[5rem] font-semibold text-blue-50">
            THE JE STORE
          </h1>
          <br />
          <h3 className="text-[35px] mb-[150px]">
            Every Essential You Need, Right Here, All At Once
          </h3>
          <button>
            <Link
              to="sign-up"
              className="py-4 px-10 rounded-2xl animate-bounce bg-purple-600 text-white"
            >
              {" "}
              Get Started
            </Link>
          </button>
        </div>
        <div className="bg-gray-100 py-12">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Item 1 */}
            <div>
              <div className="mx-auto mb-4 w-[150px] h-[150px] bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl shadow-[0_0_15px_rgba(0,0,0,0.233)]">
                ⚡
              </div>
              <h3 className="font-semibold text-2xl mb-2">
                Get your order in minutes!
              </h3>
              <p className="text-base text-gray-700">
                We've strategically placed our stores across the city to make
                sure your deliveries are made fast, really fast.
              </p>
            </div>

            {/* Item 2 */}
            <div>
              <div className="mx-auto mb-4 w-[150px] h-[150px] bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl shadow-[0_0_15px_rgba(0,0,0,0.233)]">
                🔁
              </div>
              <h3 className="font-semibold text-2xl mb-2">
                What you see is what you get!
              </h3>
              <p className="text-base text-gray-700">
                Our unique automated system makes sure you receieve exactly what
                you ask for.
              </p>
            </div>

            {/* Item 3 */}
            <div>
              <div className="mx-auto mb-4 w-[150px] h-[150px] bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl shadow-[0_0_15px_rgba(0,0,0,0.233)]">
                🛍️
              </div>
              <h3 className="font-semibold text-2xl mb-2">
                Shop from thousands of items!
              </h3>
              <p className="text-base text-gray-700">
                From skincare to haircare essentials, and everything that makes
                living worth-wile, we’ve got it all.
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-center justify-center items-center text-3xl mt-[35px] mb-[35px]">
              Our Categories
            </h1>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-[25px] place-items-center">
            <div class="flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105">
              <img
                src={picture1Img}
                alt="Haircare"
                class="w-[250px] h-[130px] object-contain mb-3 rounded-[25px] shadow-[0_0_15px_rgba(0,0,0,0.233)]"
              />
              <span class="text-xl font-medium text-gray-800">Haircare</span>
            </div>

            <div class="flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105">
              <img
                src={picture2Img}
                alt="Skincare"
                class="w-[250px] h-[130px] object-contain mb-3 rounded-[25px] shadow-[0_0_15px_rgba(0,0,0,0.233)]"
              />
              <span class="text-xl font-medium text-gray-800">Skincare</span>
            </div>

            <div class="flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105">
              <img
                src={picture3Img}
                alt="Nailcare"
                class="w-[250px] h-[130px] object-contain mb-3 rounded-[25px] shadow-[0_0_15px_rgba(0,0,0,0.233)]"
              />
              <span class="text-xl font-medium text-gray-800">Nailcare</span>
            </div>

            <div class="flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105">
              <img
                src={picture4Img}
                alt="Fragrances"
                class="w-[250px] h-[130px] object-contain mb-3 rounded-[25px] shadow-[0_0_15px_rgba(0,0,0,0.233)]"
              />
              <span class="text-xl font-medium text-gray-800">Fragrances</span>
            </div>

            <div class="flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105">
              <img
                src={picture6Img}
                alt="Wellness"
                class="w-[250px] h-[130px] object-contain mb-3 rounded-[25px] shadow-[0_0_15px_rgba(0,0,0,0.233)]"
              />
              <span class="text-xl font-medium text-gray-800">Wellness</span>
            </div>

            <div class="flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105">
              <img
                src={picture7Img}
                alt="Makeup"
                class="w-[250px] h-[130px] object-contain mb-3 rounded-[25px] shadow-[0_0_15px_rgba(0,0,0,0.233)]"
              />
              <span class="text-xl font-medium text-gray-800">Makeup</span>
            </div>
          </div>
          <div>
            <h1 className="text-center justify-center items-center text-3xl mt-[35px] mb-[35px]">
              Some of the Brands in Store
            </h1>
          </div>
          <div>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
              <div class="w-28 h-28 flex items-center justify-center border border-gray-200 shadow-sm hover:shadow-md transition">
                <img
                  src="/images/henkel.png"
                  alt="Neutrogena"
                  class="max-w-[70%] max-h-[70%]"
                />
              </div>

              <div class="w-28 h-28 flex items-center justify-center border border-gray-200 shadow-sm hover:shadow-md transition">
                <img
                  src="/images/nestle.png"
                  alt="Ordinary"
                  class="max-w-[70%] max-h-[70%]"
                />
              </div>

              <div class="w-28 h-28 flex items-center justify-center border border-gray-200 shadow-sm hover:shadow-md transition">
                <img
                  src="/images/mars.png"
                  alt="Good Molecules"
                  class="max-w-[70%] max-h-[70%]"
                />
              </div>

              <div class="w-28 h-28 flex items-center justify-center border border-gray-200 shadow-sm hover:shadow-md transition">
                <img
                  src="/images/pg.png"
                  alt="Mac"
                  class="max-w-[70%] max-h-[70%]"
                />
              </div>

              <div class="w-28 h-28 flex items-center justify-center border border-gray-200 shadow-sm hover:shadow-md transition">
                <img
                  src="/images/cadbury.png"
                  alt="Nivea"
                  class="max-w-[70%] max-h-[70%]"
                />
              </div>

              <div class="w-28 h-28 flex items-center justify-center border border-gray-200 shadow-sm hover:shadow-md transition">
                <img
                  src="/images/loreal.png"
                  alt="e.l.f"
                  class="max-w-[70%] max-h-[70%]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </UserLayout>
  );
};

export default Landing;

import React from "react";
import UserLayout from "../layout/UserLayout";
import { Link } from "react-router";
import picture1Img from "../assets/picture1.jpg";
import picture2Img from "../assets/picture2.jpg";
import picture3Img from "../assets/picture3.jpg";
import picture4Img from "../assets/picture4.jpg";
import picture6Img from "../assets/picture6.jpg";
import picture7Img from "../assets/picture7.jpg";
// brands
import elf from "../assets/brands/e.l.f.png";
import Nivea from "../assets/brands/Nivea.png";
import MacCosmetics from "../assets/brands/Mac Cosmetics.png";
import GoodMolecules from "../assets/brands/Good Molecules.png";
import Ordinary from "../assets/brands/The Ordinary.png";
import Neutrogena from "../assets/brands/Neutrogena.png";
// video
import clinique from "../assets/videos/clinique.mp4";

const Landing = () => {
  return (
    <UserLayout>
      <section>
        {/* Hero Section */}
        <div className="relative w-full h-screen overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src={clinique} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-pink-950/30 z-10" />
          <div className="relative z-20 flex flex-col justify-center items-center h-full text-white text-center px-4">
            <h1 className="text-5xl md:text-7xl font-serif font-semibold tracking-tight">
              THE JE STORE
            </h1>
            <p className="mt-6 text-xl md:text-2xl max-w-xl font-light">
              Every Essential You Need, Right Here, All At Once
            </p>
            <Link
              to="sign-up"
              className="mt-10 px-8 py-3 rounded-full bg-pink-600 hover:bg-pink-700 text-white text-lg font-medium shadow-lg transition-all duration-500 ease-in-out"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-pink-50 py-16 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {[
              {
                icon: "⚡",
                title: "Get your order in minutes!",
                desc: "We've placed stores across the city to ensure lightning-fast deliveries.",
              },
              {
                icon: "🔁",
                title: "What you see is what you get!",
                desc: "Our system guarantees accurate, reliable deliveries every time.",
              },
              {
                icon: "🛍️",
                title: "Shop thousands of items!",
                desc: "Skincare, haircare, wellness, and everything in between — all in one place.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-pink-100"
              >
                <div className="text-4xl w-20 h-20 mx-auto flex items-center justify-center  text-white rounded-full mb-4 shadow-md">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <div className="bg-white py-16 px-4">
          <h2 className="text-center text-3xl font-semibold mb-10 font-serif text-pink-700">
            Our Categories
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 place-items-center">
            {[
              picture1Img,
              picture2Img,
              picture3Img,
              picture4Img,
              picture6Img,
              picture7Img,
            ].map((img, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <img
                  src={img}
                  alt="Category"
                  className="w-[200px] h-[120px] object-cover mb-3 rounded-xl shadow-md transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:brightness-110"
                />
                <span className="text-lg font-medium text-gray-800">
                  {
                    [
                      "Haircare",
                      "Skincare",
                      "Nailcare",
                      "Fragrances",
                      "Wellness",
                      "Makeup",
                    ][idx]
                  }
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Brands Section */}
        <div className="bg-pink-50 py-16 px-4">
          <h2 className="text-center text-3xl font-semibold mb-10 font-serif text-pink-700">
            Some of the Brands in Store
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
            {[
              Neutrogena,
              Ordinary,
              GoodMolecules,
              MacCosmetics,
              Nivea,
              elf,
            ].map((brand, idx) => (
              <div
                key={idx}
                className="w-24 h-24 flex items-center justify-center border border-pink-100 bg-white rounded-xl shadow transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-pink-100"
              >
                <img
                  src={brand}
                  alt="brand"
                  className="max-w-[70%] max-h-[70%]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </UserLayout>
  );
};

export default Landing;

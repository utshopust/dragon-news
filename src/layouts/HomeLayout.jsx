import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homeLayouts/LeftAside";
import RightAside from "../components/homeLayouts/RightAside";
import ScrollToTop from "../components/ScrollToTop";

const HomeLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header>
        <Header />

        <section className="w-11/12 mx-auto my-3">
          <LatestNews />
        </section>

        <nav className="w-11/12 mx-auto my-3">
          <Navbar />
        </nav>
      </header>

      {/* Main Content */}
      <main className="w-11/12 mx-auto my-5 grid grid-cols-12 gap-6 flex-1">
        {/* Left Sidebar */}
        <aside className="col-span-12 md:col-span-4 lg:col-span-3 mb-6 md:mb-0">
          <div className="sticky top-4 md:top-0">
            <LeftAside />
          </div>
        </aside>

        {/* Main Content */}
        <section className="col-span-12 md:col-span-8 lg:col-span-6 flex flex-col gap-6">
          <Outlet />
        </section>

        {/* Right Sidebar */}
        <aside className="col-span-12 lg:col-span-3 mt-6 lg:mt-0">
          <div className="sticky top-4 lg:top-0">
            <RightAside />
          </div>
        </aside>
      </main>

      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  );
};

export default HomeLayout;

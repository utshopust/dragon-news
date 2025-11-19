// import React from 'react';
// import { Outlet } from 'react-router';
// import Header from '../components/Header';
// import LatestNews from '../components/LatestNews';
// import Navbar from '../components/Navbar';
// import LeftAside from '../components/homeLayouts/LeftAside';
// import RightAside from '../components/homeLayouts/RightAside';

// const HomeLayout = () => {
//     return (
//         <div>
//             <header>
//                 <Header></Header>
//                 <section className='w-11/12 mx-auto my-3'>
//                     <LatestNews></LatestNews>
//                 </section>
//                 <nav className='w-11/12 mx-auto my-3'>
//                     <Navbar></Navbar>
//                 </nav>
//             </header>
//             <main className='w-11/12 mx-auto my-3  grid grid-cols-12 gap-5'>
//                 <aside className='col-span-3'>
//                     <LeftAside></LeftAside>
//                 </aside>
//                 <section className="main col-span-6 ">
//                     <Outlet></Outlet>
//                 </section>
//                 <aside className='col-span-3 '>
//                     <RightAside></RightAside>
//                 </aside>
//             </main>
//         </div>
//     );
// };

// export default HomeLayout;

import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homeLayouts/LeftAside";
import RightAside from "../components/homeLayouts/RightAside";

const HomeLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
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
      <main className="w-11/12 mx-auto my-5 grid grid-cols-12 gap-6">
        {/* Left Sidebar */}
        <aside className="col-span-12 md:col-span-4 lg:col-span-3 mb-4 md:mb-0">
          <LeftAside />
        </aside>

        {/* Main Content */}
        <section className="col-span-12 md:col-span-8 lg:col-span-6">
          <Outlet />
        </section>

        {/* Right Sidebar */}
        <aside className="col-span-12 lg:col-span-3 mt-4 lg:mt-0">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;

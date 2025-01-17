import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Rooms from "../components/Rooms";
import Describe from "../components/Describe";
import Backdrop from "../components/Backdrop";
import Contact from "../components/Contact";

function Home() {
  return (
    <div className=" w-full h-full bg-img">
      <div className="container max-w-screen-2xl mx-auto bg-gray-50 br-60 px-14 sm:p-4 md:p-4 ">
        <Header />
        <Backdrop />
        <Describe />
        <Rooms />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Home;

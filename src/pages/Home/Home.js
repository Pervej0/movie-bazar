import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import BannerContent from "../../components/BannerContent/BannerContent";
import MainContents from "../../components/MainContents/MainContents";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <div className="bg-bannerImage min-h-screen xs:min-h-screen width-100 bg-cover bg-center">
        <Navbar background="bg-transparent" textColor="text-white" />
        <BannerContent />
      </div>
      <SearchBar />
    </>
  );
}

export default Home;

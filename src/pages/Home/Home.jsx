// Importing required components
import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import RowList from "../../components/Rows/RowList/RowList";

// Functional component for the Home page
const Home = () => {
  return (
    <div>
      {/* Header section */}
      <Header />
      {/* Banner section */}
      <Banner />
      {/* Row list section for displaying categorized movies */}
      <RowList />
      {/* Footer section */}
      <Footer />
    </div>
  );
};

// Exporting Home component
export default Home;

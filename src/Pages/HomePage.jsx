import React from "react";
import HomeNavBar from "../Components/HomeNavBar";
import { Link } from "react-router-dom";
import { useRegisterContext } from "../ContextManager/RegisterContext";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  const { name } = useRegisterContext(); //NAME STATE IMPORTED FROM USECONTEXT STATE MANAGER
  return (
    <>
      {/* REACT HELMET IS USED FOR SEO TRACKING */}
      <Helmet>
        <title>Home - Jece Overseas Studies</title>
        <meta
          name="description"
          content="Welcome to Jece Overseas Studies, The biggest Overseas Study advisory agency, 
          with professional and best standard services. We are known for creating outstanding growth through innovations."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="home-general">
        <HomeNavBar />
        <div className="home-container">
          <div className="home-flex">
            <div className="details-cont">
              <h1>Hi, {name} 👋 </h1>
              <h3>Welcome To Jece Overseas Studies</h3>
              <p>
                {" "}
                The biggest Overseas Study advisory agency,<br></br> with
                professional and best standard services.<br></br>We are known
                for creating outstanding growth through innovations.
              </p>
              <Link to="/" className="repo-btn link">
                Get Started ↟
              </Link>
            </div>
            <div>
              <img
                src="https://jeceoverseasstudies.com/wp-content/uploads/2020/09/study-abroad-500x500-1.png"
                alt=""
                className="home-img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

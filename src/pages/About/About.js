import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">AmmuStore</span>{" "}
          is one of the world's leading ecommerce brands and is internationally
          recognized for celebrating the essence of classic Worldwide cool
          looking style.
        </h1>
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi expedita esse totam debitis a voluptatum, qui veniam impedit necessitatibus. Ullam illum officia sed facere nostrum similique quae. Numquam, eaque. Libero autem error impedit eum voluptatum voluptates dolores quos quibusdam reprehenderit tenetur soluta, eaque beatae fugiat ad veniam optio quod voluptate?
          
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;

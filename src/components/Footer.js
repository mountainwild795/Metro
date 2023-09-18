import React from "react";
import Logo from "../assets/img/logo.svg";
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full lg:relative">
      <div className="container max-sm:px-48 mx-auto flex flex-col lg:flex-row lg: gap-10">
        <div className="flex flex-col bg-primary_black rounded-lg px-6 lg:flex-1 lg:absolute lg:bottom-0 lg:right-0 lg:w-[300px] lg:h-[320px] lg:rounded-bl-none lg:rounded-br-none lg:rounded-tr-none">
          <div className="text-white py-4">Explore Site</div>
          <div className="flex text-primary gap-10">
            <ul>
              <li className="py-4">Home</li>
              <li className="py-4">Service</li>
              <li className="py-4">Tenants</li>
              <li className="py-4">Home</li>
            </ul>
            <ul>
              <li className="py-4">About Us</li>
              <li className="py-4">Contact</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 lg:w-2/3">
          <div className="mb-6">
            <img src={Logo} alt="logo" />
          </div>
          <div className="mb-6">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus qui voluptate magnam ad esse nisi quis quaerat nam delectus.</p>
          </div>
          <div className="flex flex-col items-start p-3 bg-primary_black w-2/3 max-lg:max-w-[200px] max-sm:min-w-[130px] rounded-lg mb-6 lg:flex-row lg:justify-around">
            <div className="bg-white text-primary my-2 mx-1 rounded-md py-2 px-1 flex">
              <AiFillFacebook />
              <span className="ml-2">Facebook</span>
            </div>
            <div className="bg-white text-primary my-2 mx-1 rounded-md py-2 px-1 flex">
              <AiFillInstagram />
              <span className="ml-2">Instagram</span>
            </div>
            <div className="bg-white text-primary my-2 mx-1 rounded-md py-2 px-1 flex">
              <AiFillLinkedin />
              <span className="ml-2">Linkedin</span>
            </div>
            <div className="bg-white text-primary my-2 mx-1 rounded-md py-2 px-1 flex">
              <AiFillTwitterSquare />
              <span className="ml-2">Twitter</span>
            </div>
            {/* <div className="bg-white text-primary my-2 mx-1 rounded-md ">icon LinedIn</div>
          <div className="bg-white text-primary my-2 mx-1 rounded-md ">icon Twitter</div> */}
          </div>
          <p className="text-xs mb-16">Copyright @ 2023. MetroProperty Managemetn NZ</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

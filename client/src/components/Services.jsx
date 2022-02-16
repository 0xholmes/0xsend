import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const Services = () => {
  const ServiceCard = ({ icon, title, subtitle, color }) => {
    return (
      <div className="flex justify-center white-glassmorphism p-2 md:p-7 md:m-2 mb-5">
        <div
          className={`rounded-lg w-20 md:w-10 h-10 flex justify-center items-center mt-2 ${color}`}
        >
          {icon}
        </div>
        <div className="ml-5 text-white">
          <h3 className="text-lg">{title}</h3>
          <p className="flex-1">{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex w-full justify-center items-center gradient-bg-services">
      <div className="flex flex-col md:flex-row justify-between items-center py-12 px-4 md:p-20">
        <div className="flex-1 md:mr-20 mb-10 md:mb-0">
          <h1 className="text-gradient text-3xl md:text-5xl py-2">
            Services that we
            <br />
            continue to improve
          </h1>
        </div>

        <div className="mx-2 md:mx-0">
          <ServiceCard
            icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
            title="Security gurantee"
            subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
            color="bg-[#2952E3]"
          />
          <ServiceCard
            icon={<BiSearchAlt fontSize={21} className="text-white" />}
            title="Best exchange rates"
            subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
            color="bg-[#8945F8]"
          />
          <ServiceCard
            icon={<RiHeart2Fill fontSize={21} className="text-white" />}
            title="Fastest transactions"
            subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
            color="bg-[#F84550]"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;

import React, { useContext } from "react";
import { SiTwitter, SiTelegram, SiDiscord, SiGithub } from "react-icons/si";

import { TransactionContext } from "../context/TransactionContext";

const FooterItem = ({ item }) => {
  return (
    <a href="#" className="text-gray-300 m-2 mx-4 hover:text-white">
      {item}
    </a>
  );
};

const iconStyle = "m-2 cursor-pointer md:mx-4 hover:text-white";

const Footer = () => {
  const { MenuItems } = useContext(TransactionContext);

  return (
    <div className="w-full flex justify-between items-end gradient-bg-footer text-xs md:text-base p-2 md:p-7">
      <div className="flex flex-col md:flex-row">
        {MenuItems.map((item, i) => (
          <FooterItem key={item + i} item={item} />
        ))}
      </div>
      <div className="flex m-2">
        <SiTwitter fontSize={21} color="#6b7280" className={`${iconStyle}`} />
        <SiTelegram fontSize={21} color="#6b7280" className={`${iconStyle}`} />
        <SiDiscord fontSize={21} color="#6b7280" className={`${iconStyle}`} />
        <SiGithub fontSize={21} color="#6b7280" className={`${iconStyle}`} />
      </div>
    </div>
  );
};

export default Footer;

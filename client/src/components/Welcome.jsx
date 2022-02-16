import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import Loader from "./Loader";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";

const gridItemStyle =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, inputName, type, value, handleChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      step="0.0001"
      value={value}
      onChange={e => handleChange(e, inputName)}
      className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
  );
};

const Welcome = () => {
  const {
    connectWallet,
    currentAccount,
    formData,
    sendTransaction,
    handleChange,
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = e => {
    const { addressTo, amount, keyword, message } = formData;

    if (!addressTo || !amount || !keyword || !message) {
      console.log("form data is missing");
      return;
    }

    e.preventDefault();

    sendTransaction();
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="md:px-20 w-4/5 py-12 px-4 flex flex-col md:flex-row items-start justify-between">
        {/* 1st section */}
        <div className="flex flex-1 justify-start items-start flex-col md:mr-16">
          <h1 className="text-white text-3xl sm:text-5xl text-gradient py-1">
            Send Crypto <br /> across the world
          </h1>
          <p className="text-white mt-5 text-left text-gradient font-base">
            Explore the crypto world. Buy and sell cryptocurrencies easily on
            0xsend.
          </p>
          {!currentAccount && (
            <button
              type="button"
              className="my-5 text-white font-semibold bg-[#5973fe] w-full px-7 py-2 rounded-lg cursor-pointer hover:bg-[#445ff5]"
              onClick={connectWallet}
            >
              Connect
            </button>
          )}

          <div className="w-full grid sm:grid-cols-3 grid-cols-2 mt-10">
            <div className={`rounded-tl-2xl ${gridItemStyle}`}>Reliability</div>
            <div className={`${gridItemStyle}`}>Security</div>
            <div className={`${gridItemStyle}`}>Ethereum</div>
            <div className={`${gridItemStyle}`}>Web 3.0</div>
            <div className={`${gridItemStyle}`}>Low fees</div>
            <div className={`rounded-br-2xl ${gridItemStyle}`}>Blockchain</div>
          </div>
        </div>
        {/* end of the 1st section */}

        {/* 2nd section */}
        <div className="text-white w-full flex flex-col flex-1 items-center justify-start md:mt-0 mt-10">
          {/* Card */}
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full mb-5 eth-card .white-glassmorphism">
            <div className="flex flex-col justify-between w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="flex flex-col justify-center items-center sm:w-96 w-full h-full p-5 mt-2 blue-glassmorphism">
            <Input
              type="text"
              placeholder="Address To"
              inputName="addressTo"
              handleChange={handleChange}
            />
            <Input
              type="number"
              placeholder="Amount (ETH)"
              inputName="amount"
              handleChange={handleChange}
            />
            <Input
              type="text"
              placeholder="Keyword (GIF)"
              inputName="keyword"
              handleChange={handleChange}
            />
            <Input
              type="text"
              placeholder="Enter Message"
              inputName="message"
              handleChange={handleChange}
            />
            <div className="border-t-2 border-gray-700 w-full my-2"></div>
            {isLoading ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full p-2 mt-2 border-[1px] border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
              >
                Send Now
              </button>
            )}
          </div>
        </div>
        {/* end of the 2nd section */}
      </div>
    </div>
  );
};

export default Welcome;

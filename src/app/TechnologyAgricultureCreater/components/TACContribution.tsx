import Image from "next/image";
import React from "react";

const TACContribution = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row gap-2">
          <div className="flex text-gray-800 text-5xl font-semibold font-['Inter'] leading-[69.19px]">
            How TAC Contributes to
          </div>
          <div className="flex text-green-500 text-5xl font-semibold font-['Inter'] leading-[69.19px]">
            Digital Maharashtra 2027 ?
          </div>
        </div>

        <div className="flex flex-row">
          <div className="flex"></div>
          <div className="flex flex-col">
            <div className="flex">
              <Image
                src="/TACContributionImage.png"
                width={413}
                height={413}
                className="bg-cover"
                alt=""
              />
            </div>
            <div className="flex text-black text-2xl font-normal font-['Caladea']">
              From Local Fields to Global Deals
            </div>
            <div className="flex">
              <Image
                src="/TACLogo.png"
                width={300}
                height={224}
                className="bg-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TACContribution;

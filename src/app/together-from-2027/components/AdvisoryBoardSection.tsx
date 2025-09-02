import React from "react";
import Image from "next/image";

const AdvisoryBoardSection = () => {
  interface Member {
    image: string;
    name: string;
    title: string;
  }

  const advisoryBoardMembers: Member[] = [
    { image: "/dammy.png", name: "Member 1", title: "Title 1" },
    { image: "/dammy.png", name: "Member 2", title: "Title 2" },
    { image: "/dammy.png", name: "Member 3", title: "Title 3" },
    { image: "/dammy.png", name: "Member 4", title: "Title 4" },
  ];

  const supporters: Member[] = [
    { image: "/dammy.png", name: "Supporter 1", title: "Supporter Title" },
    { image: "/dammy.png", name: "Supporter 2", title: "Supporter Title" },
    { image: "/dammy.png", name: "Supporter 3", title: "Supporter Title" },
    { image: "/dammy.png", name: "Supporter 4", title: "Supporter Title" },
    { image: "/dammy.png", name: "Supporter 5", title: "Supporter Title" },
    { image: "/dammy.png", name: "Supporter 6", title: "Supporter Title" },
    { image: "/dammy.png", name: "Supporter 7", title: "Supporter Title" },
    { image: "/dammy.png", name: "Supporter 8", title: "Supporter Title" },
    { image: "/dammy.png", name: "Supporter 9", title: "Supporter Title" },
  ];

  const renderMembers = (members: Member[]) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center items-center">
      {members.map((member, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center text-center"
        >
          <Image
            src={member.image}
            alt={member.name}
            width={150}
            height={150}
            style={{ objectFit: "cover", borderRadius: "8px" }}
          />
          <p className="mt-2 text-md font-semibold">{member.name}</p>
        </div>
      ))}
    </div>
  );

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Honorable Advisory Board */}
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Honorable Advisory Board
        </h2>
        <div className="flex flex-col items-center space-y-8">
          {renderMembers(advisoryBoardMembers)}
        </div>

        {/* Our Supporters */}
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12 mt-16">
          Our Supporters & Our Collaborators
        </h2>
        <div className="flex flex-col items-center space-y-8">
          {renderMembers(supporters)}
        </div>
      </div>
    </section>
  );
};

export default AdvisoryBoardSection;

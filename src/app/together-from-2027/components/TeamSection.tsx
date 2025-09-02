import React from "react";
import Image from "next/image";

interface Member {
  image: string;
  name: string;
  title: string;
}

const boardsOfDirector: Member[] = [
  { image: "/sahil.png", name: "Sahil Vaidya", title: "Founder & CEO of TWC org." },
  { image: "/ramchandra.png", name: "Ramchandra Vaidya", title: "Director & CFO" },
  { image: "/dammy.png", name: "Bharat Wanjari", title: "Director" },
  { image: "/dammy.png", name: "Sharda Vaidya", title: "Managing Director & CMO" },
];

const executiveTeam: Member[] = [
  { image: "/dammy.png", name: "Sahil Vaidya", title: "" },
  { image: "/dammy.png", name: "Rajat", title: "" },
  { image: "/dammy.png", name: "Harsh Sha.", title: "" },
  { image: "/dammy.png", name: "Harsh", title: "" },
  { image: "/dammy.png", name: "Pranjal", title: "" },
  { image: "/dammy.png", name: "Chanakya", title: "" },
  { image: "/dammy.png", name: "Utkarsh", title: "" },
];

const leadsAndSeniorVolunteers: Member[] = [
  { image: "/dammy.png", name: "Harish Anchalwar", title: "" },
  { image: "/dammy.png", name: "Faizan Sheikh", title: "" },
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
        {member.title && <p className="text-sm text-gray-600">{member.title}</p>}
      </div>
    ))}
  </div>
);

const TeamSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Boards of Director */}
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Boards of Director
        </h2>
        <div className="flex flex-col items-center space-y-8">
          {renderMembers(boardsOfDirector)}
        </div>

        {/* Executive Team */}
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12 mt-16">
          Executive Team
        </h2>
        <div className="flex flex-col items-center space-y-8">
          {renderMembers(executiveTeam)}
        </div>

        {/* Leads and Senior Volunteers */}
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12 mt-16">
          Leads and Senior Volunteers
        </h2>
        <div className="flex flex-col items-center space-y-8">
          {renderMembers(leadsAndSeniorVolunteers)}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
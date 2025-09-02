import Image from "next/image";

interface Member {
  image: string;
  name: string;
  title: string;
}

const boardsOfDirector: Member[] = [
  {
    image: "/Sharda.png",
    name: "Sharda Vaidya",
    title: "Managing Director & CMO",
  },

  {
    image: "/Ramchandra1.png",
    name: "Ramchandra Vaidya",
    title: "Director & CFO",
  },
  { image: "/Bharat.png", name: "Bharat Wanjari", title: "Director" },
  {
    image: "/Sahil1.png",
    name: "Sahil Vaidya",
    title: "Founder & CEO of TWC org.",
  },
];

const executiveTeam: Member[] = [
  { image: "/Sahil1.png", name: "Sahil Vaidya", title: "" },
  { image: "/Rajat.png", name: "Rajat", title: "" },
  { image: "/Harsh.png", name: "Harsh Sha.", title: "" },
  { image: "/Harsh1.png", name: "Harsh", title: "" },
  { image: "/Pranjal.png", name: "Pranjal", title: "" },
  { image: "/Chanakya.png", name: "Chanakya", title: "" },
  { image: "/Utkarsh.png", name: "Utkarsh", title: "" },
];

const leadsAndSeniorVolunteers: Member[] = [
  { image: "/Harish.png", name: "Harish Anchalwar", title: "" },
  { image: "/Faizan.png", name: "Faizan Sheikh", title: "" },
];

const renderMembers = (members: Member[], widthClass: string) => (
  <div className="flex flex-wrap justify-center gap-10 mx-auto">
    {members.map((member, index) => (
      <div
        key={index}
        className={`flex flex-col items-center justify-center text-center`}
      >
        <div
          className={`${widthClass} bg-[#D6E8F6] rounded-lg overflow-hidden flex items-center justify-center`}
        >
          <Image
            src={member.image}
            alt={member.name}
            width={150}
            height={150}
            className="object-contain"
          />
        </div>
        <p className="mt-2 text-md font-semibold">{member.name}</p>
        {member.title && (
          <p className="text-sm font-semibold text-gray-600">{member.title}</p>
        )}
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
        <div className="flex flex-col items-center justify-center space-y-8">
          {renderMembers(boardsOfDirector, "w-60 h-32")}
        </div>

        {/* Executive Team */}
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12 mt-16">
          Executive Team
        </h2>
        <div className="flex flex-col items-center justify-center space-y-8">
          {renderMembers(executiveTeam, "w-60 h-32")}
        </div>

        {/* Leads and Senior Volunteers */}
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12 mt-16">
          Leads and Senior Volunteers
        </h2>
        <div className="flex flex-col items-center justify-center space-y-8">
          {renderMembers(leadsAndSeniorVolunteers, "w-60 h-32")}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

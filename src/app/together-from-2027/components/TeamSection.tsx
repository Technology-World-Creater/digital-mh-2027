import Image from "next/image";

interface Member {
  image: string;
  name: string;
  title: string;
  class?: string;
  size?: string;
}

const boardsOfDirector: Member[] = [
  {
    image: "/Sharda.png",
    name: "Sharda Vaidya",
    title: "Managing Director & CMO",
    class: "pt-0",
  },

  {
    image: "/Ramchandra1.png",
    name: "Ramchandra Vaidya",
    title: "Director & CFO",
    class: "pt-20 pl-4",
  },
  {
    image: "/Bharat.png",
    name: "Bharat Wanjari",
    title: "Director",
    class: "pt-0 pl-2",
  },
  {
    image: "/Sahil1.png",
    name: "Sahil Vaidya",
    title: "Founder & CEO of TWC org.",
    class: "pt-0",
  },
];

const executiveTeam: Member[] = [
  { image: "/Sahil1.png", name: "Sahil Vaidya", title: "", class: "pt-10" },
  { image: "/Rajat.png", name: "Rajat", title: "", class: "pt-20" },
  { image: "/Harsh.png", name: "Harsh Sha.", title: "", class: "pt-20" },
  { image: "/Harsh1.png", name: "Harsh", title: "", class: "pt-16" },
  { image: "/Pranjal.png", name: "Pranjal", title: "", class: "pt-10" },
  { image: "/Chanakya.png", name: "Chanakya", title: "", class: "pb-3" },
  { image: "/Utkarsh.png", name: "Utkarsh", title: "", class: "pt-10" },
];

const leadsAndSeniorVolunteers: Member[] = [
  { image: "/Harish.png", name: "Harish Anchalwar", title: "", class: "pt-10" },
  {
    image: "/Faizan.png",
    name: "Faizan Sheikh",
    title: "",
    size: "size-[22em] ml-8 object-cover",
  },
];

const renderMembers = (members: Member[], widthClass: string) => (
  <div className="flex flex-wrap justify-center gap-10 mx-auto">
    {members.map((member, index) => (
      <div
        key={index}
        className={`flex flex-col items-center justify-center text-center`}
      >
        <div
          className={`${widthClass} ${member.class} bg-[#D6E8F6] rounded-lg overflow-hidden flex items-center justify-center`}
        >
          <Image
            src={member.image}
            alt={member.name}
            width={150}
            height={150}
            className={`object-top ${member.size}`}
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
          {renderMembers(boardsOfDirector, "w-40 h-48 pt-10")}
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

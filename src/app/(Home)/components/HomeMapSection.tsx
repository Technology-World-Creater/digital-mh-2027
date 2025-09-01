import Image from "next/image";
import { MapPin } from "lucide-react";

const HomeMapSection = () => {
  return (
    <section className="bg-[#FDF5E5] py-16">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-[#03CF65] mb-12">
          Where Digital Maharashtra 2027 is Taking Shape
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h3 className="text-2xl md:text-4xl text-[#7D7DA8] font-bold mb-4">
              Bringing Digital Bharat to These Cities
            </h3>
            <p className="text-gray-600 mb-8 text-lg font-semibold">
              Mission Digital Maharashtra 2027 will be hosted offline in 36+
              Districts
            </p>

            <div className="flex flex-col gap-8">
              <div>
                <h4 className="font-bold text-gray-700 mb-2">
                  Nagpur Division
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white flex gap-1 items-center text-gray-700 px-3 py-1 rounded-lg shadow-2xl text-sm">
                    <MapPin size={15} color="#03CF65" />
                    Nagpur
                  </span>
                  <span className="bg-white flex gap-1 items-center text-gray-700 px-3 py-1 rounded-lg shadow-2xl text-sm">
                    <MapPin size={15} color="#03CF65" /> Bhandara
                  </span>
                  <span className="bg-white flex gap-1 items-center text-gray-700 px-3 py-1 rounded-lg shadow-2xl text-sm">
                    <MapPin size={15} color="#03CF65" /> Chandrapur
                  </span>
                  <span className="bg-white flex gap-1 items-center text-gray-700 px-3 py-1 rounded-lg shadow-2xl text-sm">
                    <MapPin size={15} color="#03CF65" /> Wardha
                  </span>
                  <span className="bg-white flex gap-1 items-center text-gray-700 px-3 py-1 rounded-lg shadow-2xl text-sm">
                    <MapPin size={15} color="#03CF65" /> Gondia
                  </span>
                  <span className="bg-white flex gap-1 items-center text-gray-700 px-3 py-1 rounded-lg shadow-2xl text-sm">
                    <MapPin size={15} color="#03CF65" /> Gadchiroli
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-700 mb-2">
                  Amravati Division
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white flex gap-1 items-center text-gray-700 px-3 py-1 rounded-lg shadow-2xl text-sm">
                    <MapPin size={15} color="#03CF65" /> Amravati
                  </span>
                  <span className="bg-white flex gap-1 items-center text-gray-700 px-3 py-1 rounded-lg shadow-2xl text-sm">
                    <MapPin size={15} color="#03CF65" /> Akola
                  </span>
                  <span className="bg-white flex gap-1 items-center text-gray-700 px-3 py-1 rounded-lg shadow-2xl text-sm">
                    <MapPin size={15} color="#03CF65" /> Buldana
                  </span>
                  <span className="bg-white flex gap-1 items-center text-gray-700 px-3 py-1 rounded-lg shadow-2xl text-sm">
                    <MapPin size={15} color="#03CF65" /> Washim
                  </span>
                  <span className="bg-white flex gap-1 items-center text-gray-700 px-3 py-1 rounded-lg shadow-2xl text-sm">
                    <MapPin size={15} color="#03CF65" /> Yavatmal
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-700 mb-2">
                  Chhatrapati Sambhajinagar Division
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white flex gap-1 items-center text-gray-700 px-3 py-1 rounded-lg shadow-2xl text-sm">
                    <MapPin size={15} color="#03CF65" /> Beed
                  </span>
                  <span className="bg-white flex gap-1 items-center text-gray-700 px-3 py-1 rounded-lg shadow-2xl text-sm">
                    <MapPin size={15} color="#03CF65" /> Hingoli
                  </span>
                  <span className="bg-white flex gap-1 items-center text-gray-700 px-3 py-1 rounded-lg shadow-2xl text-sm">
                    <MapPin size={15} color="#03CF65" /> Jalna
                  </span>
                  <span className="bg-white flex gap-1 items-center text-gray-700 px-3 py-1 rounded-lg shadow-2xl text-sm">
                    <MapPin size={15} color="#03CF65" /> Nanded
                  </span>
                  <span className="bg-white flex gap-1 items-center text-gray-700 px-3 py-1 rounded-lg shadow-2xl text-sm">
                    <MapPin size={15} color="#03CF65" /> Parbhani
                  </span>
                  <span className="bg-white flex gap-1 items-center text-gray-700 px-3 py-1 rounded-lg shadow-2xl text-sm">
                    <MapPin size={15} color="#03CF65" /> Chhatrapati
                    Sambhajinagar
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-700 mb-2">Pune Division</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white flex gap-1 items-center text-gray-700 px-3 py-1 rounded-lg shadow-2xl text-sm">
                    <MapPin size={15} color="#03CF65" /> Pune
                  </span>
                  <span className="bg-white flex gap-1 items-center text-gray-700 px-3 py-1 rounded-lg shadow-2xl text-sm">
                    <MapPin size={15} color="#03CF65" /> Satara
                  </span>
                  <span className="bg-white flex gap-1 items-center text-gray-700 px-3 py-1 rounded-lg shadow-2xl text-sm">
                    <MapPin size={15} color="#03CF65" /> Sangli
                  </span>
                  <span className="bg-white flex gap-1 items-center text-gray-700 px-3 py-1 rounded-lg shadow-2xl text-sm">
                    <MapPin size={15} color="#03CF65" /> Solapur
                  </span>
                  <span className="bg-white flex gap-1 items-center text-gray-700 px-3 py-1 rounded-lg shadow-2xl text-sm">
                    <MapPin size={15} color="#03CF65" /> Kolhapur
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-700 mb-2">
                  Nashik Division
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white flex gap-1 items-center text-gray-700 px-3 py-1 rounded-lg shadow-2xl text-sm">
                    <MapPin size={15} color="#03CF65" /> Ahmednagar
                  </span>
                  <span className="bg-white flex gap-1 items-center text-gray-700 px-3 py-1 rounded-lg shadow-2xl text-sm">
                    <MapPin size={15} color="#03CF65" /> Dhule
                  </span>
                  <span className="bg-white flex gap-1 items-center text-gray-700 px-3 py-1 rounded-lg shadow-2xl text-sm">
                    <MapPin size={15} color="#03CF65" /> Jalgaon
                  </span>
                  <span className="bg-white flex gap-1 items-center text-gray-700 px-3 py-1 rounded-lg shadow-2xl text-sm">
                    <MapPin size={15} color="#03CF65" /> Nandurbar
                  </span>
                  <span className="bg-white flex gap-1 items-center text-gray-700 px-3 py-1 rounded-lg shadow-2xl text-sm">
                    <MapPin size={15} color="#03CF65" /> Nashik
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-700 mb-2">
                  Konkan Division
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white flex gap-1 items-center text-gray-700 px-3 py-1 rounded-lg shadow-2xl text-sm">
                    <MapPin size={15} color="#03CF65" /> Mumbai City
                  </span>
                  <span className="bg-white flex gap-1 items-center text-gray-700 px-3 py-1 rounded-lg shadow-2xl text-sm">
                    <MapPin size={15} color="#03CF65" /> Mumbai Suburban
                  </span>
                  <span className="bg-white flex gap-1 items-center text-gray-700 px-3 py-1 rounded-lg shadow-2xl text-sm">
                    <MapPin size={15} color="#03CF65" /> Raigad
                  </span>
                  <span className="bg-white flex gap-1 items-center text-gray-700 px-3 py-1 rounded-lg shadow-2xl text-sm">
                    <MapPin size={15} color="#03CF65" /> Ratnagiri
                  </span>
                  <span className="bg-white flex gap-1 items-center text-gray-700 px-3 py-1 rounded-lg shadow-2xl text-sm">
                    <MapPin size={15} color="#03CF65" /> Sindhudurg
                  </span>
                  <span className="bg-white flex gap-1 items-center text-gray-700 px-3 py-1 rounded-lg shadow-2xl text-sm">
                    <MapPin size={15} color="#03CF65" /> Palghar
                  </span>
                  <span className="bg-white flex gap-1 items-center text-gray-700 px-3 py-1 rounded-lg shadow-2xl text-sm">
                    <MapPin size={15} color="#03CF65" /> Thane
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <Image
              src="/Map.png"
              alt="Maharashtra Map"
              width={800}
              height={800}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMapSection;

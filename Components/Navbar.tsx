import Image from "next/image";
import inovative from "@/public/inovative.jpg";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center p-3">
      <div className="flex gap-2 items-center">
        <Image
          src={inovative}
          alt="Logo"
          width={35}
          height={35}
          className="rounded-full"
        />
        <h1 className="font-semibold">GAIA CLUB</h1>
      </div>

      <h1 className="bg-black text-orange-500 rounded-full p-3 font-semibold">
        Sign up for GAIA club today !
      </h1>
    </div>
  );
};

export default Navbar;

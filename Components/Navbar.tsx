import Image from "next/image";
import inovative from "@/public/inovative.jpg";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center p-5">
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

      <Link href='/studio' className="bg-black text-orange-500 rounded-full p-3 font-semibold">
        Sign up for GAIA club today !
      </Link>
    </div>
  );
};

export default Navbar;

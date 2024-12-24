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
        <Link href='/' className="font-semibold">Edenway Foundation</Link>
      </div>

      <Link href='/studio' className="bg-black text-orange-400 rounded-full p-3 font-semibold">
       create a post !
      </Link>
    </div>
  );
};

export default Navbar;

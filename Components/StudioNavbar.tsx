import { RiArrowGoBackLine } from "react-icons/ri";
import Link from "next/link";


const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className="w-full flex justify-between items-center p-5">
        <div className="flex gap-2 items-center">
          <Link href='/' className="text-3xl font-semibold text-orange-500">
            <RiArrowGoBackLine />
          </Link>
        <h1 className="font-semibold">Go to Website</h1>
        </div>
        <h1 className="font-semibold ">Edenway Foundation</h1>
      </div>
      {props.renderDefault(props)}
    </div>
  );
};

export default StudioNavbar;

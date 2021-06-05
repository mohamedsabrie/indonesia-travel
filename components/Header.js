import Image from "next/image";
import HeaderLink from "./HeaderLink";
import { SearchIcon, ChevronDownIcon } from '@heroicons/react/outline'
function Header() {
  return (
    <div className="fixed top-0 z-50 flex items-center justify-between px-8 lg:px-32 2xl:px-96 text-white w-screen h-20 bg-black opacity-50">
      <Image
        src="https://www.indonesia.travel/content/dam/indtravelrevamp/en/logo.png"
        height={50}
        width={100}
      />
      <div className='flex items-center space-x-5 lg:space-x-10'>
        <HeaderLink title="What to See" Icon={ChevronDownIcon} />
        <HeaderLink title="What to Do" Icon={ChevronDownIcon}  />
        <HeaderLink title="Plan Your Trip" Icon={ChevronDownIcon}  />
        <HeaderLink title="Go Explore" />
        <HeaderLink title="Essentials" />
        <SearchIcon className="h-6" />
      </div>
    </div>
  );
}

export default Header;

import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

import Image from "next/image";
import HeaderItems from "./HeaderItems";
//

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItems title="Home" Icon={HomeIcon} />
        <HeaderItems title="Home" Icon={LightningBoltIcon} />
        <HeaderItems title="Home" Icon={BadgeCheckIcon} />
        <HeaderItems title="Home" Icon={CollectionIcon} />
        <HeaderItems title="Home" Icon={SearchIcon} />
        <HeaderItems title="Home" Icon={UserIcon} />
      </div>

      <Image
        className="opject-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;

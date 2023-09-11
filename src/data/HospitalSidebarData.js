import {
  MdOutlineDashboard,
  MdOutlineFolderShared,
  MdLogout,
  MdOutlineSettings,
} from "react-icons/md";

import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { GiDeathStar } from "react-icons/gi";

export const SidebarData = [
  {
    title: "birth",
    path: "birth",
    icon: <LiaBirthdayCakeSolid />,
  },
  {
    title: "death",
    path: "death",
    icon: <GiDeathStar />,
  },
  {
    title: "Files & Folders",
    path: "files",
    icon: <MdOutlineFolderShared />,
  },
  {
    title: "settings",
    path: "settings",
    icon: <MdOutlineSettings />,
  },
  {
    title: "logout",
    path: "logout",
    icon: <MdLogout />,
  },
];

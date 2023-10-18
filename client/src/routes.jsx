import {
  BellIcon,
} from "@heroicons/react/24/solid";
import { Deneme } from "@/layouts/deneme";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <BellIcon {...icon} />,
        name: "deneme",
        path: "/deneme",
        element: <Deneme />,
      },
    ],
  },
];

export default routes;

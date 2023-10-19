import {
  BellIcon,
} from "@heroicons/react/24/solid";
import { Deneme } from "@/pages/deneme";


const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "",
    pages: [
      {
        icon: <BellIcon {...icon} />,
        name: "deneme",
        path: "/deneme",
        element: <Deneme />,
      },
    ]
  },

];

export default routes;

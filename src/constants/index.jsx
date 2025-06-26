import { FaPlusSquare } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";

const K = {
  NAVLINKS: [
    {
      icon: <FaTachometerAlt />,
      text: "Overview",
      path: "/dashboard",
    },
    {
      icon: <FaListUl />,
      text: "All Adverts",
      path: "/dashboard/adverts",
    },
    {
      icon: <FaPlusSquare />,
      text: "Create Advert",
      path: "/dashboard/create-ad",
    },
    //  {
    //     icon: <FaHome/>,
    //     text: "viewads",
    //     path: "/dashboard/view-ad",
    // },
  ],
};
export default K;

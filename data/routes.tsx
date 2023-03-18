import {
  DashboardIcon,
  AssetsIcon,
  CalendarIcon,
  BookingIcon,
  SellingIcon,
  BuyingIcon,
  MessagesIcon,
  ServicesIcon,
  SettingsIcon,
  LogoutIcon
} from "./icons";

// create a type for the route object
interface Route {
  path: string;
  name: string;
  icon?: any;
}

// create a type for the routes array
type Routes = Array<Route>;

// create the routes array

export const routes: Routes = [
  {
    path: "/",
    name: "dashboard",
    // icon : DashboardIcon
    icon: <DashboardIcon />,
  },
  {
    path: "/about",
    name: "assets",
    icon: <AssetsIcon />,
  },
  {
    path: "/contact",
    name: "sell cars",
    icon: <SellingIcon />,
  },
  {
    path: "/contact",

    name: "buy cars",
    icon: <BuyingIcon />,
  },
  {
    path: "/contact",

    name: "services",
    icon: <ServicesIcon />,
  },
  {
    path: "/contact",
    name: "calendar",
    icon: <CalendarIcon />,
  },
  {
    path: "/contact",
    name: "Messages",
    icon: <MessagesIcon />,
  },

  {
    path: "/contact",
    name: "settings",
    icon: <SettingsIcon />,
  },

  {
    path: "/contact",
    name: "logout",
    icon: <LogoutIcon />,
  },

  
];

// export the routes array

// create a type for the route object
interface Route {
  path: string;
  name: string;
}

// create a type for the routes array
type Routes = Array<Route>;

// create the routes array

export const routes: Routes = [
  {
    path: "/",
    name: "dashboard",
  },
  {
    path: "/about",
    name: "assets",
  },
  {
    path: "/contact",
    name: "sell cars",
  },
  {
    path: "/contact",

    name: "buy cars",
  },
  {
    path: "/contact",

    name: "services",
  },
  {
    path: "/contact",
    name: "calendar",
  },
  {
    path: "/contact",
    name: "Messages",
  },

  {
    path: "/contact",
    name: "settings",
  },

  {
    path: "/contact",
    name: "logout",
  },
];

// export the routes array

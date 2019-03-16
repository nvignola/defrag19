import Dashboard from "views/Dashboard/Dashboard";
import Typography from "views/Typography/Typography";
import Clients from "views/Client/Clients";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  {
    path: "/clients",
    name: "Clients",
    icon: "pe-7s-user",
    component: Clients,
  },
  {
    path: "/glossary",
    name: "Glossary",
    icon: "pe-7s-news-paper",
    component: Typography
  },
  { redirect: true, path: "/", to: "/dashboard", name: "Dashboard" }
];

export default dashboardRoutes;

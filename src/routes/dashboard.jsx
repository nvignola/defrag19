import Dashboard from "views/Dashboard/Dashboard";
import Clients from "views/Client/Clients";
import Glossary from "views/Glossary";

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
    component: Glossary
  },
  { redirect: true, path: "/", to: "/dashboard", name: "Dashboard" }
];

export default dashboardRoutes;

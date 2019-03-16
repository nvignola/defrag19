import Dashboard from "views/Dashboard/Dashboard";
import UserProfile from "views/UserProfile/UserProfile";
import TableList from "views/TableList/TableList";
import Typography from "views/Typography/Typography";
import Clients from "views/Client/Clients";
import Documents from "views/Client/Documents";
import Document from "views/Client/Document";

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
    component: Clients
  },
  {
    path: "/glossary",
    name: "Glossary",
    icon: "pe-7s-news-paper",
    component: Typography
  },
  {
    path: "/clientDetails",
    name: "Client Details",
    icon: "pe-7s-user",
    component: UserProfile
  },
  {
    path: "/documents",
    name: "Documents",
    icon: "pe-7s-user",
    component: Documents
  },
  {
    path: "/documentDetails",
    name: "Document Details",
    icon: "pe-7s-user",
    component: Document
  },
  {
    path: "/statement",
    name: "Statement",
    icon: "pe-7s-note2",
    component: TableList
  },
  {
    path: "/prediction",
    name: "Prediction",
    icon: "pe-7s-note2",
    component: TableList // graphs
  },
  { redirect: true, path: "/", to: "/dashboard", name: "Dashboard" }
];

export default dashboardRoutes;

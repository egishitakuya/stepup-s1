import { Page1 } from "../Page1";
import { Page1Da } from "../Page1Da";
import { Page1Db } from "../Page1Db";

export const page1Routes = [
  {
    path: "/",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/da",
    exact: false,
    children: <Page1Da />
  },
  {
    path: "/db",
    exact: false,
    children: <Page1Db />
  }
];

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ButtonPage from "./Pages/ButtonPage.jsx";
import TypographyPage from "./Pages/TypographyPage.jsx";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import TextFieldPage from "./Pages/TextFieldPage.jsx";
import OthersFieldPage from "./Pages/OthersFieldPage.jsx";
import RatingPage from "./Pages/RatingPage.jsx";
import AutoCompletePage from "./Pages/AutoCompletePage.jsx";
import LayoutPage from "./Pages/LayoutPage.jsx";
import CardsPage from "./Pages/CardsPage.jsx";
import AccordionPage from "./Pages/AccordionPage.jsx";
import ImageListPage from "./Pages/ImageListPage.jsx";
import TablePage from "./Pages/TablePage.jsx";
import DialogPage from "./Pages/DialogPage.jsx";
import TabPage from "./Pages/TabPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <TypographyPage></TypographyPage>,
      },
      {
        path: "/button",
        element: <ButtonPage></ButtonPage>,
      },
      {
        path: "/textfield",
        element: <TextFieldPage></TextFieldPage>,
      },
      {
        path: "/othersFields",
        element: <OthersFieldPage></OthersFieldPage>,
      },
      {
        path: "/rating",
        element: <RatingPage></RatingPage>,
      },
      {
        path: "/autoComplete",
        element: <AutoCompletePage></AutoCompletePage>,
      },
      {
        path: "/layout",
        element: <LayoutPage></LayoutPage>,
      },
      {
        path: "/card",
        element: <CardsPage></CardsPage>,
      },
      {
        path: "/accordion",
        element: <AccordionPage></AccordionPage>,
      },
      {
        path: "/imageList",
        element: <ImageListPage></ImageListPage>,
      },
      {
        path: "/table",
        element: <TablePage></TablePage>,
      },
      {
        path: "/dialog",
        element: <DialogPage></DialogPage>,
      },
      {
        path: "/tab",
        element: <TabPage></TabPage>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

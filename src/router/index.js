import { createBrowserRouter } from "react-router-dom"
import ServicesView from "../views/ServicesView"
import ServiceDetailedView from "../views/ServiceDetailedView"
import ProjectsView from "../project";
import ProductDetailedView from "../views/ProductDetailedView";
// import PostRequest from "../views/Feedback";

export default createBrowserRouter([
  {
    path: "/",
    element: <ServicesView />
  },
    {
      path: "/detailed/:id",
      element: <ServiceDetailedView />,
    },
  {
    path: "/",
    element: <ProjectsView />,
  },
  {
    // path: "/src/views/Feedback",
    // element: <PostRequest/>
  },
  {
    path: "/detailed/:id",
    element: <ProductDetailedView/>
  },
  {
    path: "/detailed/:id",
    element: <ProductDetailedView/>
  }
 
]);
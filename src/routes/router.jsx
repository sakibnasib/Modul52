import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

const router=createBrowserRouter([
    {
        path:'/',
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path:'',
                element:<Home></Home>
            },
            {
                path:'/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader:()=>fetch('/news.json')
            }
        ]
    },
    {
path:'/*',
element:<div className="text-red-500 text-6xl text-center">Error 404</div>
    }
])

export default router;
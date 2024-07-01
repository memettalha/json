import { createBrowserRouter } from "react-router-dom"
import HomePage from "./home"
import RootLayout from "./pages/root"

const routes =[
    {
        path:"/",
        element:<RootLayout/>,
        children:[
            {
            index:true,
            element:<HomePage/>
            }
        ]
    }
]

const router = createBrowserRouter(routes)

export default router
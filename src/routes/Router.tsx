import {
    BrowserRouter,
    createBrowserRouter,
    Routes,
   Route
} from "react-router-dom";

import Course from "../pages/Course";
import DashBoard from "../pages/DashBoard";
import Lesson from "../pages/Lesson";
import Login from "../pages/Login";
import ErrorPage from "../pages/PageError";
import Panel from "../pages/Panel";
import PanelCourse from "../pages/PanelCourse";
import PanelCourseModule from "../pages/PanelCourseModule";
import PanelCourses from "../pages/PanelCourses";
import PanelLesson from "../pages/PanelLesson";
import SignUp from "../pages/SignUp";
import { useAuth } from "../hooks/AuthContext";
import PrivateRoute from "./PrivateRoute";
import PrivateRouteComponent from "./PrivateRoute";
import PanelSubject from "../pages/PanelSubject";
import PanelSUbjects from "../pages/PanelSubjects";
import PanelChapter from "../pages/PanelChapter";
import PanelCustomers from "../pages/PanelCustomers";
import PanelCustomer from "../pages/PanelCustomer";
import PanelEmployees from "../pages/PanelEmployees";



const Router:React.FC = ()=>{
    const {user} = useAuth()
    
    return (
        <BrowserRouter>
            

            <Routes>
              
                <Route element={<Login/>} path="/" />
                
                <Route element={ <PrivateRoute component={PanelSUbjects}></PrivateRoute>} path="/Subjects" ></Route>
                <Route element={ <PrivateRoute component={PanelCourse}></PrivateRoute>} path="/Course/:id" ></Route>
                <Route element={ <PrivateRoute component={PanelSubject}></PrivateRoute>} path="/Subject/:id" ></Route>
                <Route element={ <PrivateRoute component={PanelChapter}></PrivateRoute>} path="/Chapter/:id" ></Route>
                <Route element={ <PrivateRoute component={PanelLesson}></PrivateRoute>} path="/Lesson/:id" ></Route>
                <Route element={ <PrivateRoute component={PanelCustomers}></PrivateRoute>} path="/customers" ></Route>
                <Route element={ <PrivateRoute component={PanelCustomer}></PrivateRoute>} path="/customer/:id" ></Route>

                <Route element={ <PrivateRoute component={PanelEmployees}></PrivateRoute>} path="/Employees" ></Route>

                <Route element={ <PrivateRoute component={Panel}></PrivateRoute>} path="/panel" ></Route>

                <Route element={
                    <PrivateRoute component={PanelCourse}  ></PrivateRoute>
                } path="/panel/curse/:id" ></Route> // page to edit course info
                
                <Route element={
                     <PrivateRoute component={PanelCourseModule}  ></PrivateRoute>
                } path="/panel/courses/module/:id" ></Route>

            </Routes>
        
        </BrowserRouter>
    )

}

const router2 = createBrowserRouter([
    {
        path:"/",
        element:<Login/>,
        errorElement:<ErrorPage/>
        
    },
    {
        path:"/signup",
        element:<SignUp/>,
        errorElement:<ErrorPage/>
    },
    {
        path:"/dashboard",
        element: <DashBoard/>,
        errorElement:<ErrorPage/>
    },
    {
        path:"/course",
        element: <Course/>,
        errorElement:<ErrorPage/>
    },
    {
        path:"/lesson",
        element:<Lesson/>,
        errorElement:<ErrorPage/>
    },
    {
        path:"/panel/lesson",
        element:<PanelLesson/>,
        errorElement:<ErrorPage/>
    },
    {
        path:"/panel/course/module",
        element:<PanelCourseModule/>,
        errorElement:<ErrorPage/>
    },
    {
        path:"/panel/course",
        element:<PanelCourse/>,
        errorElement:<ErrorPage/>
    },
    {
        path:"/panel/courses",
        element:<PanelCourses/>,
        errorElement:<ErrorPage/>
    },
    {
        path:"/panel",
        element:<Panel/>,
        errorElement:<ErrorPage/>
    }
])

export default Router
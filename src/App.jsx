import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Navbar from "./components/Navbar.jsx";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./routes";

import HomePage from "./pages/HomePage.jsx";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import MenuPage from "./pages/MenuPage";
import Footer from './components/Footer';
import ProfilePage from "./pages/ProfilePage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import InProgress from "./pages/InProgressPage.jsx";
//import { TaskFormPage } from "./pages/TaskFormPage";
//import { TasksPage } from "./pages/TasksPage";
//import { TaskProvider } from "./context/tasksContext";
import { MenuProvider } from "./context/menuContext";
import { UserProvider } from "./context/userContext";
import { OrderProvider } from "./context/orderContext.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AdminPage from "./pages/AdminPage.jsx";

const App = () => {
  return (
    <AuthProvider>
      <MenuProvider>
        <OrderProvider>
        <UserProvider>
        <ToastContainer autoClose={1500} theme="dark" hideProgressBar/>
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/menu" element={<InProgress/>}/>
                <Route path="/working" element={<InProgress/>}/>
                <Route path="*" element={<ErrorPage/>}/>
                <Route element={<ProtectedRoute />}>
                  <Route path="/my-account" element={<ProfilePage/>}/>
                  <Route path="/admin" element={<AdminPage/>}/>
                  {/* <Route path="/users" element={<UsersPage/>}/>
                  <Route path="/menuComidas" element={<MenuComidasPage/>}/> */}
                  {/* <Route path="/tasks" element={<TasksPage />} />
                  <Route path="/add-task" element={<TaskFormPage />} />
                  <Route path="/tasks/:id" element={<TaskFormPage />} />
                  <Route path="/profile" element={<h1>Profile</h1>} /> */}
                </Route>
              </Routes>
              <Footer/>
          </BrowserRouter>
        </UserProvider>
        </OrderProvider>
      </MenuProvider>
    </AuthProvider>
  );
}

export default App;

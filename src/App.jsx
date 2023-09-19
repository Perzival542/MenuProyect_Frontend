import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/Navbar";

//Proteccion a las rutas
import { ProtectedRoute } from "./routes";

//Paginas de las rutas
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
//import { TaskFormPage } from "./pages/TaskFormPage";
import { LoginPage } from "./pages/LoginPage";
//import { TasksPage } from "./pages/TasksPage";
import { MenusPage } from "./pages/MenuPage";
import { OrdersPage } from "./pages/OrdersPage";
import { UsersPage } from "./pages/UsersPage";

//Providers del contexto
import { AuthProvider } from "./context/authContext";
import { TaskProvider } from "./context/tasksContext";
import { MenuProvider } from "./context/menuContext";
import { OrderProvider } from "./context/orderContext";
import { UserProvider } from "./context/usersContext";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <MenuProvider>
          <OrderProvider>
            <UserProvider>
              <Router>
                <main className="container content-container mx-auto px-10 md:px-0">
                  <NavBar />
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/menus" element={<MenusPage/>}/>
                    <Route path="/orders" element={<OrdersPage/>}/>
                    <Route element={<ProtectedRoute />}>
                      <Route path="/users" element={<UsersPage/>} />
                      <Route path="/profile" element={<h1>Profile</h1>} />
                    </Route>
                    {/* <Route element={<ProtectedRoute />}>
                      <Route path="/tasks" element={<TasksPage />} />
                      <Route path="/add-task" element={<TaskFormPage />} />
                      <Route path="/tasks/:id" element={<TaskFormPage />} />
                      <Route path="/profile" element={<h1>Profile</h1>} />
                    </Route> */}
                  </Routes>
                </main>
              </Router>
            </UserProvider>
          </OrderProvider>
        </MenuProvider>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;

import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import Dashboard from "./pages/dashboard/Dashboard"
import AdminLayout from "./layout/AdminLayout";
import AnalyticsReports from "./pages/analytics&Reports/AnalyticsReports";
import DeviceList from "./pages/deviceList/DeviceList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/admin" replace />
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Dashboard /> }, 
      { path:'device-list', element: <DeviceList /> }, 
      { path:'analytices-reports', element: <AnalyticsReports /> }, 
    ],
  },
]);

function App() {

  return <RouterProvider router={router} />;
}

export default App

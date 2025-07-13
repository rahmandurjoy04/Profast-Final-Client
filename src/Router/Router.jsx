import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Authentication/Login/Login";
import Regiser from "../Pages/Authentication/Register/Regiser";
import Coverage from "../Pages/Coverage/Coverage";
import About from "../Pages/About/About";
import PrivateRoute from "../routes/PrivateRoute";
import SendParcel from "../Pages/SendParcel/SendParcel";
import DashboardLayout from "../Layouts/DashboardLayout";
import MyParcels from "../Pages/Dashboard/MyParcels/MyParcels";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import TrackParcel from "../Pages/Dashboard/TrackParcel/TrackParcel";
import BeARider from "../Pages/Dashboard/BeARider/BeARider";
import PendingRiders from "../Pages/Dashboard/PendingRiders/PendingRiders";
import ActiveRiders from "../Pages/Dashboard/ActiveRiders/ActiveRiders";
import MakeAdmin from "../Pages/Dashboard/MakeAdmin/MakeAdmin";
import Forbidden from "../Pages/Forbidden/Forbidden";
import AdminRoute from "../routes/AdminRoute";
import AssignRider from "../Pages/Dashboard/AssignRider/AssignRider";
import RiderRoute from "../routes/RiderRoute";
import PendingDeliveries from "../Pages/Dashboard/PendingDeliveries/PendingDeliveries";
import CompletedDeliveries from "../Pages/Dashboard/CompletedDeliveries/CompletedDeliveries";
import MyEarnings from "../Pages/Dashboard/MyEarnings/MyEarnings";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'coverage',
                Component: Coverage
            },
            {
                path: 'aboutUs',
                Component: About
            },
            {
                path: 'sendParcel',
                element: <PrivateRoute>
                    <SendParcel></SendParcel>
                </PrivateRoute>,
                loader: () => fetch('./serviceCenter.json')
            },
            {
                path: 'rider',
                element: <PrivateRoute>
                    <BeARider></BeARider>
                </PrivateRoute>
            },
            {
                path: 'forbidden',
                Component: Forbidden
            }


        ]
    },
    {
        path: '/',
        Component: AuthLayout,
        children: [
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Regiser
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: 'myParcels',
                element: <MyParcels></MyParcels>
            },
            {
                path: 'payment/:parcelId',
                Component: Payment
            },
            {
                path: 'paymentHistory',
                Component: PaymentHistory
            },
            {
                path: 'track',
                Component: TrackParcel
            },

            // Rider Only Routes
            {
                path:'pending-deliveries',
                element:<RiderRoute>
                    <PendingDeliveries></PendingDeliveries>
                </RiderRoute>
            },
            {
                path:'completed-deliveries',
                element:<RiderRoute>
                    <CompletedDeliveries></CompletedDeliveries>
                </RiderRoute>
            },
            {
                path:'my-earnings',
                element:<RiderRoute>
                    <MyEarnings></MyEarnings>
                </RiderRoute>
            },


            // Admin Only Routes
            {
                path: 'pending-riders',
                element:<AdminRoute>
                    <PendingRiders></PendingRiders>
                </AdminRoute>
            },
            {
                path: 'active-riders',
                element:<AdminRoute>
                    <ActiveRiders></ActiveRiders>
                </AdminRoute>
            },
            {
                path: 'assign-rider',
                element:<AdminRoute>
                    <AssignRider></AssignRider>
                </AdminRoute>
            },
            {
                path: 'makeAdmin',
                element: <AdminRoute>
                    <MakeAdmin></MakeAdmin>
                </AdminRoute>
            }

        ]
    }
])
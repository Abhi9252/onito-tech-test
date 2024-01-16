import LandingPage from "../Pages/LandingPage/LandingPage";
import RegistrationFrom from "../Pages/RegistrationFrom/RegistrationFrom";
import SuccessPage from "../Pages/SuccessPage/SuccessPage";

const PUBLIC_ROUTES = [
    { path: '/landing', component: <LandingPage /> },
    { path: '/registration', component: <RegistrationFrom /> },
    { path: '/success', component: <SuccessPage /> },
]

export { PUBLIC_ROUTES };

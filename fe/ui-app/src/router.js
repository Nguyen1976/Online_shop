import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/users/homePage";
import { ROUTERS } from "./utils/router";
import MasterLayout from './pages/users/theme/masterLayout';
import ProfilePage from './pages/users/profilePage';

const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage />,
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: <ProfilePage />,
        },
    ]

    return (
        <MasterLayout>
            <Routes>
                {userRouters.map((router, index) => (
                    <Route key={index} path={router.path} element={router.component} />
                ))}
            </Routes>
        </MasterLayout>
    )
}

function RouterCustom() {
    return renderUserRouter();
}

export default RouterCustom;
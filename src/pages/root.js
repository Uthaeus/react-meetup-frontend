import { Outlet } from "react-router";

import Navigation from "../components/navigation/navigation";

function RootLayout() {

    return (
        <>
            <Navigation />
            <Outlet />
        </>
    );
}

export default RootLayout;
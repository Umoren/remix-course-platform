import { Outlet } from "@remix-run/react";




export default function CoursesRoute() {
    return (
        <div className="container">
            <main>
                <Outlet />
            </main>
        </div>
    );
}

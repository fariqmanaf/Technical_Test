import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Toaster } from "react-hot-toast";

export const Route = createRootRoute({
    component: RootComponent,
});

function RootComponent() {
    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />
            <div style={{ display: "flex" }}>
                <div style={{ flex: 5 }}>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

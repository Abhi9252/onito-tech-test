import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PUBLIC_ROUTES } from './allRoutes';

const index = () => {
    return (
        <React.Fragment>
            <Routes>
                {PUBLIC_ROUTES.map((route, idx) => {
                    return (
                        <Route
                            path={route.path}
                            key={idx}
                            element={route.component}
                        />
                    );
                })}
            </Routes>
        </React.Fragment>
    )
}

export default index

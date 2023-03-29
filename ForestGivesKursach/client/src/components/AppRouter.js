import React, { useContext } from 'react';
import {Routes,Route} from 'react-router-dom'
import {PublicRoutes,AuthRoutes} from '../routes'
import {Context} from '../index'
import { observer } from 'mobx-react-lite';

const AppRouter = observer(() => {
    
    const {user}=useContext(Context)
    console.log(user)
    return (
        <Routes>
            {user.IsAuth && AuthRoutes.map(({path,Component})=>
                <Route key={path} path={path} Component={Component} exact/>
            )}
            { PublicRoutes.map(({path,Component})=>
                <Route key={path} path={path} Component={Component} exact/>
            )}
        </Routes>
    );
})

export default AppRouter;
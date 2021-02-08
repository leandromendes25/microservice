import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '.';
type Props = {

};
const AppRouter: React.FC = (props: Props) => {
    return (
        <div>
            <Switch>
                {
                    routes.map(/*Rota especifica(objeto, indice array, do qual devemos colocar em todos) */
                        (route, key) => (<Route
                            key={key}
                            path={route.path}
                            component={route.component}
                            exact={route.exact === true}
                        />)
                    )
                }
            </Switch>
        </div>
    );
};
export default AppRouter;
import React, { Component, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from '../../routes';

const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;

const DefaultHeader = React.lazy(() => import('./DefaultHeader'))
const DefaultFooter = React.lazy(() => import('./DefaultFooter'))

class DefaultLayout extends Component {
    render() {
        return (
            <div>
                <Suspense fallback={loading()}>
                    <DefaultHeader />
                </Suspense>
                <div className="pattern">
                    <div className="overlay">
                        <div>
                            <span style={{ fontSize: '40px', display: 'block', color: 'white' }}>Mobile revolutionizes the way people live their lives</span>
                            <span style={{ fontSize: '20px', display: 'block', color: 'white' }}>Every business needs real customers. We help you win them over on mobile.</span>
                        </div>
                    </div>
                </div>
                <div>
                    <Suspense fallback={loading()}>
                        <Switch>
                            {routes.map((route, idx) => {
                                return route.component ?
                                    <Route
                                        key={idx}
                                        path={route.path}
                                        exact={route.exact}
                                        name={route.name}
                                        render={props => <route.component {...props} />}
                                    /> : null
                            })}
                        </Switch>
                    </Suspense>
                </div>
                <Suspense fallback={loading()}>
                    <DefaultFooter />
                </Suspense>
            </div>
        );
    }
}

export default DefaultLayout;

import React, {Component} from 'react';

import routes from '../../api/constants/Routes';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import { AppBreadcrumb, AppSidebar, AppSidebarHeader, AppSidebarForm, AppSidebarFooter, AppSidebarNav } from '@coreui/react';
import navigation from '../../_link'

class DefaultLayout extends Component {
    render() {
        return (
            <div className="app">
                <div className="app-body">
                    <AppSidebar>
                        <AppSidebarHeader />
                        <AppSidebarForm />
                        <AppSidebarNav navConfig={navigation} {...this.props} />
                        <AppSidebarFooter />
                    </AppSidebar>
                    <main className="main">
                        <AppBreadcrumb appRoutes={routes} />
                        <Container fluid>
                            <Switch>
                                {
                                    routes.map((route, idx) => {
                                        return route.component ? (
                                            <Route key={idx} path={route.path} exact={route.exact} name={route.name} render ={props => (
                                                <route.Component {...props} />
                                            )} /> )
                                         : (null);
                                    },
                                )}
                                {/* <Redirect exact from='/' to='/dashboard' /> */}
                                
                            </Switch>
                        </Container>
                    </main>
                </div>
            </div>
        );
    }
}

export default DefaultLayout;
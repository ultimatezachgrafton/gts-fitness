import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import UserDashboard from'./UserDashboard';
import AdminDashboard from './AdminDashboard';
import AdminUserProfile from './AdminUserProfile';
import SignUp from './SignUp';
import Login from './Login';
import ChangePassword from './ChangePassword';
import UpdateProfile from './UpdateProfile';

class App extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Router>
                        <AuthProvider>
                            <Switch>
                                <PrivateRoute exact path="/" component={AdminDashboard} />
                                <Route path="/sign-up" component={SignUp} />
                                <Route path="/login" component={Login} />
                                <Route path="/change-password" component={ChangePassword} />
                                <PrivateRoute path="/update-profile" component={UpdateProfile} />
                                <PrivateRoute path="/:handle" component={AdminUserProfile} />
                                <PrivateRoute path="/:handle" component={UserDashboard} />
                            </Switch>
                        </AuthProvider>
                    </Router>
                </Container>
            </div>
        );
    }
}

export default App;

// Next step:
// add to list the links for Ben to add Nutrition and Workout google docs to clients' dashboards
// create user dashboards list for users to view and select docs to view and update
// {/* header w/ ben info, social media */}

// tomorrow:
// Design profiles
// user profiles should include: isAdmin, birthdate, join date, weight, phone, name, email, dietary restrictions, other notes
// possibly graph for weight, calories
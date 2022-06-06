import {Switch, Route} from 'react-router-dom'
import Forgot from './components/Forgot/Forgot';
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Dashboard from './components/Dashboard/Dashboard';
import Allzones from './components/Allzones/Allzones';
import Attendance from './components/Attendance/Attendance';
import Employees from './components/Employees/Employees';


const Routes = () => {
    return(
    <Switch>
        <Route path = '/login'>
            <Login />
        </Route>
        <Route path = '/forgot'><Forgot /></Route>
        <Route path ='/'><Home /></Route>
        <Route exact path = '/dashboard' component={Dashboard} />
        <Route exact path = '/attendance' component={Attendance} />
        <Route exact path = '/allzones' component={Allzones} />
        <Route exact path = '/employees' component={Employees} />
    </Switch>
    )
}
export default Routes
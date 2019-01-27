/**
 * @author prajwalmr62
 * this is for page indexing / routing entry point
 */
import * as React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Import from "./import";
import Manage from "./manage";
import List from "./list";

export default () => {
    return (
        <Switch>
            <Redirect from="/" exact={true} to="/import" />
            <Route path="/import" component={Import} />
            <Route path="/list" component={List}></Route>
            <Route path="/manage" component={Manage}></Route>
        </Switch>
    );
}
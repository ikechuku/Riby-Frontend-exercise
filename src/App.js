import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={SendMoney} exact />
          <Route path="/send-money" component={SendMoney} exact />
          <Route path="/send-money-copy" component={SendMoney2} exact />
          <Route path="/track" component={TrackTransaction} exact />
          <Route path="/cancel" component={Cancel} exact />
          <Route path="/track-details/:id" component={TrackDetails} exact />
          <Route path="/edit-details" component={EditDetails} exact />
          <Route path="/create-ping-link" component={CreatePingLink} exact />
          <Route path="/track-ping-link" component={TrackPingLink} exact />
          <Route path="/ping-link-details" component={PingLinkDetail} exact />
          
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

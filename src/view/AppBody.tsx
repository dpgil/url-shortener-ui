import React from "react";
import { Header } from "./Header";
import { InputArea } from "./InputArea";

export const AppBody = React.memo(function AppBody() {
  React.useEffect(() => {
    // Make a call to the backend to wake it up on app load, since
    // Heroku sleeps apps by default.
    // TODO: sendDecodeRequest
  }, []);

  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <InputArea />
      </header>
    </div>
  );
});

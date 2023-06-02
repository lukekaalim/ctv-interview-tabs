import React from "react";
import { TabbedGrid } from "./TabbedGrid/TabbedGrid";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <TabbedGrid />
      </>
    );
  }
}

export default App;

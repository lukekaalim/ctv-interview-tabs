import React, { useEffect, useState } from "react";
import { Tab } from "../Tab/Tab";
import { Card } from "../Card/Card";

import { fetchData } from "../Data/util";

export function TabbedGrid(props) {
  return (
    <div>
      <div className="tab-row">
        <Tab title="Tab 1" />
        <Tab title="Tab 2" />
        <Tab title="Tab 3" />
        <Tab title="Tab 4" />
      </div>

      <div className="card-row">
        <Card backgroundImageUrl="" />
        <Card backgroundImageUrl="" />
        <Card backgroundImageUrl="" />
        <Card backgroundImageUrl="" />
        <Card backgroundImageUrl="" />
        <Card backgroundImageUrl="" />
      </div>
    </div>
  );
}

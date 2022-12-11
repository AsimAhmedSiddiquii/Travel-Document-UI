import React from "react";

import HeaderStats from "components/Headers/HeaderStats.js";

import Admin from "layouts/Admin.js";

export default function Dashboard() {
  return (
    <>
      <div className="relative bg-blueGray-100">
        <HeaderStats />
      </div>
    </>
  );
}

Dashboard.layout = Admin;

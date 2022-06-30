import React from "react";
import HomeAdmin from "../modules/Add/Components/HomeAdmin";

const Protected = [
  {
    name: "admin",
    exact: true,
    path: "/admin",
    main: (props) => <HomeAdmin {...props} />,
    public: false,
  },
];

export default Protected;

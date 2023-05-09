import React from "react";
import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";
import { HomePageContainer } from "./homepage.styles.jsx";

const HomePage = function () {
	return (
		<HomePageContainer>
			<Directory />
			<Outlet />
		</HomePageContainer>
	);
};

export default HomePage;

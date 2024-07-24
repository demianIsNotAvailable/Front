import React, { useState } from "react";
import { useNavigate } from "react-router";
import { CSurfer } from "../CSurfer/CSurfer";

export const Header = () => {
	const navigate = useNavigate();

	return (
		<>
			<div className="flex justify-space-betwwen">
				<CSurfer path="/" content="Home" />
				<CSurfer path="/books" content="Books" />
				<div onClick={() => navigate("/login")}> Login </div>
				<CSurfer path="/register" content="Register" />
			</div>
		</>
	);
};

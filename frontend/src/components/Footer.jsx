import React from "react";
import { FaPenAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="w-full  shadow-gray-950 shadow-inner flex flex-col justify-between items-start px-4 py-8 bg-slate-800 text-white">
			<h1 className="font-bold">
				All rights reserved 2024 &copy; ChatApp
			</h1>
		</div>
	);
};

export default Footer;

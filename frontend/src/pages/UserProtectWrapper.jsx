import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
const UserProtectWrapper = ({ children }) => {
	const token = localStorage.getItem("token");
	const navigate = useNavigate();

	useEffect(() => {
		if (!token) {
			navigate("/login");
		}
	});

	return <>{children}</>;
};

export default UserProtectWrapper;

import { useNavigate } from "react-router";
import { CSurfer } from "../CSurfer/CSurfer";
import { useAuth } from "../../contexts/AuthContext/AuthContext";

export const Header = () => {
  const navigate = useNavigate();

  const {isLoggedIn, logout} = useAuth()

  return (
    <>
      <div className="flex justify-space-betwwen">
        <CSurfer path="/" content="Home" />
        <CSurfer path="/books" content="Books" />
        {isLoggedIn ? (
          <>
            <div onClick={logout}> LOGOUT </div>
            <CSurfer path="/profile" content="Profile" />
          </>
        ) : (
          <>
            <div onClick={() => navigate("/login")}> Login </div>
            <CSurfer path="/register" content="Register" />
          </>
        )}
      </div>
    </>
  );
};

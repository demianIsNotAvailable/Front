import { useNavigate } from "react-router";
import { CSurfer } from "../CSurfer/CSurfer";

export const Header = () => {
  const navigate = useNavigate();

  const passport = JSON.parse(localStorage.getItem("passport"));
  let token;
  if (passport) {
    token = passport.token;
  }

  return (
    <>
      <div className="flex justify-space-betwwen">
        <CSurfer path="/" content="Home" />
        <CSurfer path="/books" content="Books" />
        {token ? (
          <>
            <div onClick={() => localStorage.removeItem("passport")}> LOGOUT </div>
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

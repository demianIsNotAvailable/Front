import { useEffect, useState } from "react";
import { CInput } from "../../components/CInput/CInput";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../../services/apiCalls";

export const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    is_active: null,
    created_at: "",
  });
  const passport = JSON.parse(localStorage.getItem("passport"));

  const navigate = useNavigate();


  useEffect(() => {
    if (!passport) {
      navigate("/login");
    } 
    
    else {
        const bringMyProfile = async () => {
            const response = await getProfile(passport.token)
            setProfileData(response.data)
            console.log(response)
        }
        bringMyProfile()
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("passport");
    console.log("Bye :(");
  };


  // if (passport)

  return (
    <>
      <h2>Hola, somos profile</h2>
      <p>Name: {profileData.name}</p>
      <p>Active? {profileData.is_active ? "Yes" : "Nope"}</p>
      <p>Created At: {profileData.created_at}</p>
      <h1>PASSWORD: {profileData.password}</h1>
      <CInput
        type="button"
        name="logout"
        value="logout"
        emitOnClickButton={logout}
      />
    </>
  );
};

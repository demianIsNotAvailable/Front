import { useEffect, useState } from "react";
import { CInput } from "../../components/CInput/CInput";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../../services/apiCalls";
import "./Profile.css";

export const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    is_active: null,
    created_at: "",
  });

  const [editData, setEditData] = useState({
    name: "",
    email: "",
  });
  const [editting, setEditting] = useState(false);

  const passport = JSON.parse(localStorage.getItem("passport"));

  const navigate = useNavigate();

  useEffect(() => {
    if (!passport) {
      navigate("/login");
    } else {
      const bringMyProfile = async () => {
        const response = await getProfile(passport.token);
        setProfileData(response.data);
        console.log(response);
      };
      bringMyProfile();
    }
  }, []);

  const editButtonHandler = () => {
    setEditData({
      name: profileData.name,
      email: profileData.email,
    });
    setEditting(!editting);
  };

  const editInputHandler = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
    console.log("estamso editando", editData);
  };

  useEffect(() => {
    console.log("estamos editando: ", editData);
  }, [editting]);

  return (
    <>
      <h2>Hola, somos profile</h2>
      <p className={editting ? "hidden" : ""}>
        Name: {profileData.name ? profileData.name : "No Disponible"}
      </p>
      <CInput
        type="text"
        name="name"
        placeholder="name"
        className={editting ? "" : "hidden"}
        emitFunction={editInputHandler}
      />
      <p className={editting ? "hidden" : ""}>Email: {profileData.email}</p>
      <CInput
        type="email"
        name="email"
        placeholder={editData.email}
        className={editting ? "" : "hidden"}
        emitFunction={editInputHandler}
      />
      <p>Active? {profileData.is_active ? "Yes" : "Nope"}</p>
      <p>Created At: {profileData.created_at}</p>
      <h1>PASSWORD: {profileData.password}</h1>
      <CInput
        type="button"
        name="edit"
        value="edit"
        emitOnClickButton={editButtonHandler}
      />
    </>
  );
};

import { useEffect, useState } from "react";
import { CInput } from "../../components/CInput/CInput";
import { useNavigate } from "react-router-dom";
import { getProfile, updateProfile } from "../../services/apiCalls";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
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

  const { token, isLoggedIn } = useAuth()

  const navigate = useNavigate();

  useEffect(() => {
    console.log(isLoggedIn, token)
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      const bringMyProfile = async () => {
        const response = await getProfile(token);
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

  const confirmButtonHandler = async () => {
    try {
    const response = await updateProfile(editData, token)
    if (response.success) {
      const newData = await getProfile(token)
      setProfileData(newData.data)
      setEditting(!editting)

    }} catch (err) {
      
      setErrorMessage(err.message)
    }
  } 

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
        value={editting ? "Cancel" : "Edit"}
        emitOnClickButton={editButtonHandler}
      />
      <CInput
        type="button"
        name="send"
        value="Save changes"
        className={editting ? "" : "hidden"}
        emitOnClickButton={confirmButtonHandler}
      />
    </>
  );
};
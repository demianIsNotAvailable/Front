import { useEffect, useState } from "react";
import { deleteUserById, getAllUsers } from "../../services/apiCalls";
import "./Admin.css";
import { CInput } from "../../components/CInput/CInput";

export const Admin = () => {
  const [users, setUsers] = useState([]);

  const passport = JSON.parse(localStorage.getItem("passport"));
  const token = passport.token;

  useEffect(() => {
    const bringAllUsers = async () => {
      const allUsers = await getAllUsers(token);
      console.log(allUsers);
      if (allUsers.success) {
        setUsers(allUsers.data);
      }
    };
    bringAllUsers();
  }, []);

  const deleteUserHandler = async (e) => {
    const id = +e.target.name;
    const res = await deleteUserById(token, id);
    if (res.success) {
      const remainingUsers = users.filter((user) => {
        if (user.id !== id) {
            console.log(user)
            return user
        };
      });
      console.log(remainingUsers)
      setUsers(remainingUsers);
    }
  };

  return (
    <>
      <h1>Admin</h1>
      <input type="text" name="filter" value={userFilter} placeholder="Search user email" onChange={handleUserFilter}/>
      <div className="users-container">
        <div className="table-row">
          <div className="content">id</div>
          <div className="content">email</div>
          <div className="content">active</div>
          <div className="content">actions</div>
        </div>
        {users.length &&
          users.map((user) => {
            return (
              <div className="table-row" key={user.id}>
                <div className="content">{user.id}</div>
                <div className="content">{user.email}</div>
                <div className="content">
                  {user.is_active ? "active" : "inactive"}
                </div>
                <div className="content">
                  <CInput
                    type="button"
                    name={user.id}
                    value="🛇"
                    emitOnClickButton={deleteUserHandler}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

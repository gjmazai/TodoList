import React, { FC } from "react";
import { Link } from "react-router-dom";
import { IUser } from "../types/types";

interface UserItemProps {
  user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <Link to={"/user/" + user.id}>
      <div key={user.id} style={{ padding: "15px", border: "1px solid grey" }}>
        {user.id} {user.name} Проживает по адрессу {user.address.city},{" "}
        {user.address.street}
      </div>
    </Link>
  );
};

export default UserItem;

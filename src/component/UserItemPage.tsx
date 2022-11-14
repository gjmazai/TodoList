import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IUser } from "../types/types";
import UserItem from "./UserItem";

interface UserItemProps {
  user: IUser;
}

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const { id } = useParams<string>();
  const history = useNavigate();

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const responce = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users/" + { id }.id
      );
      setUser(responce.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <button onClick={() => history("/users")}>Back</button>
      <h1>Страница пользователя</h1>
      <div>{user?.name}</div>
      <div>
        {user?.address.city} {user?.address.zipcode}
      </div>
    </div>
  );
};

export default UserItemPage;

import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [userId] = useParams();
  const token = useSelector((state) => state.token);

  const getUser = async () => {
    const response = await fetch(`http://localhost:5000/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };
  useEffect(() => {
    getUser();
  }, []);
  if (!user) return null;

  return <div>ProfilePage</div>;
};

export default ProfilePage;

import "../Styles/Dashboard.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Typography, TextField, Button, Stack, Box } from "@mui/material";
import logo from "../Images/Logo/mm-logo-no-text.png";

function Dashboard() {
  const [article, setArticle] = useState({});
  const [id, setId] = useState();
  const [idFromButtonClick, setIdFromButtonClick] = useState();

  const handleClick1 = () => {
    setIdFromButtonClick(id);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:7000/api/article/${idFromButtonClick}`)
      .then((res) => {
        console.log(res);
        setArticle(res.data);
      })
      .catch((err) => console.log(err));
  }, [idFromButtonClick]);

  return (
    <>
      <Box className="dashboard">
        <Typography variant="h3">DASHBOARD</Typography>
        <Box
          component="form"
          className="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
        >
          <Typography variant="h5">Welcome to Monday Morning</Typography>
          <img src={logo} alt="logo" id="admin-panel-mm-logo" />

         <Stack>
          <TextField
          label="ID"
            type="text"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <Button variant='contained' onClick={handleClick1}>Read</Button>
          <Typography variant="h6">{article.body}</Typography>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;

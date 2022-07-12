import "../Styles/Dashboard.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Typography,
  TextField,
  Button,
  Stack,
  Box,
  ButtonGroup,
} from "@mui/material";
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
          <Typography variant="h5">Welcome!!!</Typography>
          <img src={logo} alt="logo" id="admin-panel-mm-logo" />

          <Stack direction="row" gap={1} alignItems="center">
            <Stack direction="column" gap={1} alignItems="center">
              <TextField
                fullWidth
                label="ID"
                type="text"
                value={id}
                onChange={(e) => {
                  setId(e.target.value);
                }}
              />
              <TextField type="text" label="title" />
              <TextField type="text" label="description" />
              <TextField type="text" label="Content" />
            </Stack>
            <ButtonGroup color="primary">
              <Button variant="contained" onClick={handleClick1}>
                Read
              </Button>
              <Button variant="contained">Update</Button>
              <Button variant="contained">Delete</Button>
              <Button variant="contained">Post</Button>
            </ButtonGroup>
          </Stack>
          <Typography variant="h6">{article.body}</Typography>
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;

import React, { useCallback, useEffect } from "react";
import NavBar from "../NavBar";
import Grid from "@mui/material/Grid";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  FormControl,
  FormGroup,
  FormHelperText,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import DataTable from "./components/Table";
import axios from "axios";
function Exams() {
  const [classe, setClasses] = useState(null);
  const [subject, setSubject] = useState("");
  const [files, setFile] = useState([]);
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/api/cours/classes")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8081/api/cours/matieres")
      .then((res) => {
        setData1(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleChange = (event) => {
    setClasses(event.target.value);
  };
  const handleChangeSubject = (event) => {
    setSubject(event.target.value);
  };

  const handleDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", files);
    formData.append("classe", classe);
    formData.append("subject", subject);
    console.log(formData);
    axios
      .post("http://localhost:8081/api/cours/upload", formData)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <NavBar />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345, mt: 4, ml: 2 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Upload file here
              </Typography>
              <Typography variant="body2" color="text.secondary">
                you can upload your courses here
              </Typography>
            </CardContent>
            <CardActions>
              <FormGroup>
                <FormControl sx={{ m: 4 }}>
                  <InputLabel id="demo-simple-select-label">Classe</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={classe}
                    // label="Age"
                    onChange={handleChange}
                  >
                    {data.map((item) => {
                      return <MenuItem value={item.id}>{item.name}</MenuItem>;
                    })}
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 4 }}>
                  <InputLabel id="demo-simple-select-label">Matiere</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={subject}
                    // label="Age"
                    onChange={handleChangeSubject}
                  >
                    {data1.map((item) => {
                      return <MenuItem value={item.name}>{item.name}</MenuItem>;
                    })}
                  </Select>
                  {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
                </FormControl>
                <FormControl>
                  <DropzoneArea
                    onChange={handleDrop}
                    acceptedFiles={["image/*"]}
                    dropzoneText="Drag and drop an image here or click"
                    filesLimit={1}
                  />
                </FormControl>
                <FormControl>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    // disabled={isLoading}
                    onClick={handleSubmit}
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Add
                  </Button>
                </FormControl>
              </FormGroup>

              {/* <Stack direction="row" alignItems="center" spacing={2}>
                  <Button variant="contained" component="label">
                    Upload
                    <input hidden accept="image/*" multiple type="file" />
                  </Button>
              </Stack> */}
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <DataTable />
        </Grid>
      </Grid>
    </div>
  );
}

export default Exams;

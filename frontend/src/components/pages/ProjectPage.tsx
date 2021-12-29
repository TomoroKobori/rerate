import React from "react";
import GenericTemplate from "../templates/GenericTemplate";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios"
import { useEffect, useState } from 'react';

type Project = {
  title: string,
  status: string,
  point: number,
 }

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ProjectPage: React.FC = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/projects`)
          .then(res => {
            setProjects(res.data)
          })
  },[])

  const classes = useStyles();
  return (
    <GenericTemplate title="案件ページ">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>タイトル</TableCell>
              <TableCell align="right">ステータス</TableCell>
              <TableCell align="right">ポイント</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project: Project) => (
              <TableRow key={project.title}>
                <TableCell component="th" scope="row">
                  {project.title}
                </TableCell>
                <TableCell align="right">{project.status}</TableCell>
                <TableCell align="right">{project.point}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </GenericTemplate>
  );
}

export default ProjectPage
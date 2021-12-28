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

const createData = (
  title: string,
  status: string,
  point: number,
) => {
  return { title, status, point };
};

const rows = [
  createData("project1", "未着手", 3),
  createData("project2", "完了", 1),
  createData("project3", "作業中", 3),
  createData("project4", "完了", 3),
  createData("project5", "作業中", 5),
];

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ProjectPage: React.FC = () => {
  const classes = useStyles();
  return (
    <GenericTemplate title="商品ページ">
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
            {rows.map((row) => (
              <TableRow key={row.title}>
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.point}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </GenericTemplate>
  );
}

export default ProjectPage
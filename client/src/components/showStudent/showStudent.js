// Imported base source code from https://material-ui.com/components/tables/
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function ShowStudent() {
    const classes = useStyles();

    const [studentsList, setStudentList] = useState([]);

    // useEffect function is a React hook that calls itself when the page refreshes/reloads
    useEffect(() => {
        axios.get('http://localhost:5000/students').then((allStudents) => {
            setStudentList(allStudents.data);
        })
    }, []);

    return (
        <>
        <h2>Students</h2>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Registration ID</TableCell>
                    <TableCell align="center">Grade</TableCell>
                    <TableCell align="center">Section</TableCell>
                    <TableCell align="center">Action</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {studentsList.map((student, key) => (
                    <TableRow key={key}>
                        <TableCell align="center" component="th" scope="row">
                            {student.name}
                        </TableCell>
                        <TableCell align="center">{student.regId}</TableCell>
                        <TableCell align="center">{student.grade}</TableCell>
                        <TableCell align="center">{student.section}</TableCell>
                        <TableCell align="center">
                            <IconButton aria-label="delete" className={classes.margin}>
                                <DeleteIcon fontSize="small" />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </>
    );
}
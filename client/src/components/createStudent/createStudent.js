// Imported base source code from https://material-ui.com/components/
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        },
    },
}));

export default function Create() {
    const classes = useStyles();

    const [student, setStudent] = useState({
        regId: 0,
        name: '',
        grade: '',
        section: ''
    });

    // Posts the data to the back-end/server at designated port 5000
    // Pulls function from the server-side controller
    // The THEN statement has the table refresh upon a new entry being added
    const createStudent = () => {
        axios.post('http://localhost:5000/students', student).then(() => {
            window.location.reload(false);
        })
    }

    return (
        <>
        <h2>Create Student</h2>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Registration ID" variant="outlined" value={student.regId} onChange={(event) => {
                setStudent({ ...student, regId: event.target.value })
            }} />
            <TextField id="outlined-basic" label="Name" variant="outlined" value={student.name} onChange={(event) => {
                setStudent({ ...student, name: event.target.value })
            }} />
            <TextField id="outlined-basic" label="Grade" variant="outlined" value={student.grade} onChange={(event) => {
                setStudent({ ...student, grade: event.target.value })
            }} />
            <TextField id="outlined-basic" label="Section" variant="outlined" value={student.section} onChange={(event) => {
                setStudent({ ...student, section: event.target.value })
            }} />

            <Button variant="contained" color="primary" onClick={createStudent} >
                Create
            </Button>
        </form>
        </>
    );
}
import React from 'react';
import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Table, Button, Box, Typography } from "@mui/material";

const UsersTable = ({ rows, selectedUser, deleteUser }) => {
    return (
        <>
            <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
                <Typography variant="h3">All Posts</Typography>
            </Box>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                    </TableHead>
                    <TableBody>
                        {rows.length > 0 ? rows.map(row => (
                            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component='th' scope="row">
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Typography variant="body1">Title: {row.title} Date: {row.date} </Typography>
                                        <Typography variant="body1">Post Path: {row.path}</Typography>
                                        <Typography variant="body1">Description: {row.desc}</Typography>
                                    </Box>
                                </TableCell>
                                <TableCell sx={{ textAlign: 'left' }}>
                                    <Button sx={{ margin: '0px 10px' }}
                                        onClick={() => selectedUser({ id: row.id, title: row.title, desc: row.desc, date: row.date, path: row.path })}
                                    >
                                        Update
                                    </Button>
                                    <Button sx={{ margin: '0px 10px' }}
                                        onClick={() => deleteUser({ id: row.id })}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )) : (
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component='th' scope="row">No Data</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default UsersTable;

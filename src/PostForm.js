import { Button, Grid, Typography, Input, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const UserForm = ({ addPost, updatePost, submitted, data, isEdit }) => {

    const [id, setId] = useState(0);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [date, setDate] = useState('');
    const [path, setPath] = useState('');

    useEffect(() => {
        if (!submitted) {
            setId(uuidv4());
            setTitle('');
            setDesc('');
            setDate('');
            setPath('');
        }
    }, [submitted]);

    useEffect(() => {
        if (data?.id && data.id !== 0) {
            setId(data.id);
            setTitle(data.title);
            setDesc(data.desc);
            setDate(data.date);
            setPath(data.path);
        }
    }, [data]);

    return (
        <>
            <Box sx={{ textAlign: 'left', marginBottom: 2 }}>
                <Typography variant="h5">Add Posts from here</Typography>
            </Box>

            <Grid
                container
                spacing={2}
                sx={{
                    backgroundColor: '#ffffff',
                    marginBottom: '30px',
                    display: 'block',
                    maxWidth: '600px', // Adjust the maximum width of the form
                }}
            >
                <Grid item xs={12} sm={12} sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                    <Typography
                        component={'label'}
                        htmlFor="title"
                        sx={{ color: '#000000', marginRight: '10px', fontSize: '14px', width: '80px', textAlign: 'left' }}
                    >
                        Title
                    </Typography>
                    <Input
                        type='text'
                        id='title'
                        name='title'
                        sx={{ width: '300px', padding: '5px 10px' }}
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </Grid>

                <Grid item xs={12} sm={12} sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                    <Typography
                        component={'label'}
                        htmlFor="desc"
                        sx={{ color: '#000000', marginRight: '10px', fontSize: '14px', width: '80px', textAlign: 'left' }}
                    >
                        Description
                    </Typography>
                    <Input
                        type='text'
                        id='desc'
                        name='desc'
                        sx={{ width: '300px', padding: '5px 10px' }}
                        value={desc}
                        onChange={e => setDesc(e.target.value)}
                    />
                </Grid>

                <Grid item xs={12} sm={12} sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                    <Typography
                        component={'label'}
                        htmlFor="date"
                        sx={{ color: '#000000', marginRight: '10px', fontSize: '14px', width: '80px', textAlign: 'left' }}
                    >
                        Date
                    </Typography>
                    <Input
                        type='date'
                        id='date'
                        name='date'
                        sx={{ width: '300px', padding: '5px 10px' }}
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    />
                </Grid>

                <Grid item xs={12} sm={12} sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                    <Typography
                        component={'label'}
                        htmlFor="path"
                        sx={{ color: '#000000', marginRight: '10px', fontSize: '14px', width: '80px', textAlign: 'left' }}
                    >
                        Post Path
                    </Typography>
                    <Input
                        type='text'
                        id='path'
                        name='path'
                        sx={{ width: '300px', padding: '5px 10px' }}
                        value={path}
                        onChange={e => setPath(e.target.value)}
                    />
                </Grid>

                <Button sx={{
                    display: 'block',
                    marginLeft: '2px',
                    alignItems: 'center',
                    backgroundColor: '#00c6e6',
                    color: '#000000',
                    '&:hover': { opacity: '0.7', backgroundColor: '#00c6e6' }
                }}
                    onClick={() => isEdit ? updatePost({ id, title, desc, date, path }) : addPost({ id, title, desc, date, path })}
                >
                    {isEdit ? 'Update' : 'Submit'}
                </Button>
            </Grid>
        </>
    );
}

export default UserForm;

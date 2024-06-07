import { Box } from "@mui/material";
import UserForm from "./PostForm";
import UsersTable from "./PostView";
import  Axios  from "axios";
import { useEffect, useState } from "react";


const Posts =() => {
    const [posts, setPosts] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});
    const [isEdit, setIsEdit] = useState(false);


    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = () => {
        Axios.get('http://localhost:3001/api/posts')
            .then(response => {
                setPosts(response?.data?.response || []);
            })
            .catch(error => {
                console.error("Axios Error :", error);
            });
    }

    const addPost = (data) => {
        setSubmitted(true);

        const payload = {
            id: data.id,
            title: data.title,
            desc: data.desc,
            date: data.date,
            path: data.path,
        }

        Axios.post('http://localhost:3001/api/createpost', payload)
            .then(() => {
                getPosts();
                setSubmitted(false);
                isEdit(false);
            })
            .catch(error => {
                console.error("Axios Error :", error);
            });
    }

    const updatePost = (data) => {
        setSubmitted(true);
        const payload = {
            id: data.id,
            title: data.title,
            desc: data.desc,
            date: data.date,
            path: data.path,  
        }


        Axios.post('http://localhost:3001/api/updatepost', payload)
            .then(() => {
                getPosts();
                setSubmitted(false);
            })
            .catch(error => {
                console.error("Axios Error :", error);
            });
    }

    const deletePost = (data) => {
        Axios.post('http://localhost:3001/api/deletepost', data)
            .then(() => {
                getPosts();
            })
            .catch(error => {
                console.error("Axios Error :", error);
            });
    }

    return(
    <Box
        sx={{
            width: 'calc(100% - 100px)',
            margin: 'auto',
            marginTop: '100px'
        }}
    >
        <UserForm
            addPost = {addPost}
            updatePost={updatePost}
            submitted={submitted}
            data={selectedUser}
            isEdit={isEdit}



        />
        <UsersTable 
        rows={posts}
        selectedUser={data => {
            setSelectedUser(data);
            setIsEdit(true);
        }}
        deleteUser={data => window.confirm('Are you sure') && deletePost(data)}
        />
    </Box>

    );
}

export default Posts;
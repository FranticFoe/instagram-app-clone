import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {
        id: 1,
        image: "https://picsum.photos/id/123/500/500",
        description: "Post 1 description",
        date: new Date().toISOString(),
        likes: 15,
        comments: 5,
    },
    {
        id: 2,
        image: "https://picsum.photos/id/124/500/500",
        description: "Post 2 description",
        date: new Date().toISOString(),
        likes: 30,
        comments: 10,
    },
];

const postsSlice = createSlice({
    name: "posts",
    initialState: initialState,
    reducers: {
        createPost: (state, action) => {
            const newPosts = {
                id: Date.now(),
                image: action.payload.image,
                description: action.payload.description,
                date: new Date().toISOString(),
                likes: 0,
                comments: 0,
            }
            state.forEach(post2 => console.log(post2))
            state.push(newPosts);
        },
        updatePost: (state, action) => {
            console.log(state)
            const index = state.findIndex((post) => post.id === action.payload.id);
            state[index] = action.payload;

        },

        deletePost: (state, action) => {
            console.log('>', action.payload.id)
            state.forEach(post2 => console.log(post2))
            state = [{
                id: 2,
                image: "https://picsum.photos/id/124/500/500",
                description: "Post 2 description",
                date: new Date().toISOString(),
                likes: 30,
                comments: 10,
            }]
            // const updatedPosts = state.filter((post) => post.id !== action.payload.id);
            // state = updatedPosts
            // console.log(action.payload.id)
            // console.log('updatedPosts', JSON.parse(updatedPosts[0]))

        }
    }
});

export const { createPost, updatePost, deletePost } = postsSlice.actions;

export default postsSlice.reducer;
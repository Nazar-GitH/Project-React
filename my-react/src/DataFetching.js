import React, { useState, useEffect } from "react";
import axios from 'axios'

function DataFetching() {

    const [id, setId] = useState(1)
    const [post, setPost] = useState({})
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                setPost(res.data)
            })
    }, [idFromButtonClick])

    useEffect(() => {
        const raw = localStorage.getItem('id') || []
        setId(JSON.parse(raw))
    }, [])

    useEffect(() => {
        localStorage.setItem('id', JSON.stringify(id))
    }, [id])

    useEffect(() => {
        const reb = localStorage.getItem('idFromButtonClick') || []
        setIdFromButtonClick(JSON.parse(reb))
    }, [])

    useEffect(() => {
        localStorage.setItem('idFromButtonClick', JSON.stringify(idFromButtonClick))
    }, [idFromButtonClick])

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    return (
        <div>
            <input type='text' value={id} onChange={e => setId(e.target.value)}></input>
            <button onClick={handleClick}>Push button</button>
            <div>{post.title}</div>
        </div>
    )
}

export default DataFetching
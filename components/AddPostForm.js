import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


// nanoid generates a randon id

import { postAdded } from '../redux/features/postsSlice'
import { selectAllUsers } from "../redux/features/usersSlice"

const AddPostForm = () => {

    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const [userId, setUserId] = useState('')

    const users = useSelector( selectAllUsers )

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const onAuthorChanged = e => setUserId(e.target.value)

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded(title, content, userId)
            )
            setTitle('')
            setContent('')
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))


  return (
    <section className='text-gray-200 border border-blue-400 rounded-md p-3 mt-2 mb-8'>
            <h2 className='text-blue-400 text-2xl font-bold mb-3'>Add a New Post</h2>
            <form >
                <div className='flex flex-col space-y-4'>
                <div className='flex flex-col'>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                className='text-gray-800 pl-2'
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                </div>
                <div className='flex flex-col'>
                <label htmlFor="postAuthor">Author:</label>
                <select
                    className='text-gray-800'
                 id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {usersOptions}
                </select>
                </div>
                
                <div className='flex flex-col'>
                <label htmlFor="postContent">Content:</label>
                <textarea
                className='text-gray-800 pl-2'
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                </div>
                <div>
                <button
                disabled={!canSave}
                type="button"
                onClick={onSavePostClicked}
                           

                className='px-8 py-3 text-white bg-blue-400 rounded focus:outline-none disabled:opacity-50'
                    
                >    
                    
                Save Post</button>
                </div>
                </div>
                
            </form>
        </section>
  )
}

export default AddPostForm

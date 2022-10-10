import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from "@reduxjs/toolkit"

// nanoid generates a randon id

import { postAdded } from '../redux/features/postsSlice'

const AddPostForm = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded({id: nanoid(),title, content})
            )
            setTitle('')
            setContent('')
        }
    }


  return (
    <section className='text-gray-200 border border-blue-400 rounded-md p-3 mt-2 mb-8'>
            <h2 className='text-blue-400 text-2xl font-bold mb-3'>Add a New Post</h2>
            <form>
                <div className='flex flex-col space-y-4'>
                <div className='flex flex-col'>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                </div>
                
                <div className='flex flex-col'>
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                </div>
                <div>
                <button
                onClick={onSavePostClicked}
                

                className='bg-green-100 rounded-md
                     px-2 py-1 text-blue-400'
                    type="button"
                    
                >Save Post</button>
                </div>
                </div>
                
            </form>
        </section>
  )
}

export default AddPostForm

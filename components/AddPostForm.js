import React, { useState } from 'react'

const AddPostForm = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    
    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

  return (
    <section className='text-gray-200 border border-blue-400 rounded-md p-3 m-2'>
            <h2 className='text-blue-400 text-2xl font-bold mb-3'>Add a New Post</h2>
            <form>
                <div className='flex flex-col space-y-4'>
                <div className='flex flex-col'>
                <label for="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                </div>
                
                <div className='flex flex-col'>
                <label for="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                </div>
                <div>
                <button
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

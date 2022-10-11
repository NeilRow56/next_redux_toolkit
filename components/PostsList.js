import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts } from '../redux/features/postsSlice'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'

const PostsList = () => {

    const posts = useSelector(selectAllPosts)

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map((post) => (
        <article className='border border-gray-200 rounded-md m-2 max-w-[600px] ' key={post.id}>
            <h3 className='text-2xl text-gray-200 font-bold px-5 py-2'>{post.title}</h3>
            {/* First 100 posts */}
            <p className='text-gray-200 px-5 py-2 '>{post.content.substring(0, 100)}</p>
            <p className='text-gray-200 px-5 py-2 '>
              <PostAuthor userId={post.userId} />
              <TimeAgo timestamp={post.date} />

            </p>
        </article>
    ))
  return (
    <section className='items-center mx-auto'>
        <h2 className='text-4xl font bold text-orange-600'>Posts</h2>
        {renderedPosts}
    </section>
    
  )
}

export default PostsList

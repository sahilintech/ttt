import React, { useState } from 'react'
import { blogs } from '../data'

const Blog = () => {
    return (
        <>
            <section className="blog-section">
                {blogs.map((blog, index) => (
                    <BlogPost key={blog.id} blog={blog} />
                ))}
            </section>
        </>
    )
}

const BlogPost = ({ blog }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleExpand = () => {
        setIsExpanded(!isExpanded)
    }

    const wordCount = blog.content.split(/\s+/).length;

    return (
        <div className="blog">
            <div className="blog-header">
                <h2 className="blog-title">{blog.title}</h2>
                <i
                    className={blog.likeIcon}
                    style={{
                        '--fa-primary-color': '#c7b01f',
                        '--fa-secondary-color': '#c7b01f',
                    }}
                ></i>

            </div>
            <p className={`blog-content ${isExpanded ? 'expanded' : ''}`}>
                {isExpanded ? blog.content : `${blog.content.slice(0, 300)}...`}
            </p>
            {wordCount > 50 && (
                <button className="expand-button" onClick={toggleExpand}>
                    {isExpanded ? 'Read less' : 'Read more'}
                </button>
            )}
            <div className="blog-footer">
                <div className="author-info">
                    <span className="blog-type">{blog.type} </span>
                    <span className="author-name">&nbsp; by {blog.author}</span>
                </div>
                <div className="blog-stats">
                    <span className="blog-date">{blog.dated}</span>
                    <span className="time-to-read">{blog.time} mins Read</span>
                    <span className="views-count">{blog.viewCount} views</span>
                </div>
            </div>
        </div>
    )
}

export default Blog

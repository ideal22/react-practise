import React from 'react'
import CustomLink from '../sharing/CustomLink'

function Header() {
  console.log('test branch changes')
  return (
    <header className="header">
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/about">About</CustomLink>
      <CustomLink to="/posts">Posts</CustomLink>
      <CustomLink to="/comments">Comments</CustomLink>
      <CustomLink to="/photos">Photos</CustomLink>
    </header>
  )
}

export default Header

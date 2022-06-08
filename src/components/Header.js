import React from 'react'
import CustomLink from '../sharing/CustomLink'

function Header() {
  return (
    <header className="header">
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/about">About</CustomLink>
      <CustomLink to="/posts">Posts</CustomLink>
      <CustomLink to="/comments">Comments</CustomLink>
      <CustomLink to="/photos">Photos</CustomLink>
      <CustomLink to="/goods">Goods</CustomLink>
    </header>
  )
}

export default Header

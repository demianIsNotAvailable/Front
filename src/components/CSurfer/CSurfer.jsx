import React from 'react'
import { useNavigate } from 'react-router';

export const CSurfer = (
  {
    content,
    path
  }
) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(path)}> { content} </div>
  )
}

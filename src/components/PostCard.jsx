import React from 'react'
import appwriteService from "../appwrite/conf"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="block group cursor-pointer">
        <div className='w-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300 ease-out hover:-translate-y-1.5 border border-stone-100'>
            
            <div className='w-full aspect-square overflow-hidden relative bg-stone-100'>
                <img 
                    src={appwriteService.getFilePreview(featuredImage)} 
                    alt={title}
                    className='w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105' 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
            </div>
            
            <div className='p-5'>
                <h2 className='text-xl font-bold text-stone-800 leading-snug group-hover:text-amber-600 transition-colors duration-300 line-clamp-2'>
                    {title}
                </h2>
                
                <div className='mt-4 flex items-center text-sm font-medium text-stone-500 group-hover:text-amber-600 transition-colors duration-300'>
                    Read Article
                    <svg 
                        className="w-4 h-4 ml-1.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out" 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </div>
            </div>

        </div>
    </Link>
  )
}

export default PostCard
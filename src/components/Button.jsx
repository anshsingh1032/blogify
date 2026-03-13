import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-stone-800', 
    textColor = 'text-white',
    className = '',
    ...props
}) {
  return (
    <button 
        type={type}
        className={`
            inline-flex items-center justify-center px-6 py-2.5 rounded-lg
            text-sm font-medium tracking-wide
            transition-all duration-300 ease-out
            hover:-translate-y-0.5 hover:shadow-lg hover:shadow-stone-900/20 hover:bg-stone-700
            active:translate-y-0 active:scale-95 active:shadow-sm
            focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2
            ${bgColor} ${textColor} ${className}
        `} 
        {...props}
    >
        {children}
    </button>
  )
}

export default Button
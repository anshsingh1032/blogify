import React, {useId} from 'react'

const Input = React.forwardRef(function Input({
    label,
    type="text",
    className="",
    ...props
},ref)
   {
    const id = useId()
     return(
        <div className='w-full'>
            {label && <label
            className='inline-block mb-1 pl-1'
            htmlFor={id}>{label}</label>
        }
        <input
        type={type}
        className= {`w-full px-4 py-3 rounded-xl bg-stone-50/50 text-stone-800 placeholder-stone-400 border border-white/80 shadow-inner transition-all duration-300 focus:outline-none focus:bg-white focus:border-stone-300 focus:shadow-md ${className}`}
        ref={ref}
        {...props}
        id={id}
        />

        </div>
     )
    }
)

export default Input

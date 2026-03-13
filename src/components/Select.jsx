import React,{useId} from 'react'

function Select({
    options,
    label,
    className,
    ...props
},ref) {
    const id =useId()
  return (
    <div className = 'w-full'>
      {label && <label htmlFor={id} className=''></label>}

      <select
      {...props}
      id={id}
      ref={ref}
      className={`w-full px-4 py-3 rounded-xl bg-stone-50/50 text-stone-800 placeholder-stone-400 border border-white/80 shadow-inner transition-all duration-300 focus:outline-none focus:bg-white focus:border-stone-300 focus:shadow-md ${className}`}
      >
        {options?.map((option)=>(
            <option key={option} value={option}>
                {option}
            </option>
        ))}
      </select>
          
    </div>
  )
}

export default React.forwardRef(Select)
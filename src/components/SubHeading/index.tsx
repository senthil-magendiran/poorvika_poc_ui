import React from 'react'

type TsubHeading = {
    text: string
}

const SubHeading: React.FC<TsubHeading> = ({text}) => <h1 className='font-medium w-full text-center text-sm underline'>{text}</h1>

export default SubHeading 

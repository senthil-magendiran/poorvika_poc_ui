import React from 'react'

type THeading = {
    text : string
}

const Heading: React.FC<THeading> = ({text}) => <h1 className='font-medium w-full text-center py-10 text-lg'>{text}</h1>


export default Heading

import React from 'react'

type TEvaluationProps = {
    title: string, 
    Items: string[]
}

const EvaluationInfo: React.FC<TEvaluationProps> = ( {title, Items}) => {
    return (
        <div>
            <div className="flex items-center px-8 py-3">
            <h1 className='text-sm'>{title}</h1>
          </div>
          <div className='eval-info'>
            {Items?.map((item: string) => {
              return item ? <li className="px-10 py-1 text-xs">{item}</li>: <></>
            })}
          </div>
        </div>
    )
}

export default EvaluationInfo

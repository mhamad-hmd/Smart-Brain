import React from 'react';
import "./imageLinkForm.css"

const ImageLinkForm = ({onButtonSubmit, onInputChange}) => {
    return (
        <div className=''>
            <p className='text-xl p-1 text-white'>
                {'This magic Brain Will detect Faces in your pictures. Give it a try'}
            </p>
            <div className='flexCenter '>
                <div className='flexCenter form p-7 m-4 rounded-lg shadow-2xl '>
                    <input className='text-4 shadow-xl focuse:outline-white  border border-inherit w-3/5 rounded  py-2 focus:outline-none focus:ring-1 focus:ring-sky-500  center ' type="text" onChange={onInputChange}  />
                    <button className='w-2/5 shadow-2xl ml-1 rounded text-xl  border-inherit text-white hover:scale-105 transition ease-in hover:origin-center focus:outline-none focus:border-blue-400 py-1 text-4 inline-block white bg-purple-600  cursor:pointer 
                     ' onClick={ onButtonSubmit}>
                        Detect
                        </button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm
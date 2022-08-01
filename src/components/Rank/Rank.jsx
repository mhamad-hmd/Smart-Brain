import React from 'react';

const Rank = ({name, entries}) => {
    return (
        <div>
            <div className='text-3xl text-white'>
                {/* displayin the user name */}
                {name +', your current rank is...'}
            </div>
            <div className='text-4xl text-white'>
               {/* displayin the rank as his entries number */}
                {entries}
            </div>
        </div>
    )
}

export default Rank
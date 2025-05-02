import React, { use } from 'react';
import Marquee from 'react-fast-marquee';
const breakingPomise=fetch('/news.json').then(res=>res.json())
const Hilight = () => {
    const data=use(breakingPomise);
     const today=data.filter(singleData=>singleData.others.is_today_pick == true)
    
    return (
        <div className='flex items-center gap-3 bg-base-300 p-2'>
            <p className='bg-secondary p-2 text-base-100'>Laest </p>
            <Marquee className=''>
                {
                    today.map(t=><p className='text-red-300 mr-3 font-bold'>* {t.title} *</p>)
                }
            
            </Marquee>
            
        </div>
    );
};

export default Hilight;
import React from 'react'
import galleryImges from './galleryImages'
import Masonry,{ ResponsiveMasonry} from 'react-responsive-masonry'

function MasonryImagesGallery() {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350:1,768:3,992:4}}  >
        <Masonry gutter='1rem'  >
{
    galleryImges.map((item,index)=>(
        <img className='masonry__img ' 
        src={item} key={index} alt="" style={{width:'100%',display:'block',borderRadius:'10px' 
        }}></img>
    ))
}
        </Masonry>

    </ResponsiveMasonry>
  )
}

export default MasonryImagesGallery
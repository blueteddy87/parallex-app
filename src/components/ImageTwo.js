import { Parallax } from 'react-parallax';
import Nasa from '../asset/zoltan-tasi-HQPJEEjHqSE-unsplash.jpg'

const ImageTwo = () => (
    <Parallax className='image' bgImage={Nasa} strength={800}>
        <div className='content'>
            <span className='img-txt'>a trip to space</span>

        </div>
    </Parallax>
);


export default ImageTwo
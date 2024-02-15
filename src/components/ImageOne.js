import { Parallax } from 'react-parallax';
import Nasa from '../asset/nasa-Q1p7bh3SHj8-unsplash.jpg'

const ImageOne = () => (
    <Parallax className='image' bgImage={Nasa} strength={800}>
        <div className='content'>
            <span className='img-txt'>a trip to space</span>

        </div>
    </Parallax>
);


export default ImageOne
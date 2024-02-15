import { Parallax } from 'react-parallax';
import Nasa from '../asset/nasa-CpHNKNRwXps-unsplash.jpg'

const ImageTree = () => (
    <Parallax className='image' bgImage={Nasa} strength={800}>
        <div className='content'>
            <span className='img-txt'>a trip to space</span>

        </div>
    </Parallax>
);


export default ImageTree
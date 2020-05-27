import One from '../assets/avatar/1.jpg';
import Two from '../assets/avatar/2.jpg';
import Three from '../assets/avatar/3.jpg';
import Four from '../assets/avatar/4.jpg';
import Five from '../assets/avatar/5.jpg';
import Six from '../assets/avatar/6.jpg';

const images: Array<any> = [One, Two, Three, Four, Five, Six];

export const _justRandomize = () =>
    images[Math.floor(Math.random() * images.length)];

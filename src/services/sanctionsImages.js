
import imagesJson from './sanctionsImages.json';

const images = imagesJson;

const replacingImages = (id) => {
    if (id in images) {
        return {
            thumbnail: images[id].thumbnail, 
            screenshots: images[id].screenshots
        };
    } else {
        return {
            thumbnail: images['000'].thumbnail, 
            screenshots: images['000'].screenshots
        };
    }
}

export default replacingImages;


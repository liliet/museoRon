import { GalleryImage } from './gallery-image';

const imgsBasePath = 'assets/';
export const imgsPath = {
    historia: []
};
// Historia
const imgsHistoryBasePath = `${imgsBasePath}historia/`;
imgsPath.historia = [
    new GalleryImage(`${imgsHistoryBasePath}historia1.jpg`, 'Ruta de la caña de azúcar'),
    new GalleryImage(`${imgsHistoryBasePath}historia2.jpg`, 'Cunyanya'),
    new GalleryImage(`${imgsHistoryBasePath}historia3.jpg`, 'Ruta de la caña de azúcar'),
    new GalleryImage(`${imgsHistoryBasePath}historia4.jpg`, 'Cunyanya')
];

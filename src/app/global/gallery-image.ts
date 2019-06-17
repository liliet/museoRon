export class GalleryImage {
    public constructor(
        public id: number,
        public src: string,
        public label = '',
        public templateType: '' | 'zoom' | 'evolución' | 'alambique' = ''
    ) {}
}

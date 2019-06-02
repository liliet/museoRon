export class MenuItem{
    public constructor(
        public id: number,
        public text: string,
        public route: string,
        public selected: boolean = false
    ) {}
}
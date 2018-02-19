export class Categoria {
    constructor(pNombre: string) {
        this.name='categoria';
        this.value = pNombre;
        this.type='checkbox';
        this.class='transparent';
        this.id = 'cat' + pNombre;
    }

    name: String;
    value: String;
    type: String;
    class: string;
    id: String;
    
}
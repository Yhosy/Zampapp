import{ Categoria} from './categoria'

export class Busqueda {
    constructor() {
        this.categoria=[];
        this.cantidad=[];
        this.preferencia=[];
        this.temperatura=[];
        this.picante=[];
        this.precio=0;
        this.proximidad=0;
    }

    categoria: any;
    cantidad: any;
    preferencia: any;
    temperatura: any;
    picante: any;
    precio:number;
    proximidad: number;
}
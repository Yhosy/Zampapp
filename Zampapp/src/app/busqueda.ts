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

    categoria: string[];
    cantidad: string[];
    preferencia: string[];
    temperatura: string[];
    picante: string[];
    precio:number;
    proximidad: number;

}
import { Products } from "core/domain/products";
import { Observable } from "rxjs";

export interface IProductContract{
    getProductAll() : Observable<Products[]>
    getRandomsProducts(): Observable<Products[]>
}
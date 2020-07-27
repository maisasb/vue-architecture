import BaseRepository from "../../interfaces/BaseRepository";
import store from "../../store";
import { Product } from "./domain";

export default class ProductRepository implements BaseRepository {
    async getAll (): Promise<Product[]> {
        return store.getters["product/getProducts"];
    }

    async add (product: Product): Promise<void> {
        store.dispatch("product/addProduct", product);
    }

    async delete (uuid: string): Promise<void> {
        store.dispatch("product/deleteProduct", uuid);
    }

    async edit (product: Product): Promise<void> {
        store.dispatch("product/editProduct", product);
    }
}

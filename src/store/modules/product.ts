import { Product } from "../../pages/Product/domain";

export default {
    namespaced: true,
    state: {
        products: [] as Product[]
    },
    actions: {

        addProduct (context: any, product: Product) {
            context.commit("addProduct", product)
        },
        deleteProduct (context: any, uuid: string) {
            context.commit("deleteProduct", uuid)
        },
        editProduct (context: any, product: Product) {
            context.commit("editProduct", product)
        }
    },
    mutations: {
        addProduct (state: { products: Product[] }, product: Product) {
            state.products.push(product)
        },
        deleteProduct (state: { products: Product[] }, uuid: string) {
            state.products = state.products.filter(product => product.uuid !== uuid)
        },
        editProduct (state: { products: Product[] }, product: Product) {
            const index = state.products.findIndex(state => state.uuid === product.uuid)
            state.products[index] = product
        }
    },
    getters: {
        getProducts: (state: { products: Product[] }) => {
            return state.products
        }
    }
};

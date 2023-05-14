import { createProduct, getAllProducts, getProductsByCategoryId, getProductById} from "../datastores/product.datastore";

export const createProductController = async(req, res) => {
    const{name,price,discount,pictureUrl,description,categoryId} = req.body;
    const product = await createProduct(name,price,discount,pictureUrl,description,categoryId);
    return res.status(201).json(product);
}

export const getAllProductsController = async(req, res) => {
    const products = await getAllProducts();
    return res.status(200).json(products);
} 

export const getProductByIdController = async(req, res) => {
    const id = parseInt(req.params.id)
    const product = await getProductById(id);
    return res.status(200).json(product);
}

export const getProductsByCategoryIdController = async (req, res) => {
    const categoryId = req.params.categoryId;
    const product = await getProductsByCategoryId(categoryId)
    return res.status(200).json(product);
} 
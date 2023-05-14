import { createCategory, getAllCategories,  getCategoryById} from "../datastores/category.datastore";

export const createCategoryController = async(req,res) => {
    const{name, description, banner} = req.body;
    const category = await createCategory(name, description, banner);
    return res.status(201).json(category); 
}

export const getAllCategoriesController = async(req,res) => {
    const categories = await getAllCategories();
    return res.status(200).json(categories);
}

export const getCategoryByIdController = async(req, res) => {
    const id = parseInt(req.params.id);
    const category = await getCategoryById(id);
    return res.status(200).json(category);
}
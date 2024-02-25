import Product from '../models/products.js'

export const getAllProducts = async (req, res) => {
    const { company, name, featured, sort, select } = req.query;
    const queryObject = {};
    if (company) {
        queryObject.company = company;
    }
    if (name) {
        queryObject.name = { $regex: name, $options: "i" };
    }
    if (featured) {
         queryObject.featured = featured;
    }
    let apiData = Product.find(queryObject);

    if (sort) {
        let sortFix = sort.replace(',', '')
        apiData = apiData.sort(sortFix);
    }

    if (select) {
      let selectFix = select.split(',').join(' ');
      apiData = apiData.select(selectFix);
    }

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 3;

    const skip = (page - 1) * limit;

    apiData = apiData.skip(skip).limit(limit)

    const productData = await apiData;
    res.status(200).json({ productData });
}

export const getAllProductsTesting = async (req, res) => {
  res.status(200).json({ msg: "I am getting all products testing" });
};



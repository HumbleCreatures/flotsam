import { useEffect } from 'react';
import { getCategoryByName } from '@flotsam/flotsam-shared';

const AssignmentTest = () => {

    useEffect(() => {
        const loadData = async () => {
            const products = await (await fetch("https://fakestoreapi.com/products")).json();
            const productsWithCategories = await Promise.all(products.map(async (product: any) => {
                const categoryForProduct: any = await getCategoryByName(product.category);
                categoryForProduct.productCount = products.filter((product: any) => product.category === categoryForProduct.name).length
                return { ...product, category: categoryForProduct }
            }));
        }
        loadData();
    }, [])

    return <>Assignment test, check the log.</>
}

export default AssignmentTest;
import { useEffect } from 'react';
import { getCategoryByName } from '@flotsam/flotsam-shared';

const AssignmentTest = () => {

type CategoryWithCount = {
    name: string,
    id: number,
    productCount: number
}

    useEffect(() => {
        const loadData = async () => {
            const products = await (await fetch("https://fakestoreapi.com/products")).json();
            const productsWithCategories = await Promise.all(products.map(async (product: any) => {
                const categoryForProduct = await getCategoryByName(product.category) as CategoryWithCount;
                categoryForProduct.productCount = products.filter((product: any) => product.category === categoryForProduct.name).length
                return { ...product, category: categoryForProduct }
            }));
            console.log(productsWithCategories.sort((a, b) => a.category.name.localeCompare(b.category.name) || a.title.localeCompare(b.title)));
        }
        loadData();
    }, [])

    return <>Assignment test, check the log.</>
}

export default AssignmentTest;
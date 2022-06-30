import {getProductData} from '../repository/getProductData';

export async function getProductContentData() {
    let productContentData = await getProductData();

    return productContentData;
}

export function getProductItemsData(pageContent) {
    let contents = pageContent;
    return contents;
}

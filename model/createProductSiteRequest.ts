/**
 * ManageSpace Commerce API
 * ManageSpace Commerce API Documentation
 *
 * The version of the OpenAPI document: 0.0.11-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class CreateProductSiteRequest {
    /**
    * The identifier of the product.
    */
    'productId': string;
    /**
    * The price of the product in the smallest currency unit (e.g. cents for USD).
    */
    'price': number;
    /**
    * Quantity/stock
    */
    'stock'?: number;
    /**
    * Reorder level
    */
    'reorderLevel'?: number;
    /**
    * Currency code
    */
    'currency'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "productId",
            "baseName": "productId",
            "type": "string"
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number"
        },
        {
            "name": "stock",
            "baseName": "stock",
            "type": "number"
        },
        {
            "name": "reorderLevel",
            "baseName": "reorderLevel",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateProductSiteRequest.attributeTypeMap;
    }
}

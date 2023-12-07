/**
 * ManageSpace Commerce API
 * ManageSpace Commerce API Documentation
 *
 * The version of the OpenAPI document: 0.0.12-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { ProductResponse } from './productResponse';
import { SubscriptionProductResponse } from './subscriptionProductResponse';

export class ProductCategoryResponse {
    /**
    * The unique identifier for the product category.
    */
    'productCategoryId': string;
    /**
    * The identifier of the organization that the product category belongs to.
    */
    'orgId': string;
    /**
    * The name of the product category.
    */
    'name': string;
    /**
    * The display order of the product category.
    */
    'displayOrder': number;
    /**
    * The products in this product category.
    */
    'items': Array<ProductResponse>;
    /**
    * The subscription products in this product category.
    */
    'subscriptionItems': Array<SubscriptionProductResponse>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "productCategoryId",
            "baseName": "productCategoryId",
            "type": "string"
        },
        {
            "name": "orgId",
            "baseName": "orgId",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "displayOrder",
            "baseName": "displayOrder",
            "type": "number"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<ProductResponse>"
        },
        {
            "name": "subscriptionItems",
            "baseName": "subscriptionItems",
            "type": "Array<SubscriptionProductResponse>"
        }    ];

    static getAttributeTypeMap() {
        return ProductCategoryResponse.attributeTypeMap;
    }
}


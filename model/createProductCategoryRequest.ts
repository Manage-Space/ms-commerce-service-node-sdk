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
import { ProductItemRequest } from './productItemRequest';
import { SubscriptionProductItemRequest } from './subscriptionProductItemRequest';

export class CreateProductCategoryRequest {
    /**
    * The name of the product category.
    */
    'name': string;
    /**
    * The display order of the product category.
    */
    'displayOrder'?: number;
    /**
    * Products to be created within the category.
    */
    'items'?: Array<ProductItemRequest>;
    /**
    * Subscription products to be created within the category.
    */
    'subscriptionItems'?: Array<SubscriptionProductItemRequest>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "type": "Array<ProductItemRequest>"
        },
        {
            "name": "subscriptionItems",
            "baseName": "subscriptionItems",
            "type": "Array<SubscriptionProductItemRequest>"
        }    ];

    static getAttributeTypeMap() {
        return CreateProductCategoryRequest.attributeTypeMap;
    }
}

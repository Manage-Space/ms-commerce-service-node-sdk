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

export class UpdateSubscriptionProductRequest {
    /**
    * Subscription product Name
    */
    'name'?: string;
    /**
    * Subscription product Description
    */
    'description'?: string;
    /**
    * Product Category ID
    */
    'productCategoryId'?: string;
    /**
    * Image path for the subscription product
    */
    'imagePath'?: string;
    /**
    * Meta Data
    */
    'metaData'?: object;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "productCategoryId",
            "baseName": "productCategoryId",
            "type": "string"
        },
        {
            "name": "imagePath",
            "baseName": "imagePath",
            "type": "string"
        },
        {
            "name": "metaData",
            "baseName": "metaData",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return UpdateSubscriptionProductRequest.attributeTypeMap;
    }
}


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

export class SubscriptionProductResponse {
    /**
    * Id of the subscription product
    */
    'subscriptionProductId': string;
    /**
    * Name of the subscription product
    */
    'name': string;
    /**
    * Description of the Subscription product
    */
    'description': string;
    /**
    * Path to an image of the subscription product
    */
    'imagePath': string | null;
    /**
    * Product Category Id
    */
    'productCategoryId': string;
    /**
    * Meta Data
    */
    'metaData': object;
    /**
    * Time of creation
    */
    'createdAt': Date;
    /**
    * userId of who created the product
    */
    'createdBy': string;
    /**
    * Time of the last update
    */
    'updatedAt': Date | null;
    /**
    * userId of who updated the product
    */
    'updatedBy': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "subscriptionProductId",
            "baseName": "subscriptionProductId",
            "type": "string"
        },
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
            "name": "imagePath",
            "baseName": "imagePath",
            "type": "string"
        },
        {
            "name": "productCategoryId",
            "baseName": "productCategoryId",
            "type": "string"
        },
        {
            "name": "metaData",
            "baseName": "metaData",
            "type": "object"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "createdBy",
            "baseName": "createdBy",
            "type": "string"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        },
        {
            "name": "updatedBy",
            "baseName": "updatedBy",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionProductResponse.attributeTypeMap;
    }
}


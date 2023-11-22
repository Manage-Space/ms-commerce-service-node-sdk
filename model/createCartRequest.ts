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

export class CreateCartRequest {
    /**
    * Account ID
    */
    'accountId'?: string;
    /**
    * Payment provider ID
    */
    'paymentProviderId'?: string;
    /**
    * Currency code
    */
    'currency'?: string;
    /**
    * Notes about the shopping cart.
    */
    'notes'?: string;
    /**
    * Comments about the shopping cart.
    */
    'comments'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountId",
            "baseName": "accountId",
            "type": "string"
        },
        {
            "name": "paymentProviderId",
            "baseName": "paymentProviderId",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "notes",
            "baseName": "notes",
            "type": "string"
        },
        {
            "name": "comments",
            "baseName": "comments",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateCartRequest.attributeTypeMap;
    }
}

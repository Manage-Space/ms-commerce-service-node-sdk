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

export class CheckoutRequest {
    /**
    * Site ID
    */
    'siteId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "siteId",
            "baseName": "siteId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CheckoutRequest.attributeTypeMap;
    }
}


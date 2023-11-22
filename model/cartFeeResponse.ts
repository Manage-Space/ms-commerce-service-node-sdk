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
import { FeeResponse } from './feeResponse';

export class CartFeeResponse {
    /**
    * Cart Fee ID
    */
    'cartFeeId': string;
    /**
    * Org ID
    */
    'orgId': string;
    /**
    * Site ID
    */
    'siteId': string;
    /**
    * Cart ID
    */
    'cartId': string;
    'fee': FeeResponse;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cartFeeId",
            "baseName": "cartFeeId",
            "type": "string"
        },
        {
            "name": "orgId",
            "baseName": "orgId",
            "type": "string"
        },
        {
            "name": "siteId",
            "baseName": "siteId",
            "type": "string"
        },
        {
            "name": "cartId",
            "baseName": "cartId",
            "type": "string"
        },
        {
            "name": "fee",
            "baseName": "fee",
            "type": "FeeResponse"
        }    ];

    static getAttributeTypeMap() {
        return CartFeeResponse.attributeTypeMap;
    }
}

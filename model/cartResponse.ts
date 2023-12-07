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
import { CartLeaseItemResponse } from './cartLeaseItemResponse';
import { CartProductItemResponse } from './cartProductItemResponse';
import { CartStatusResponse } from './cartStatusResponse';

export class CartResponse {
    /**
    * Cart ID
    */
    'cartId': string;
    /**
    * Org ID
    */
    'orgId': string;
    /**
    * User ID
    */
    'userId': string;
    /**
    * Account ID
    */
    'accountId': string;
    'status': CartStatusResponse;
    /**
    * Currency code
    */
    'currency': string;
    /**
    * Stripe Client Secret.
    */
    'clientSecret': string | null;
    'notes': string;
    'comments': string;
    'shoppingCartLeaseItems': Array<CartLeaseItemResponse>;
    'shoppingCartItems': Array<CartProductItemResponse>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cartId",
            "baseName": "cartId",
            "type": "string"
        },
        {
            "name": "orgId",
            "baseName": "orgId",
            "type": "string"
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string"
        },
        {
            "name": "accountId",
            "baseName": "accountId",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "CartStatusResponse"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "clientSecret",
            "baseName": "clientSecret",
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
        },
        {
            "name": "shoppingCartLeaseItems",
            "baseName": "shoppingCartLeaseItems",
            "type": "Array<CartLeaseItemResponse>"
        },
        {
            "name": "shoppingCartItems",
            "baseName": "shoppingCartItems",
            "type": "Array<CartProductItemResponse>"
        }    ];

    static getAttributeTypeMap() {
        return CartResponse.attributeTypeMap;
    }
}


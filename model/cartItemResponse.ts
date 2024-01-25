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
import { CartItemStatus } from './cartItemStatus';
import { ProductResponse } from './productResponse';
import { ProductSiteResponse } from './productSiteResponse';

export class CartItemResponse {
    /**
    * Cart Item ID
    */
    'cartItemId': string;
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
    'product': ProductResponse;
    'productSite': ProductSiteResponse;
    /**
    * Quantity
    */
    'quantity': number;
    'cartItemStatus': CartItemStatus;
    /**
    * Total Price of Item(s) including Taxes
    */
    'cartItemPrice': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cartItemId",
            "baseName": "cartItemId",
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
            "name": "product",
            "baseName": "product",
            "type": "ProductResponse"
        },
        {
            "name": "productSite",
            "baseName": "productSite",
            "type": "ProductSiteResponse"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "cartItemStatus",
            "baseName": "cartItemStatus",
            "type": "CartItemStatus"
        },
        {
            "name": "cartItemPrice",
            "baseName": "cartItemPrice",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return CartItemResponse.attributeTypeMap;
    }
}

export namespace CartItemResponse {
}

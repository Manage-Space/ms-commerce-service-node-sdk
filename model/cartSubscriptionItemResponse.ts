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
import { CartSubscriptionItemUnitResponse } from './cartSubscriptionItemUnitResponse';
import { SubscriptionProductResponse } from './subscriptionProductResponse';
import { SubscriptionProductSiteResponse } from './subscriptionProductSiteResponse';

export class CartSubscriptionItemResponse {
    /**
    * Cart Subscription Item ID
    */
    'cartSubscriptionItemId': string;
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
    /**
    * Unit ID
    */
    'unitId': string | null;
    'subscriptionProduct': SubscriptionProductResponse | null;
    'subscriptionProductSite': SubscriptionProductSiteResponse | null;
    'cartSubscriptionUnit': CartSubscriptionItemUnitResponse | null;
    'cartSubscriptionItemStatus': CartItemStatus;
    /**
    * Total Price of Subscription Item
    */
    'cartSubscriptionItemPrice': number;
    /**
    * Meta Data
    */
    'metaData': object | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cartSubscriptionItemId",
            "baseName": "cartSubscriptionItemId",
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
            "name": "unitId",
            "baseName": "unitId",
            "type": "string"
        },
        {
            "name": "subscriptionProduct",
            "baseName": "subscriptionProduct",
            "type": "SubscriptionProductResponse"
        },
        {
            "name": "subscriptionProductSite",
            "baseName": "subscriptionProductSite",
            "type": "SubscriptionProductSiteResponse"
        },
        {
            "name": "cartSubscriptionUnit",
            "baseName": "cartSubscriptionUnit",
            "type": "CartSubscriptionItemUnitResponse"
        },
        {
            "name": "cartSubscriptionItemStatus",
            "baseName": "cartSubscriptionItemStatus",
            "type": "CartItemStatus"
        },
        {
            "name": "cartSubscriptionItemPrice",
            "baseName": "cartSubscriptionItemPrice",
            "type": "number"
        },
        {
            "name": "metaData",
            "baseName": "metaData",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return CartSubscriptionItemResponse.attributeTypeMap;
    }
}

export namespace CartSubscriptionItemResponse {
}

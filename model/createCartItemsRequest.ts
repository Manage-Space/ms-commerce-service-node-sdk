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
import { CartItem } from './cartItem';

export class CreateCartItemsRequest {
    /**
    * A list of items to be added to the cart.
    */
    'cartItems': Array<CartItem>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cartItems",
            "baseName": "cartItems",
            "type": "Array<CartItem>"
        }    ];

    static getAttributeTypeMap() {
        return CreateCartItemsRequest.attributeTypeMap;
    }
}


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
import { CartLeaseItemRequest } from './cartLeaseItemRequest';

export class AddLeaseItemsRequest {
    /**
    * A list of lease items to be added to the shopping cart.
    */
    'leaseItems': Array<CartLeaseItemRequest>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "leaseItems",
            "baseName": "leaseItems",
            "type": "Array<CartLeaseItemRequest>"
        }    ];

    static getAttributeTypeMap() {
        return AddLeaseItemsRequest.attributeTypeMap;
    }
}

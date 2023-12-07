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

export class UpdateFeeRequest {
    /**
    * The name of the fee.
    */
    'name': string;
    /**
    * A description of the fee.
    */
    'description': string;
    /**
    * A fixed ammount fee to add.
    */
    'fixedAmount'?: number;
    /**
    * A percent fee to add.
    */
    'percentage'?: number;
    /**
    * Standard Fee Type ID
    */
    'standardFeeTypeId': string;

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
            "name": "fixedAmount",
            "baseName": "fixedAmount",
            "type": "number"
        },
        {
            "name": "percentage",
            "baseName": "percentage",
            "type": "number"
        },
        {
            "name": "standardFeeTypeId",
            "baseName": "standardFeeTypeId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UpdateFeeRequest.attributeTypeMap;
    }
}


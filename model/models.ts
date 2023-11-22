import localVarRequest from 'request';

export * from './addLeaseItemsRequest';
export * from './addProductItemsRequest';
export * from './badRequestError400Response';
export * from './badRequestError400ResponseError';
export * from './baseCategory';
export * from './baseError';
export * from './baseProductSite';
export * from './cartFee';
export * from './cartFeeResponse';
export * from './cartItem';
export * from './cartItemResponse';
export * from './cartItemStatus';
export * from './cartItemTaxResponse';
export * from './cartLeaseItemRequest';
export * from './cartLeaseItemResponse';
export * from './cartProductItemRequest';
export * from './cartProductItemResponse';
export * from './cartResponse';
export * from './cartStatus';
export * from './cartStatusResponse';
export * from './cartSubscriptionItem';
export * from './cartSubscriptionItemResponse';
export * from './cartSubscriptionItemUnitResponse';
export * from './cartV2Response';
export * from './checkoutRequest';
export * from './createActiveCartRequest';
export * from './createCartFees201Response';
export * from './createCartFeesRequest';
export * from './createCartItems201Response';
export * from './createCartItemsRequest';
export * from './createCartRequest';
export * from './createCartSubscriptionItems201Response';
export * from './createCartSubscriptionItemsRequest';
export * from './createCategoriesRequest';
export * from './createFeeRequest';
export * from './createProduct201Response';
export * from './createProductCategoryRequest';
export * from './createProductRequest';
export * from './createProductSiteRequest';
export * from './createProductSitesRequest';
export * from './createSubscriptionProduct201Response';
export * from './createSubscriptionProductRequest';
export * from './createSubscriptionProductSiteRequest';
export * from './createSubscriptionProductSitesRequest';
export * from './feeResponse';
export * from './feeTypeResponse';
export * from './forbiddenError403Response';
export * from './forbiddenError403ResponseError';
export * from './getActiveCarts200Response';
export * from './getCartByUserId201Response';
export * from './getFeeTypes200Response';
export * from './getFeesBySite200Response';
export * from './getProductCategories200Response';
export * from './getProductSiteRecords200Response';
export * from './getSubscriptionProductSiteRecords200Response';
export * from './internalServerError500Response';
export * from './internalServerError500ResponseError';
export * from './notFoundError404Response';
export * from './notFoundError404ResponseError';
export * from './omitGenericCreateSubscriptionProductSiteRequestDto';
export * from './productCategoryResponse';
export * from './productItemRequest';
export * from './productResponse';
export * from './productSiteResponse';
export * from './subscriptionProductItemRequest';
export * from './subscriptionProductResponse';
export * from './subscriptionProductSiteResponse';
export * from './unauthorizedError401Response';
export * from './unauthorizedError401ResponseError';
export * from './updateFeeRequest';
export * from './updateProductCategoryRequest';
export * from './updateProductRequest';
export * from './updateProductSiteRequest';
export * from './updateSubscriptionProductRequest';
export * from './updateSubscriptionProductSiteRequest';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AddLeaseItemsRequest } from './addLeaseItemsRequest';
import { AddProductItemsRequest } from './addProductItemsRequest';
import { BadRequestError400Response } from './badRequestError400Response';
import { BadRequestError400ResponseError } from './badRequestError400ResponseError';
import { BaseCategory } from './baseCategory';
import { BaseError } from './baseError';
import { BaseProductSite } from './baseProductSite';
import { CartFee } from './cartFee';
import { CartFeeResponse } from './cartFeeResponse';
import { CartItem } from './cartItem';
import { CartItemResponse } from './cartItemResponse';
import { CartItemStatus } from './cartItemStatus';
import { CartItemTaxResponse } from './cartItemTaxResponse';
import { CartLeaseItemRequest } from './cartLeaseItemRequest';
import { CartLeaseItemResponse } from './cartLeaseItemResponse';
import { CartProductItemRequest } from './cartProductItemRequest';
import { CartProductItemResponse } from './cartProductItemResponse';
import { CartResponse } from './cartResponse';
import { CartStatus } from './cartStatus';
import { CartStatusResponse } from './cartStatusResponse';
import { CartSubscriptionItem } from './cartSubscriptionItem';
import { CartSubscriptionItemResponse } from './cartSubscriptionItemResponse';
import { CartSubscriptionItemUnitResponse } from './cartSubscriptionItemUnitResponse';
import { CartV2Response } from './cartV2Response';
import { CheckoutRequest } from './checkoutRequest';
import { CreateActiveCartRequest } from './createActiveCartRequest';
import { CreateCartFees201Response } from './createCartFees201Response';
import { CreateCartFeesRequest } from './createCartFeesRequest';
import { CreateCartItems201Response } from './createCartItems201Response';
import { CreateCartItemsRequest } from './createCartItemsRequest';
import { CreateCartRequest } from './createCartRequest';
import { CreateCartSubscriptionItems201Response } from './createCartSubscriptionItems201Response';
import { CreateCartSubscriptionItemsRequest } from './createCartSubscriptionItemsRequest';
import { CreateCategoriesRequest } from './createCategoriesRequest';
import { CreateFeeRequest } from './createFeeRequest';
import { CreateProduct201Response } from './createProduct201Response';
import { CreateProductCategoryRequest } from './createProductCategoryRequest';
import { CreateProductRequest } from './createProductRequest';
import { CreateProductSiteRequest } from './createProductSiteRequest';
import { CreateProductSitesRequest } from './createProductSitesRequest';
import { CreateSubscriptionProduct201Response } from './createSubscriptionProduct201Response';
import { CreateSubscriptionProductRequest } from './createSubscriptionProductRequest';
import { CreateSubscriptionProductSiteRequest } from './createSubscriptionProductSiteRequest';
import { CreateSubscriptionProductSitesRequest } from './createSubscriptionProductSitesRequest';
import { FeeResponse } from './feeResponse';
import { FeeTypeResponse } from './feeTypeResponse';
import { ForbiddenError403Response } from './forbiddenError403Response';
import { ForbiddenError403ResponseError } from './forbiddenError403ResponseError';
import { GetActiveCarts200Response } from './getActiveCarts200Response';
import { GetCartByUserId201Response } from './getCartByUserId201Response';
import { GetFeeTypes200Response } from './getFeeTypes200Response';
import { GetFeesBySite200Response } from './getFeesBySite200Response';
import { GetProductCategories200Response } from './getProductCategories200Response';
import { GetProductSiteRecords200Response } from './getProductSiteRecords200Response';
import { GetSubscriptionProductSiteRecords200Response } from './getSubscriptionProductSiteRecords200Response';
import { InternalServerError500Response } from './internalServerError500Response';
import { InternalServerError500ResponseError } from './internalServerError500ResponseError';
import { NotFoundError404Response } from './notFoundError404Response';
import { NotFoundError404ResponseError } from './notFoundError404ResponseError';
import { OmitGenericCreateSubscriptionProductSiteRequestDto } from './omitGenericCreateSubscriptionProductSiteRequestDto';
import { ProductCategoryResponse } from './productCategoryResponse';
import { ProductItemRequest } from './productItemRequest';
import { ProductResponse } from './productResponse';
import { ProductSiteResponse } from './productSiteResponse';
import { SubscriptionProductItemRequest } from './subscriptionProductItemRequest';
import { SubscriptionProductResponse } from './subscriptionProductResponse';
import { SubscriptionProductSiteResponse } from './subscriptionProductSiteResponse';
import { UnauthorizedError401Response } from './unauthorizedError401Response';
import { UnauthorizedError401ResponseError } from './unauthorizedError401ResponseError';
import { UpdateFeeRequest } from './updateFeeRequest';
import { UpdateProductCategoryRequest } from './updateProductCategoryRequest';
import { UpdateProductRequest } from './updateProductRequest';
import { UpdateProductSiteRequest } from './updateProductSiteRequest';
import { UpdateSubscriptionProductRequest } from './updateSubscriptionProductRequest';
import { UpdateSubscriptionProductSiteRequest } from './updateSubscriptionProductSiteRequest';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "CartItemStatus": CartItemStatus,
        "CartStatus": CartStatus,
        "FeeResponse.StandardFeeTypeEnum": FeeResponse.StandardFeeTypeEnum,
        "FeeTypeResponse.CodeNameEnum": FeeTypeResponse.CodeNameEnum,
}

let typeMap: {[index: string]: any} = {
    "AddLeaseItemsRequest": AddLeaseItemsRequest,
    "AddProductItemsRequest": AddProductItemsRequest,
    "BadRequestError400Response": BadRequestError400Response,
    "BadRequestError400ResponseError": BadRequestError400ResponseError,
    "BaseCategory": BaseCategory,
    "BaseError": BaseError,
    "BaseProductSite": BaseProductSite,
    "CartFee": CartFee,
    "CartFeeResponse": CartFeeResponse,
    "CartItem": CartItem,
    "CartItemResponse": CartItemResponse,
    "CartItemTaxResponse": CartItemTaxResponse,
    "CartLeaseItemRequest": CartLeaseItemRequest,
    "CartLeaseItemResponse": CartLeaseItemResponse,
    "CartProductItemRequest": CartProductItemRequest,
    "CartProductItemResponse": CartProductItemResponse,
    "CartResponse": CartResponse,
    "CartStatusResponse": CartStatusResponse,
    "CartSubscriptionItem": CartSubscriptionItem,
    "CartSubscriptionItemResponse": CartSubscriptionItemResponse,
    "CartSubscriptionItemUnitResponse": CartSubscriptionItemUnitResponse,
    "CartV2Response": CartV2Response,
    "CheckoutRequest": CheckoutRequest,
    "CreateActiveCartRequest": CreateActiveCartRequest,
    "CreateCartFees201Response": CreateCartFees201Response,
    "CreateCartFeesRequest": CreateCartFeesRequest,
    "CreateCartItems201Response": CreateCartItems201Response,
    "CreateCartItemsRequest": CreateCartItemsRequest,
    "CreateCartRequest": CreateCartRequest,
    "CreateCartSubscriptionItems201Response": CreateCartSubscriptionItems201Response,
    "CreateCartSubscriptionItemsRequest": CreateCartSubscriptionItemsRequest,
    "CreateCategoriesRequest": CreateCategoriesRequest,
    "CreateFeeRequest": CreateFeeRequest,
    "CreateProduct201Response": CreateProduct201Response,
    "CreateProductCategoryRequest": CreateProductCategoryRequest,
    "CreateProductRequest": CreateProductRequest,
    "CreateProductSiteRequest": CreateProductSiteRequest,
    "CreateProductSitesRequest": CreateProductSitesRequest,
    "CreateSubscriptionProduct201Response": CreateSubscriptionProduct201Response,
    "CreateSubscriptionProductRequest": CreateSubscriptionProductRequest,
    "CreateSubscriptionProductSiteRequest": CreateSubscriptionProductSiteRequest,
    "CreateSubscriptionProductSitesRequest": CreateSubscriptionProductSitesRequest,
    "FeeResponse": FeeResponse,
    "FeeTypeResponse": FeeTypeResponse,
    "ForbiddenError403Response": ForbiddenError403Response,
    "ForbiddenError403ResponseError": ForbiddenError403ResponseError,
    "GetActiveCarts200Response": GetActiveCarts200Response,
    "GetCartByUserId201Response": GetCartByUserId201Response,
    "GetFeeTypes200Response": GetFeeTypes200Response,
    "GetFeesBySite200Response": GetFeesBySite200Response,
    "GetProductCategories200Response": GetProductCategories200Response,
    "GetProductSiteRecords200Response": GetProductSiteRecords200Response,
    "GetSubscriptionProductSiteRecords200Response": GetSubscriptionProductSiteRecords200Response,
    "InternalServerError500Response": InternalServerError500Response,
    "InternalServerError500ResponseError": InternalServerError500ResponseError,
    "NotFoundError404Response": NotFoundError404Response,
    "NotFoundError404ResponseError": NotFoundError404ResponseError,
    "OmitGenericCreateSubscriptionProductSiteRequestDto": OmitGenericCreateSubscriptionProductSiteRequestDto,
    "ProductCategoryResponse": ProductCategoryResponse,
    "ProductItemRequest": ProductItemRequest,
    "ProductResponse": ProductResponse,
    "ProductSiteResponse": ProductSiteResponse,
    "SubscriptionProductItemRequest": SubscriptionProductItemRequest,
    "SubscriptionProductResponse": SubscriptionProductResponse,
    "SubscriptionProductSiteResponse": SubscriptionProductSiteResponse,
    "UnauthorizedError401Response": UnauthorizedError401Response,
    "UnauthorizedError401ResponseError": UnauthorizedError401ResponseError,
    "UpdateFeeRequest": UpdateFeeRequest,
    "UpdateProductCategoryRequest": UpdateProductCategoryRequest,
    "UpdateProductRequest": UpdateProductRequest,
    "UpdateProductSiteRequest": UpdateProductSiteRequest,
    "UpdateSubscriptionProductRequest": UpdateSubscriptionProductRequest,
    "UpdateSubscriptionProductSiteRequest": UpdateSubscriptionProductSiteRequest,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
public accessToken: string | (() => string) = process.env.MS_TOKEN || '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);

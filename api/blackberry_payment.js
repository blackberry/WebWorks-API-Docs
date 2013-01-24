/*
* Copyright 2010-2011 Research In Motion Limited.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
 * @namespace
 * Entry point for purchasing digital goods.
 * <p>
 * API that permits BlackBerry device users to initiate the purchase of digital goods from within your application. For example, this API can be used to allow users to purchase additional levels in a gaming application, music from a radio application, or any other digital good registered on the Vendor Portal for BlackBerry App World. The digital good being purchased must be associated with the calling application in the Vendor Portal for BlackBerry App World.
 * <p>
 * Purchases are initiated via the purchase method. The amount of time that elapses before a response is returned depends on how quickly the user completes the purchase process (which may include steps such as signing in to their BlackBerry ID account and setting up their preferred billing method). The purchase method dispatches a callbackOnSuccess on success, or dispatches a callbackOnFailure on failure.
 * <p>
 * When calling the purchase method only the ID or SKU of the digital good to be purchased is required; it is not necessary to provide both, and all other arguments are optional. If both the ID and SKU are provided, then the ID takes precedence; the SKU is only used if the digital good could not be located on the Payment Service server based on the ID.
 * <p>
 * If an application requires a list of its digital goods that have already been purchased by the user (for example, to avoid offering for sale a digital good the user already owns), such a list can be obtained with the {@link blackberry.payment.getExistingPurchases} method. This method requires the same user interaction as the purchase method, so it can also be a long-running method.
 * @toc {Payment} Payment
 * @featureID blackberry.payment
 */
blackberry.payment = {

    /**
     * @function
     * @name blackberry.payment.getExistingPurchases^2
     * @description Retrieves the previous successful purchases made by the user from within the calling application.
     * @param {Boolean} refresh True if the BlackBerry should retrieve the list of purchases from the Payment Service server. False if the BlackBerry should attempt to use the local purchase history, and only go to the Payment Service server if necessary.
     * @callback {function} onSuccess Function to be invoked on successful call.
     * @callback {Purchase[]} onSuccess.data An array of {@link Purchase} items
     * @callback {function} [onFailure] Function to be invoked when an error occurs.
     * @callback {PaymentError} onFailure.error A {@link PaymentError} object containing details about the error.
     * @BB10X
     * @example
     * &lt;script type="text/javascript"&gt;
     *   function getExistingPurchases() {
     *       try {
     *           blackberry.payment.getExistingPurchases(true, onSuccess, onFailure);
     *       } catch (e) {
     *           alert ("Error" + e);
     *       }
     *   }
     *
     *  function onSuccess(purchases) {
     *      for (var i = 0; i < purchases.length; i++) {
     *          var transId = purchases[i].transactionID;
     *          var sku = purchases[i].digitalGoodSKU;
     *          var dgId = purchases[i].digitalGoodID;
     *          alert("Purchased Item " + i + ": " + transId + "," + sku + "," + dgId);
     *      }
     *  }
     *
     *  function onFailure(err) {
     *      alert("Error occurred: " + err.errorText + ", " + err.errorID);
     *  }
     * &lt;/script&gt;
     */
    getExistingPurchases : function (refresh, onSuccess, onFailure) {
    },
    /**
     * @function
     * @description Retrieves the previous successful purchases made by the user from within the calling application.
     * @param {Boolean} [refresh]  True if the BlackBerry should be allowed to refresh the list of purchases from the Payment Service server. False if the current list of cached purchases should be returned immediately.
     * @callback {function} callbackOnSuccess Function to be invoked on successful call.
     * @callback {String} callbackOnSuccess.data A string representing a literal array of {@link Purchase} items is passed as a parameter in the form below:
     * <pre>[{
     *     "transactionID": "00000001",
     *     "digitalGoodID": "123",
     *     "date": "1234567891011",
     *     "digitalGoodSKU": "SKU_1",
     *     "licenseKey": null,
     *     "metaData": "My Metadata"
     * },
     * {
     *     "transactionID": "00000002",
     *     "digitalGoodID": "456",
     *     "date": "1234567891011",
     *     "digitalGoodSKU": "SKU_2",
     *     "licenseKey": null,
     *     "metaData": "My Metadata"
     * }]</pre>
     * @callback {function} [callbackOnFailure] Function to be invoked when an error occurs.
     * @callback {String} callbackOnFailure.errorText Retrieves the message set for an error. In addition to descriptive text, error code may appear at the end of the message. 
     * @callback {Number} callbackOnFailure.errorID Contains the reference number associated with the specific error in corresponding to the following values.
     * <ul>
     * <li> User Cancelled = 1</li>
     * <li> Payment System Busy = 2</li>
     * <li> General Payment System Error  = 3</li>
     * <li> Digital Good not Found = 4</li>
     * <li> Illegal Application Error = 5 [BlackBerry OS 5.0+ only]</li>
     * </ul>
     * <b>Note:</b> The actual values may be different when {@link blackberry.payment.developmentMode} equals true.
     * @PB10+
	 * @BB50+
     */
    getExistingPurchases : function (refresh, onSuccess, onFailure) {
    },
    /**
     * @name blackberry.payment.purchase^2
     * @function
     * @description Initiates the purchase of a digital good. Purchases can be initiated using either the ID or the SKU of the
     * digital good to be purchased, but it is not necessary to provide both. To customize the name and icon that are displayed on the
     * purchase dialog banners, provide the purchaseAppName and/or purchaseAppIcon arguments. If not provided, the name and icon that
     * were registered with App World will be used.
     * @param {Object} args Contains information that describes the purchase.
     * @callback {String} args.digitalGoodID ID of the digital good being purchased.
     * @callback {String} args.digitalGoodSKU SKU of the digital good being purchased.
     * @callback {String} args.digitalGoodName Name of the digital good being purchased.
     * @callback {String} args.metaData Metadata associated with the digital good. Metadata offers the application developer a way to
     * store information about each purchase on the Payment Service server.
     * @callback {String} args.purchaseAppName Name of the application requesting the purchase.
     * @callback {String} args.purchaseAppIcon Icon of the application requesting the purchase.
     * @callback {Object} args.extraParameters Set of extra parameters, in the form of key/value pairs, to associate with the purchase.
     * @callback {function} onSuccess Function to be called when the payment is successful.
     * @callback {Purchase} onSuccess.data A {@link Purchase} object containing the details of the successful purchase.
     * @callback {function} onFailure Function to be called when an error occurs.
     * @callback {PaymentError} onFailure.error A {@link PaymentError} object containing details about the error.<br />
     * <b>Note:</b> The actual values may be different when {@link blackberry.payment.developmentMode} equals true.
     * @BB10X
     * @example
     * &lt;script type="text/javascript"&gt;
     *   function purchase() {
     *       try {
     *           blackberry.payment.purchase({
     *               "digitalGoodID":"123",
     *               "digitalGoodSKU":"someSKU",
     *               "digitalGoodName":"SomeName",
     *               "metaData":"metadata",
     *               "purchaseAppName":"WebWorks APP",
     *               "purchaseAppIcon":null,
     *               "extraParameters": {
     *                   "key1": "value1",
     *                   "key2": "value2"
     *               }
     *           },
     *           onSuccess, onFailure);
     *       } catch (e) {
     *           alert ("Error" + e);
     *       }
     *   }
     *
     *   function onSuccess(purchasedItem) {
     *       var transId = purchasedItem.transactionID;
     *       var sku = purchasedItem.digitalGoodSKU;
     *       var dgId = purchasedItem.digitalGoodID;
     *       alert("Purchased Item: " + transId + "," + sku +  "," + dgId);
     *   }
     *
     *   function onFailure(error) {
     *       alert("Error occurred: " + error.errorText + ", " + error.errorID);
     *   }
     * &lt;/script&gt;
     */
    purchase : function (args, onSuccess, onFailure) {
    },
    /**
     * @function
     * @description Initiates the purchase of a digital good.
     * @param {Object} args Contains information that describes the purchase.
     * @callback {String} args.digitalGoodID ID of the digital good being purchased.
     * @callback {String} args.digitalGoodSKU SKU of the digital good being purchased.
     * @callback {String} args.digitalGoodName Name of the digital good being purchased.
     * @callback {String} args.metaData Metadata associated with the digital good. Metadata offers the application developer a way to store information about each purchase on the Payment Service server.
     * @callback {String} args.purchaseAppName Name of the application requesting the purchase.
     * @callback {String} args.purchaseAppIcon Icon of the application requesting the purchase.
     * @callback {function} callbackOnSuccess Function to be called when the payment is successful.
     * @callback {String} callbackOnSuccess.data A string representing a {@link Purchase} object literal.
     * @callback {function} [callbackOnFailure] Function to be called when an error occurs.
     * @callback {String} callbackOnFailure.errorText Retrieves the message set for an error. In addition to descriptive text, error code may appear at the end of the message. 
     * @callback {Number} callbackOnFailure.errorID Contains the reference number associated with the specific error in corresponding to the following values.
     * <ul>
     * <li> User Cancelled = 1</li>
     * <li> Payment System Busy = 2</li>
     * <li> General Payment System Error  = 3</li>
     * <li> Digital Good not Found = 4</li>
     * <li> Illegal Application Error = 5 [BlackBerry OS 5.0+ only]</li>
     * </ul>
     * @PB10+
     * @BB50+
     * @example
     * &lt;script type="text/javascript"&gt;
     *   function purchase() {
     *       try {
     *           blackberry.payment.purchase({
     *               "digitalGoodID":"123",
     *               "digitalGoodSKU":"someSKU",
     *               "digitalGoodName":"SomeName",
     *               "metaData":"metadata",
     *               "purchaseAppName":"WebWorks APP",
     *               "purchaseAppIcon":null
     *            },
     *            success, failure);
     *       } catch (e) {
     *          alert ("Error" + e);
     *       }
     *   }
     *
     *   function success(purchase) {
     *       var purchasedItem = JSON.parse(purchase);
     *       var transId = purchasedItem.transactionID;
     *       var sku = purchasedItem.digitalGoodSKU;
     *       var dgId = purchasedItem.digitalGoodID;
     *       alert("Purchased Item: " + transId + "," + sku + "," + dgId);
     *   }
     *
     *   function failure(errorText, errorId) {
     *       alert("Error occured: " + errorText + ", " + errorId);
     *   }
     * &lt;/script&gt;
     */
    purchase : function (args, callbackOnSuccess, callbackOnFailure) {
    },
    /**
    * @function
    * @description Initiates a request for the price of a digital good. The request can be initiated using either the ID or the SKU of
    * the digital good to be purchased. 
    * @param {Object} args Contains information that describes the digital good. One of ID or SKU needs to be specified, and if both are specified, the ID takes precedence and SKU will be ignored.
    * @callback {String} args.id ID of the digital good.
    * @callback {String} args.sku SKU of the digital good.
    * @callback {function} onSuccess Function to be called on success.
    * @callback {String} onSuccess.data.price The cost of the digital good.
    * @callback {String} onSuccess.data.initialPeriod The number of days in the subscriptions initial period. This will only be
    * present if the digital good represents a subscription item.
    * @callback {String} onSuccess.data.renewalPrice The subscription renewal price. This will only be present if the digital
    * good represents a subscription item.
    * @callback {String} onSuccess.data.renewalPeriod The number of days in the subscription renewal period. This will only be
    * present if the digital good represents a subscription item.
    * @callback {function} onFailure Function to be called when an error occurs.
    * @callback {PaymentError} onFailure.error A {@link PaymentError} object containing details about the error.
    * @BB10X
    * @example
    * &lt;script type="text/javascript"&gt;
    *   function getPrice() {
    *       try {
    *           blackberry.payment.getPrice({
    *              "id:" "123"
    *           }, onSuccess, onFailure);
    *       } catch (e) {
    *           alert ("Error" + e);
    *       }
    *   }
    *
    *   function onSuccess(data) {
    *       var price = data.price;
    *
    *       alert("Digital good price: " + price);
    *
    *       if (data.initialPeriod) {
    *           var initialPeriod = data.initialPeriod;
    *           var renewalPrice = data.renewalPrice;
    *           var renewalPeriod = data.renewalPeriod;
    *           alert("Subscription Info: " + initialPeriod + "," + renewalPrice + "," + renewalPeriod);
    *       }
    *   }
    *
    *   function onFailure(err) {
    *       alert("Error occurred: " + err.errorText + ", " + err.errorID);
    *   }
    * &lt;/script&gt;
    */
    getPrice : function(args, onSuccess, onFailure) {
    },
    /**
    * @function
    * @description Initiates a call to check whether the currently logged in BBID user has rights to the current app-level subscription.
    * If the calling application is not a subscription app, this will return false.
    * <p>
    * A user can cancel a subscription, and it will remain active until the subscription period has passed.
    * @callback {function} onSuccess Function to be called on success.
    * @callback {Boolean} onSuccess.data.subscriptionExists Whether the subscription to the application is currently active.
    * @callback {function} onFailure Function to be called when an error occurs.
    * @callback {PaymentError} onFailure.error A {@link PaymentError} object containing details about the error.
    * @BB10X
    * @example
    * &lt;script type="text/javascript"&gt;
    *  function checkAppSubscription() {
    *      try {
    *          blackberry.payment.checkAppSubscription(onSuccess, onFailure);
    *      } catch (e){
    *          alert("Error" + e);
    *      }
    *  }
    *
    *  function onSuccess(data) {
    *      alert("User is " + (data.subscriptionExists ? "" : "not ") + "subscribed to the app.");
    *  }
    *
    *  function onFailure(error) {
    *      alert("Error occurred: " + error.errorText + ", " + error.errorID);
    *  }
    * &lt;/script&gt;
    */
    checkAppSubscription : function(onSuccess, onFailure) {
    },
    /**
    * @function
    * @description Initiates a call to check whether the currently logged in BBID user has rights to the provided digital good subscription
    * at this time.
    * <p>
    * A user can cancel a subscription, and it will remain active until the subscription period has passed.
    * @param {Object} args Contains information that describes the digital good. One of ID or SKU needs to be specified, and if both are specified, the ID takes precedence and SKU will be ignored.
    * @callback {String} args.id ID of the digital good.
    * @callback {String} args.sku SKU of the digital good.
    * @callback {function} onSuccess Function to be called on success.
    * @callback {Boolean} onSuccess.data.subscriptionExists Whether the subscription digital good is currently active.
    * @callback {function} onFailure Function to be called when an error occurs.
    * @callback {PaymentError} onFailure.error A {@link PaymentError} object containing details about the error.
    * @BB10X
    * @example
    * &lt;script type="text/javascript"&gt;
    *   function checkSubscription() {
    *       try {
    *           blackberry.payment.checkExisting({
    *               "id": 12345"
    *           }, onSuccess, onFailure);
    *       } catch (e) {
    *           alert ("Error" + e);
    *       }
    *   }
    *
    *  function onSuccess(data) {
    *      alert("User is " + (data.subscriptionExists ? "" : "not ") + "subscribed to the item.");
    *  }
    *
    *  function onFailure(error) {
    *      alert("Error occurred: " + error.errorText + ", " + error.errorID);
    *  }
    * &lt;/script&gt;
    */
    checkExisting : function(args, onSuccess, onFailure) {
    },
    /**
    * @function
    * @description Initiates a request to cancel a subscription for a digital good.  If successful the subscription becomes
    * canceled and will not be renewed at the end of the current subscription period.  The subscription will remain valid until
    * the end of the current subscription period.  The subscription to cancel is identified by a purchase ID that is returned
    * at the time of purchase or queried by calling getExistingPurchases.  The cancelation of a non-subscription digital good is
    * not permitted.
    * @param {String} purchaseID The purchase ID when the subscription was purchased.
    * @callback {function} onSuccess Function to be called on success.
    * @callback {Boolean} onSuccess.data.subscriptionCancelled True if the cancellation was successful.
    * @callback {function} onFailure Function to be called when an error occurs.
    * @callback {PaymentError} onFailure.error A {@link PaymentError} object containing details about the error.
    * @BB10X
    * @example
    * &lt;script type="text/javascript"&gt;
    *   function cancelSubscription() {
    *       try {
    *           blackberry.payment.cancelSubscription("12345", onSuccess, onFailure);
    *       } catch (e) {
    *           alert ("Error" + e);
    *       }
    *   }
    *
    *  function onSuccess(data) {
    *      alert("Cancellation " + (data.subscriptionCancelled ? "" : "NOT ") + "successful");
    *  }
    *
    *  function onFailure(error) {
    *      alert("Error occurred: " + error.errorText + ", " + error.errorID);
    *  }
    * &lt;/script&gt;
    */
    cancelSubscription : function(purchaseID, onSuccess, onFailure) {
    },
    /**
     * @type Boolean
     * @description Defines the development mode used in the application. If development mode is set to true, the application does not contact the Payment Service server for any transactions. For purchases, a simulated purchase screen is displayed, allowing the user to choose the result of the purchase. For retrieving existing purchases, only simulated successful purchases are returned. This mode is useful for testing how your application handles the possible results without requiring network connections or currency. THIS MODE SHOULD NOT BE USED IN PRODUCTION CODE. If development mode is set to false, purchases and retrievals of existing purchases proceed normally, contacting the Payment Service server as necessary. This is the default development mode, and applications in production should not modify it.
     * @default false
     * @PB10+
     * @BB50+
     * @BB10X
     */
    developmentMode: false;

};

/**
 * @namespace This object encapsulates the attributes of a purchase.
 * <p>
 * It may be aquired by calling to one of the {@link blackberry.payment} methods.
 * @toc {Payment} Purchase
 * @featureID blackberry.payment
 */
Purchase = { };

/**
 * @type String
 * @description The purchaseID for this purchase.
 * @PB10+
 * @BB50+
 * @BB10X
 */
Purchase.prototype.purchaseID = null;

/**
 * @type String
 * @description The transaction ID for this purchase.
 * @PB10+
 * @BB50+
 * @BB10X
 */
Purchase.prototype.transactionID = null;

/**
 * @type String
 * @description The ID of the purchased digital good.
 * @PB10+
 * @BB50+
 * @BB10X
 */
Purchase.prototype.digitalGoodID = null;

/**
 * @type String
 * @description The SKU of the purchased digital good.
 * @PB10+
 * @BB50+
 * @BB10X
 */
Purchase.prototype.digitalGoodSKU = null;

/**
 * @type String
 * @description The metadata for this purchase, or null if no metadata was included with the purchase.
 * @PB10+
 * @BB50+
 * @BB10X
 */
Purchase.prototype.metaData = null;

/**
 * @type String
 * @description The Epoch time represention of the date this purchase was made.
 * @PB10+
 * @BB50+
 * @BB10X
 */
Purchase.prototype.date = null;

/**
 * @type String
 * @description Represents the license key for this purchase, or null if the purchased digital good does not have a license key.
 * @PB10+
 * @BB50+
 * @BB10X
 */
Purchase.prototype.licenseKey = null;

/**
 * @type Object
 * @description A set of key/value pairs to be associated with a purchase request. Extra parameters (not necessarily corresponding to
 * any that were passed in) may also be present in the purchasedItem returned from a successful {@link blackberry.payment.purchase}.
 * Only relevant to a Purchase object at the time of the transaction
 * (would not be present in a {@link blackberry.payment.getExistingPurchases} result).
 * @PB10+
 * @BB10X
 */
Purchase.prototype.extraParameters = null;

/**
 * @namespace This object encapsulates the attributes of a payment error.
 * <p>
 * Will be returned as a parameter to callbackOnFailure for any applicable payment function.
 * @toc {Payment} PaymentError
 * @featureID blackberry.payment
 */
PaymentError = { };

/**
 * @type Number
 * @description The reference number associated with the specific error in corresponding to the following values.
 * <ul>
 * <li> Unexpected Application Error = -1</li>
 * <li> User Cancelled = 1</li>
 * <li> Payment System Busy = 2</li>
 * <li> General Payment System Error  = 3</li>
 * <li> Digital Good not Found = 4</li>
 * <li> Illegal Application Error = 5 [BlackBerry OS 5.0+ only]</li>
 * </ul>
 * @BB10X
 *
 */
PaymentError.prototype.errorID = null;

/**
 * @type String
 * @description The message for the particular error. In addition to descriptive text, error code may appear at the end of the message.
 * @BB10X
 */
PaymentError.prototype.errorText = null;

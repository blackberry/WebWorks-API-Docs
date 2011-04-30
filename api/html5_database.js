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
 * @toc {Database} Database
 * @namespace This object provides functions to manipulate client-side databases using SQL. 
 * 
 */
Database ={
		/**
		 * @desc the current version of the database.
		 * @readOnly
		 * @type DOMString
		 */
		version : "",
		
		/**
		 * @desc When called, this method immediately returns and then asynchronously runs the transaction steps with the <i>transaction callback</i> being the first argument, the <i>error callback</i> being the second argument, if any, the <i>success callback</i> being the third argument, if any, and with no <i>preflight operation</i> or <i>postflight operation</i>. The mode is read/write.
		 * @callback {function} callback Function to be called when executing SQL statements. Expected signature: function SQLTransactionCallback(SQLTransaction transaction).
		 * @callback {function} [errorCallback] Function to be called when SQL error occurs. Expected signature: function SQLTransactionErrorCallback(SQLError error).
		 * @callback {function} [successCallback] Function to be called when SQL statement is executed successfully. Expected signature: function SQLVoidCallback().
		 */
		transaction : function(callback, errorCallback, successCallback){},
		
		/**
		 * @desc When called, this method immediately returns and then asynchronously runs the transaction steps with the <i>transaction callback</i> being the first argument, the <i>error callback</i> being the second argument, if any, the <i>success callback</i> being the third argument, if any, and with no <i>preflight operation</i> or <i>postflight operation</i>. The mode is read-only.
		 * @callback {function} callback Function to be called when executing SQL statements. Expected signature: function SQLTransactionCallback(SQLTransaction transaction).
		 * @callback {function} [errorCallback] Function to be called when SQL error occurs. Expected signature: function SQLTransactionErrorCallback(SQLError error).
		 * @callback {function} [successCallback] Function to be called when SQL statement is executed successfully. Expected signature: function SQLVoidCallback().
		 */
		readTransaction : function(callback, errorCallback, successCallback){},
		
		/**
		 * @desc This method allows scripts to atomically verify the version number and change it at the same time as doing a schema update. When the method is invoked, it immediately returns, and then asynchronously runs the transaction steps with the <i>transaction callback</i> being the third argument, the <i>error callback</i> being the fourth argument, the <i>success callback</i> being the fifth argument. If any of the optional arguments are omitted, then they are treated as if they were null.
		 * @param  {DOMString} oldVersion database's current version.
		 * @param  {DOMString} newVersion database's new version.
		 * @callback {function} [callback] Function to be called when executing SQL statements. Expected signature: function SQLTransactionCallback(SQLTransaction transaction).
		 * @callback {function} [errorCallback] Function to be called when SQL error occurs. Expected signature: function SQLTransactionErrorCallback(SQLError error).
		 * @callback {function} [successCallback] Function to be called when SQL statement is executed successfully. Expected signature: function SQLVoidCallback().
		 * 
		 */
		changeVersion : function(oldVersion, newVersion, callback, errorCallback, successCallback){}
};

/**
 * @toc {Database} SQLTransaction
 * @namespace
 */
SQLTransaction = {
		/**
		 * @desc This method executes the provided SQL statement
		 * @param {DOMString} sqlStatement the SQL statement
		 * @param {ObjectArray} [arguments] the optional arguments 
		 * @param {function} [callback] Function to be called when statement's result set is ready. Expected signature: function SQLStatementCallback (SQLTransaction transaction, SQLResultSet resultSet).
		 * @param {function} [errorCallback] Function to be called when SQL error occurs. Expected signature: function SQLStatementErrorCallback (SQLTransaction transaction, SQLError error).
		 */
		executeSql : function(sqlStatement, arguments, callback, errorCallback) {}
};

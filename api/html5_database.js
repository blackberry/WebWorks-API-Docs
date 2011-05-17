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
 * @toc {Data Storage} HTML5 Database
 * @namespace This object provides functions to manipulate client-side databases using SQL. 
 * @notice {Warning (BlackBerry 5.0 Notice):}
 * Database support on BlackBerry OS 5.0 is accomplished by using the <a href="http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Supporting-Gears-using-HTML5-in-BlackBerry-WebWorks-applications/ta-p/557280" target="_blank">HTML5 JavaScript toolkit</a> for BlackBerry OS 5.0.
 */
Database = {
                
        /**
         * @function
         * @constructedBy Window.openDatabase
         * @description Creates a new databse object. 
         * If the database already exists, the existing database will be returned and the creation callback will not be invoked.
         * @param {String} name The name of the database to be created
         * @param {String} version The version of the database to be created
         * @param {String} displayName The display name of the database to be created
         * @param {Number} estimatedSize The estimated size in bytes of the database
         * @callback {function} creationCallback The callback will be invoked when the database is first created.
         * @callback {Database} creationCallback.database The newly created database
         * @returns {Database} The database object that has been opened.
         * @example
         * Database db=Window.openDatabase('documents', '1.0', 'Offline document storage', 5*1024*1024, null);
         * @PB10
         * @BB50+
         */
        openDatabase : undefined
};
        
        
		/**
		 * @description The current version of the database.
		 * @readOnly
		 * @type String
		 * @PB10
		 * @BB50+
		 */
        Database.prototype.version = "";
		
		/**
		 * @description When called, this method immediately returns and then asynchronously runs the transaction steps with the <i>transaction callback</i> being the first argument, the <i>error callback</i> being the second argument, if any, the <i>success callback</i> being the third argument, if any, and with no <i>preflight operation</i> or <i>postflight operation</i>. The mode is read/write.
		 * @callback {function} callback Function to be called when executing SQL statements.
		 * @callback {SQLTransaction} callback.transaction The transaction to be executed.
         * @callback {function} [errorCallback] Function to be called when an SQL error occurs.
         * @callback {SQLError} errorCallback.error The {@link SQLError} object describing the SQL error that occurred.
		 * @callback {function} [successCallback] Function to be called when SQL statement is executed successfully.
		 * @PB10
		 * @BB50+
		 */
        Database.prototype.transaction = function(callback, errorCallback, successCallback){};
		
		/**
		 * @description When called, this method immediately returns and then asynchronously runs the transaction steps with the <i>transaction callback</i> being the first argument, the <i>error callback</i> being the second argument, if any, the <i>success callback</i> being the third argument, if any, and with no <i>preflight operation</i> or <i>postflight operation</i>. The mode is read-only.
         * @callback {function} callback Function to be called when executing SQL statements.
         * @callback {SQLTransaction} callback.transaction The transaction to be executed.
         * @callback {function} [errorCallback] Function to be called when an SQL error occurs.
         * @callback {SQLError} errorCallback.error The {@link SQLError} object describing the SQL error that occurred.
		 * @callback {function} [successCallback] Function to be called when SQL statement is executed successfully.
		 * @PB10
		 * @BB50+
		 * @example
		 * function showDocCount(db, span) {
  		 *	db.<b>readTransaction</b>(
  		 *		function (t) {
    	 *			t.executeSql('SELECT COUNT(*) AS c FROM docids', [], 
    	 *				function (t, r) {
      	 *					span.textContent = r.rows[0].c;
      	 *				}, 
      	 *				function (t, e) {
      	 *					// couldn't read database
      	 *					span.textContent = '(unknown: ' + e.message + ')';
      	 *				}
      	 *			);
      	 *		}
      	 *	);
		 *}
		 * 
		 */
        Database.prototype.readTransaction = function(callback, errorCallback, successCallback){};
		
		/**
		 * @description This method allows scripts to atomically verify the version number and change it at the same time as doing a schema update. When the method is invoked, it immediately returns, and then asynchronously runs the transaction steps with the <i>transaction callback</i> being the third argument, the <i>error callback</i> being the fourth argument, the <i>success callback</i> being the fifth argument. If any of the optional arguments are omitted, then they are treated as if they were null.
		 * @param  {String} oldVersion database's current version.
		 * @param  {String} newVersion database's new version.
         * @callback {function} callback Function to be called when executing SQL statements.
         * @callback {SQLTransaction} callback.transaction The transaction to be executed.
         * @callback {function} [errorCallback] Function to be called when an SQL error occurs.
         * @callback {SQLError} errorCallback.error The {@link SQLError} object describing the SQL error that occurred.
         * @callback {function} [successCallback] Function to be called when SQL statement is executed successfully.
		 * @PB10
		 * @BB50+
		 * @example
		 * db.<b>changeVersion</b>('', '1.0', function (t) {...});
		 * 
		 */
        Database.prototype.changeVersion = function(oldVersion, newVersion, callback, errorCallback, successCallback){};


/**
 * @toc {Data Storage} HTML5 SQLTransaction
 * @namespace The SQLTransaction object is the object used to actually run SQL commands on your database.
 * @notice {Warning (BlackBerry 5.0 Notice):}
 * Database support on BlackBerry OS 5.0 is accomplished by using the <a href="http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Supporting-Gears-using-HTML5-in-BlackBerry-WebWorks-applications/ta-p/557280" target="_blank">HTML5 JavaScript toolkit</a> for BlackBerry OS 5.0.
 */
SQLTransaction = {};
		/**
		 * @description This method executes the provided SQL statement.
		 * @param {String} sqlStatement The SQL statement to be executed on the database.
		 * @param {Object[]} [arguments] The optional arguments used to preprocess a SQL statement by binding each ? placeholder with the value of the argument in the arguments array with the same position.
		 * @callback {function} [callback] Function to be called when statement's result set is ready.
		 * @callback {SQLTransaction} callback.transaction The {@link SQLTransaction} object that executed this transaction.
		 * @callback {SQLResultSet} callback.resultSet The{@link SQLResultSet} object that contains the results of the SQL statement.
		 * @callback {function} [errorCallback] Function to be called when an SQL error occurs.
		 * @callback {SQLTransaction} errorCallback.transaction The {@link SQLTransaction} object that executed this transaction.
		 * @callback {SQLError} errorCallback.error The {@link SQLError} object describing the SQL error that occurred.
		 * @PB10
		 * @BB50+
		 * @example
		 * function showDocCount(db, span) {
  		 *	db.readTransaction(
  		 *		function (t) {
    	 *			t.<b>executeSql</b>('SELECT COUNT(*) AS c FROM docids', [], 
    	 *				function (t, r) {
      	 *					span.textContent = r.rows[0].c;
      	 *				}, 
      	 *				function (t, e) {
      	 *					// couldn't read database
      	 *					span.textContent = '(unknown: ' + e.message + ')';
      	 *				}
      	 *			);
      	 *		}
      	 *	);
		 *}
		 * 
		 */
        SQLTransaction.prototype.executeSql = function(sqlStatement, arguments, callback, errorCallback) {};


/**
 * @toc {Data Storage} HTML5 SQLResultSet
 * @namespace The SQLResultSet object is generated as a result of executing an SQL Transaction. See {@link SQLTransaction#executeSql}. 
 * @notice {Warning (BlackBerry 5.0 Notice):}
 * Database support on BlackBerry OS 5.0 is accomplished by using the <a href="http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Supporting-Gears-using-HTML5-in-BlackBerry-WebWorks-applications/ta-p/557280" target="_blank">HTML5 JavaScript toolkit</a> for BlackBerry OS 5.0.
 */
SQLResultSet = {};
		/**
		 * @description If the SQL statement inserted a row, this attribute returns the row ID of the row that the SQLResultSet object's SQL statement inserted into the database. If the SQL statement inserted multiple rows, this attribute returns the the ID of the last row. 
		 * @readOnly
		 * @type Number
		 * @PB10
		 * @BB50+
		 */
        SQLResultSet.prototype.insertId = 0;
		
		/**
		 * @description This attribute returns the number of rows that were changed by the SQL statement. If the statement did not affected any rows, 0 is returned.
		 * @readOnly
		 * @type Number
		 * @PB10
		 * @BB50+
		 */
        SQLResultSet.prototype.rowsAffected = 0;

		/**
		 * @description This attribute represents the rows returned in the order returned by the database.If no rows were returned, then the object will be empty (its <i>length</i> will be zero).
		 * @readOnly
		 * @type SQLResultSetRowList
		 * @PB10
		 * @BB50+
		 */
        SQLResultSet.prototype.rows = null;
		


/**
 * @toc {Data Storage} HTML5 SQLResultSetRowList
 * @namespace The SQLResultSet object is generated as part of an {@link SQLResultSet} by executing an SQL Transaction. See {@link SQLTransaction#executeSql}. 
 * @notice {Warning (BlackBerry 5.0 Notice):}
 * Database support on BlackBerry OS 5.0 is accomplished by using the <a href="http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Supporting-Gears-using-HTML5-in-BlackBerry-WebWorks-applications/ta-p/557280" target="_blank">HTML5 JavaScript toolkit</a> for BlackBerry OS 5.0.
 */
SQLResultSetRowList = {};
		/**
		 * @description The number of rows returned by the database.
		 * @readOnly
		 * @type Number
		 * @PB10
		 * @BB50+
		 */
        SQLResultSetRowList.prototype.length = 0;
		
		/**
		 * @description Return the row with the given index.
		 * @param {Number} index the index
		 * @returns {Object} the row with the given index. If there is no such row, return null.
		 * @PB10
		 * @BB50+
		 */
        SQLResultSetRowList.prototype.item = function(index) {};


/**
 * @toc {Data Storage} HTML5 SQLError
 * @namespace Errors in the asynchronous database API are reported using callbacks that have a <b>SQLError</b> object as one of their arguments.
 * @notice {Warning (BlackBerry 5.0 Notice):}
 * Database support on BlackBerry OS 5.0 is accomplished by using the <a href="http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Supporting-Gears-using-HTML5-in-BlackBerry-WebWorks-applications/ta-p/557280" target="_blank">HTML5 JavaScript toolkit</a> for BlackBerry OS 5.0.
 */
SQLError = {
		/**
		 * @constant
		 * @type Number
		 * @description The transaction failed for reasons unrelated to the database itself and not covered by any other error code. 
		 * @PB10
		 * @BB50+
		 * @default 0
		 */
		UNKNOWN_ERR : 0,

		/**
		 * @constant
		 * @type Number
		 * @description The statement failed for database reasons not covered by any other error code. 
		 * @PB10
		 * @BB50+
		 * @default 1
		 */
		DATABASE_ERR : 1,

		/**
		 * @constant
		 * @type Number
		 * @description The operation failed because the actual database version was not what it should be. 
		 * @PB10
		 * @BB50+
		 * @default 2
		 */
		VERSION_ERR : 2,

		/**
		 * @constant
		 * @type Number
		 * @description The statement failed because the data returned from the database was too large. The SQL "LIMIT" modifier might be useful to reduce the size of the result set. 
		 * @PB10
		 * @BB50+
		 * @default 3
		 */
		TOO_LARGE_ERR : 3,
		
		/**
		 * @constant
		 * @type Number
		 * @description The statement failed because there was not enough remaining storage space, or the storage quota was reached and the user declined to give more space to the database. 
		 * @PB10
		 * @BB50+
		 * @default 4
		 */
		QUOTA_ERR : 4,

		/**
		 * @constant
		 * @type Number
		 * @description The statement failed because of a syntax error, or the number of arguments did not match the number of ? placeholders in the statement, or the statement tried to use a statement that is not allowed, such as <b>BEGIN</b>, <b>COMMIT</b>, or <b>ROLLBACK</b>, or the statement tried to use a verb that could modify the database but the transaction was read-only. 
		 * @PB10
		 * @BB50+
		 * @default 5
		 */
		SYNTAX_ERR : 5,

		/**
		 * @constant
		 * @type Number
		 * @description An <b>INSERT</b>, <b>UPDATE</b>, or <b>REPLACE</b> statement failed due to a constraint failure. For example, because a row was being inserted and the value given for the primary key column duplicated the value of an existing row. 
		 * @PB10
		 * @BB50+
		 * @default 6
		 */
		CONSTRAINT_ERR : 6,

		/**
		 * @constant
		 * @type Number
		 * @description A lock for the transaction could not be obtained in a reasonable time. 
		 * @PB10
		 * @BB50+
		 * @default 7
		 */
		TIMEOUT_ERR : 7
};

		/**
		 * @description The most appropriate error code. 
		 * @readOnly
		 * @type Number
		 * @PB10
		 * @BB50+
		 */
        SQLError.prototype.code = 0;

		/**
		 * @description An error message describing the error encountered. The message should be localized to the user's language.
		 * @readOnly
		 * @type String
		 * @PB10
		 * @BB50+
		 */
        SQLError.prototype.message = "";


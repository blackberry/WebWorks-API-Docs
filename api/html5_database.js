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
 * @PB10
 * @BB50+
 * @toc {Data Storage} HTML5 Database
 * @namespace This object provides functions to manipulate client-side databases using SQL. 
 * <p/>
 * <b>Important Note:</b> The HTML5 Database object is marked as supported for OS 5.0.  This support is accomplished by using the <a href="http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Supporting-Gears-using-HTML5-in-BlackBerry-WebWorks-applications/ta-p/557280" target="_blank">HTML5 JavaScript toolkit</a> for BlackBerry OS 5.0.
 * @constructedBy {Window.openDatabase(String name, String version, String displayName, Number estimatedSize, function creationCallback)} {You can use Window.openDatabase method to get an instance of database. This method has five parameters: <i>name</i> is a database name; <i>version</i> is a database version; <i>displayName</i> is a display name; <i>estimatedSize</i> is an estimated size -in bytes- of the data that will be stored in the database; and <i>creationCallback</i> is optional callback function and is invoked if the database has not yet been created. Expected callback function signature: function DatabaseCallback(Database database).}
 * // This is an example of how to get an instance of Database.
 * Database db=Window.openDatabase('documents', '1.0', 'Offline document storage', 5*1024*1024, null);
 * 
 * 
 */
Database ={
		/**
		 * @description the current version of the database.
		 * @readOnly
		 * @type String
		 * @PB10
		 * @BB50+
		 */
		version : "",
		
		/**
		 * @description When called, this method immediately returns and then asynchronously runs the transaction steps with the <i>transaction callback</i> being the first argument, the <i>error callback</i> being the second argument, if any, the <i>success callback</i> being the third argument, if any, and with no <i>preflight operation</i> or <i>postflight operation</i>. The mode is read/write.
		 * @callback {function} callback Function to be called when executing SQL statements. Expected signature: function SQLTransactionCallback(SQLTransaction transaction).
		 * @callback {function} [errorCallback] Function to be called when SQL error occurs. Expected signature: function SQLTransactionErrorCallback(SQLError error).
		 * @callback {function} [successCallback] Function to be called when SQL statement is executed successfully. Expected signature: function SQLVoidCallback().
		 * @PB10
		 * @BB50+
		 */
		transaction : function(callback, errorCallback, successCallback){},
		
		/**
		 * @description When called, this method immediately returns and then asynchronously runs the transaction steps with the <i>transaction callback</i> being the first argument, the <i>error callback</i> being the second argument, if any, the <i>success callback</i> being the third argument, if any, and with no <i>preflight operation</i> or <i>postflight operation</i>. The mode is read-only.
		 * @callback {function} callback Function to be called when executing SQL statements. Expected signature: function SQLTransactionCallback(SQLTransaction transaction).
		 * @callback {function} [errorCallback] Function to be called when SQL error occurs. Expected signature: function SQLTransactionErrorCallback(SQLError error).
		 * @callback {function} [successCallback] Function to be called when SQL statement is executed successfully. Expected signature: function SQLVoidCallback().
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
		readTransaction : function(callback, errorCallback, successCallback){},
		
		/**
		 * @description This method allows scripts to atomically verify the version number and change it at the same time as doing a schema update. When the method is invoked, it immediately returns, and then asynchronously runs the transaction steps with the <i>transaction callback</i> being the third argument, the <i>error callback</i> being the fourth argument, the <i>success callback</i> being the fifth argument. If any of the optional arguments are omitted, then they are treated as if they were null.
		 * @param  {String} oldVersion database's current version.
		 * @param  {String} newVersion database's new version.
		 * @callback {function} [callback] Function to be called when executing SQL statements. Expected signature: function SQLTransactionCallback(SQLTransaction transaction).
		 * @callback {function} [errorCallback] Function to be called when SQL error occurs. Expected signature: function SQLTransactionErrorCallback(SQLError error).
		 * @callback {function} [successCallback] Function to be called when SQL statement is executed successfully. Expected signature: function SQLVoidCallback().
		 * @PB10
		 * @BB50+
		 * @example
		 * db.<b>changeVersion</b>('', '1.0', function (t) {...});
		 * 
		 */
		changeVersion : function(oldVersion, newVersion, callback, errorCallback, successCallback){}
};

/**
 * @toc {Data Storage} HTML5 SQLTransaction
 * @namespace
 * <br/><br/>
 * <b>Important Note:</b> The HTML5 SQLTransaction object is marked as supported for OS 5.0.  This support is accomplished by using the <a href="http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Supporting-Gears-using-HTML5-in-BlackBerry-WebWorks-applications/ta-p/557280" target="_blank">HTML5 JavaScript toolkit</a> for BlackBerry OS 5.0.
 * @PB10
 * @BB50+
 */
SQLTransaction = {
		/**
		 * @description This method executes the provided SQL statement
		 * @param {String} sqlStatement the SQL statement
		 * @param {ObjectArray} [arguments] the optional arguments used to preprocess a SQL statement by binding each ? placeholder with the value of the argument in the arguments array with the same position.
		 * @param {function} [callback] Function to be called when statement's result set is ready. Expected signature: function SQLStatementCallback (SQLTransaction transaction, SQLResultSet resultSet).
		 * @param {function} [errorCallback] Function to be called when SQL error occurs. Expected signature: function SQLStatementErrorCallback (SQLTransaction transaction, SQLError error).
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
		executeSql : function(sqlStatement, arguments, callback, errorCallback) {}
};

/**
 * @toc {Data Storage} HTML5 SQLResultSet
 * @namespace
 * <br/><br/>
 * <b>Important Note:</b> The HTML5 SQLResultSet object is marked as supported for OS 5.0.  This support is accomplished by using the <a href="http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Supporting-Gears-using-HTML5-in-BlackBerry-WebWorks-applications/ta-p/557280" target="_blank">HTML5 JavaScript toolkit</a> for BlackBerry OS 5.0.
 * @PB10
 * @BB50+
 */
SQLResultSet = {
		/**
		 * @description If the SQL statement inserted a row, this attribute returns the row ID of the row that the SQLResultSet object's SQL statement inserted into the database. If the SQL statement inserted multiple rows, this attribute returns the the ID of the last row. 
		 * @readOnly
		 * @type Number
		 * @PB10
		 * @BB50+
		 */
		insertId : 0,
		
		/**
		 * @description This attribute returns the number of rows that were changed by the SQL statement. If the statement did not affected any rows, 0 is returned.
		 * @readOnly
		 * @type Number
		 * @PB10
		 * @BB50+
		 */
		rowsAffected : 0,

		/**
		 * @description This attribute represents the rows returned in the order returned by the database.If no rows were returned, then the object will be empty (its <i>length</i> will be zero).
		 * @readOnly
		 * @type SQLResultSetRowList
		 * @PB10
		 * @BB50+
		 */
		rows : null
		
};

/**
 * @toc {Data Storage} HTML5 SQLResultSetRowList
 * @namespace
 * <br/><br/>
 * <b>Important Note:</b> The HTML5 SQLResultSetRowList object is marked as supported for OS 5.0.  This support is accomplished by using the <a href="http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Supporting-Gears-using-HTML5-in-BlackBerry-WebWorks-applications/ta-p/557280" target="_blank">HTML5 JavaScript toolkit</a> for BlackBerry OS 5.0.
 * @PB10
 * @BB50+
 */
SQLResultSetRowList = {
		/**
		 * @description the number of rows returned by the database.
		 * @readOnly
		 * @type Number
		 * @PB10
		 * @BB50+
		 */
		length : 0,
		
		/**
		 * @description return the row with the given index.
		 * @param {Number} index the index
		 * @returns {Object} the row with the given index. If there is no such row, return null.
		 * @PB10
		 * @BB50+
		 */
		item : function(index) {}
};

/**
 * @toc {Data Storage} HTML5 SQLError
 * @namespace Errors in the asynchronous database API are reported using callbacks that have a <b>SQLError</b> object as one of their arguments.
 * <br/><br/>
 * <b>Important Note:</b> The HTML5 SQLError object is marked as supported for OS 5.0.  This support is accomplished by using the <a href="http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Supporting-Gears-using-HTML5-in-BlackBerry-WebWorks-applications/ta-p/557280" target="_blank">HTML5 JavaScript toolkit</a> for BlackBerry OS 5.0.
 * @PB10
 * @BB50+
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
		TIMEOUT_ERR : 7,

		/**
		 * @description the most appropriate error code 
		 * @readOnly
		 * @type Number
		 * @PB10
		 * @BB50+
		 */
		code : 0,

		/**
		 * @description an error message describing the error encountered. The message should be localized to the user's language.
		 * @readOnly
		 * @type String
		 * @PB10
		 * @BB50+
		 */
		message : ""
};

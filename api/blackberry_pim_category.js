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
* <div><p>
*       The functionality in this namespace allows you to access and manipulate categories defined for in the Personal Information Management (PIM) database.
*     </p></div>
* @toc {PIM} Category 
* @BB50+
* @namespace The Category object defines APIs necessary to access and manipulate categories in the PIM  database.
* @featureID blackberry.pim.category
*/
blackberry.pim.category = { };

/**
* Returns the categories defined for the PIM database. If there are no categories defined for the PIM database, then a zero length array is returned. 
* @returns {String[]}
* @BB50+
*/
blackberry.pim.category.getCategories = function() { };

/**
* Adds the provided category to the PIM database. Category names are case sensitive. 
* @param {String} categoryName String representing a category.
* @returns {void}
* @BB50+
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   function createNewCategory(newCategoryName) {
*     blackberry.pim.category.addCategory(newCategoryName);
*   }
* &lt;&sol;script&gt;
*/
blackberry.pim.category.addCategory = function(categoryName) { };

/**
* Deletes the indicated category from the PIM database. If the indicated category is not in the PIM database, this method is treated as successfully completing. Category names are case sensitive. 
* @param {String} categoryName String category.
* @returns {void}
* @BB50+
*/
blackberry.pim.category.deleteCategory = function(categoryName) { };



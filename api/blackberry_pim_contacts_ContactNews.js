/*
* Copyright 2010-2012 Research In Motion Limited.
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
 * @toc {PIM} ContactNews
 * @featureID blackberry.pim.contacts
 * @class The ContactNews object contains the Online News for a contact.
 * @BB10X
 */
blackberry.pim.contacts.ContactNews = {};

/**
 * @type String
 * @readOnly
 * @description The title of the news article.
 * @BB10X
 */
blackberry.pim.contacts.ContactNews.prototype.title = "";

/**
 * @type String
 * @readOnly
 * @description The content of the source.
 * @BB10X
 */
blackberry.pim.contacts.ContactNews.prototype.body = "";

/**
 * @type String
 * @readOnly
 * @description The source of this article.
 * @BB10X
 */
blackberry.pim.contacts.ContactNews.prototype.articleSource = "";

/**
 * @type String[]
 * @readOnly
 * @description The list of companies associated with this new article.
 * @BB10X
 */
blackberry.pim.contacts.ContactNews.prototype.companies = "";

/**
 * @type Date
 * @readOnly
 * @description The publish date of the article.
 * @BB10X
 */
blackberry.pim.contacts.ContactNews.prototype.publishedAt = "";

/**
 * @type String
 * @readOnly
 * @description The URL of the article.
 * @BB10X
 */
blackberry.pim.contacts.ContactNews.prototype.uri = "";

/**
 * @type String
 * @readOnly
 * @description The type of the news article. e.g. "Press Release"
 * @BB10X
 */
blackberry.pim.contacts.ContactNews.prototype.type = "";

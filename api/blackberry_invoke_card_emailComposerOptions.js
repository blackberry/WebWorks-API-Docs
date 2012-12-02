/*
 * Copyright 2012 Research In Motion Limited.
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

/**
 * @toc {Invoke} EmailComposerOptions
 * @class The EmailComposerOptions object contains options that are passed into {@link blackberry.invoke.card.invokeEmailComposer}().
 * @BB10X
 */
blackberry.invoke.card.EmailComposerOptions = {};

/**
 * @type Number
 * @description The account ID of the account the composer should send the email from.
 * @BB10X
 */
blackberry.invoke.card.EmailComposerOptions.prototype.from = 0;

/**
 * @type String
 * @description The subject that should be set when the composer is invoked.
 * @BB10X
 */
blackberry.invoke.card.EmailComposerOptions.prototype.subject = "";

/**
 * @type String
 * @description The email body that should be set when the composer is invoked.
 * @BB10X
 */
blackberry.invoke.card.EmailComposerOptions.prototype.body = "";

 /**
  * @type String []
  * @description array of recipient email addresses.
  * @BB10X
  */
blackberry.invoke.card.EmailComposerOptions.prototype.to = [];

/**
 * @type String[]
 * @description array of cc'd email addresses.
 * @BB10X
 */
blackberry.invoke.card.EmailComposerOptions.prototype.cc = [];

/**
 * @type String[]
 * @description array of filepaths to files that will be attached to this email
 * @BB10X
 */
blackberry.invoke.card.EmailComposerOptions.prototype.attachment = [];

/**
 * @type Number
 * @description calendar event ID to attach to this email
 * @BB10X
 */
blackberry.invoke.card.EmailComposerOptions.prototype.calendarevent = 0;

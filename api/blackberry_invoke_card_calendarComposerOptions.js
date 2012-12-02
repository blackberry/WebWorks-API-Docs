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
 * @toc {Invoke} CalendarComposerOptions
 * @class The CalendarComposerOptions object contains options that are passed into {@link blackberry.invoke.card.invokeCalendarComposer}().
 * @BB10X
 */
blackberry.invoke.card.CalendarComposerOptions = {};

/**
 * @type Number
 * @description The account ID of the account the composer should create the event for.
 * @BB10X
 */
blackberry.invoke.card.CalendarComposerOptions.prototype.accountId = 0;

/**
 * @type Number
 * @description The folder ID of the account the composer should file this event for.
 * @BB10X
 */
blackberry.invoke.card.CalendarComposerOptions.prototype.folderId = 0;

/**
 * @type Number
 * @description The sync ID of the account for the calendar composer.
 * @BB10X
 */
blackberry.invoke.card.CalendarComposerOptions.prototype.syncId = 0;

/**
 * @type String
 * @description The the event subject that should be set when the composer is invoked.
 * @BB10X
 */
blackberry.invoke.card.CalendarComposerOptions.prototype.subject = "";

/**
 * @type String
 * @description The event notes that should be set when the composer is invoked.
 * @BB10X
 */
blackberry.invoke.card.CalendarComposerOptions.prototype.body = "";

/**
 * @type String
 * @description represents the startTime of the event. e.g: Mon Nov 26 12:30:17 2012
 * @BB10X
 */
blackberry.invoke.card.CalendarComposerOptions.prototype.startTime = "";

/**
 * @type Number
 * @description The event duration in minutes.
 * @BB10X
 */
blackberry.invoke.card.CalendarComposerOptions.prototype.duration = 0;

 /**
  * @type String []
  * @description array of participant email addresses.
  * @BB10X
  */
blackberry.invoke.card.CalendarComposerOptions.prototype.participants = [];

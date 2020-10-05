import * as tslib_1 from "tslib";
// angular
import { Component, forwardRef, HostBinding, Input, Output, EventEmitter, Renderer2, ViewChild, ViewChildren, ContentChildren, ContentChild, TemplateRef, QueryList } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { debounceTime, filter, map, first } from 'rxjs/operators';
// ng2-tag-input
import { TagInputAccessor } from '../../core/accessor';
import { listen } from '../../core/helpers/listen';
import * as constants from '../../core/constants';
import { DragProvider } from '../../core/providers/drag-provider';
import { TagInputForm } from '../tag-input-form/tag-input-form.component';
import { TagComponent } from '../tag/tag.component';
import { animations } from './animations';
import { defaults } from '../../defaults';
import { TagInputDropdown } from '../dropdown/tag-input-dropdown.component';
// angular universal hacks
/* tslint:disable-next-line */
var DragEvent = window.DragEvent;
var CUSTOM_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TagInputComponent; }),
    multi: true
};
var TagInputComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TagInputComponent, _super);
    function TagInputComponent(renderer, dragProvider) {
        var _a;
        var _this = _super.call(this) || this;
        _this.renderer = renderer;
        _this.dragProvider = dragProvider;
        /**
         * @name separatorKeys
         * @desc keyboard keys with which a user can separate items
         */
        _this.separatorKeys = defaults.tagInput.separatorKeys;
        /**
         * @name separatorKeyCodes
         * @desc keyboard key codes with which a user can separate items
         */
        _this.separatorKeyCodes = defaults.tagInput.separatorKeyCodes;
        /**
         * @name placeholder
         * @desc the placeholder of the input text
         */
        _this.placeholder = defaults.tagInput.placeholder;
        /**
         * @name secondaryPlaceholder
         * @desc placeholder to appear when the input is empty
         */
        _this.secondaryPlaceholder = defaults.tagInput.secondaryPlaceholder;
        /**
         * @name maxItems
         * @desc maximum number of items that can be added
         */
        _this.maxItems = defaults.tagInput.maxItems;
        /**
         * @name validators
         * @desc array of Validators that are used to validate the tag before it gets appended to the list
         */
        _this.validators = defaults.tagInput.validators;
        /**
         * @name asyncValidators
         * @desc array of AsyncValidator that are used to validate the tag before it gets appended to the list
         */
        _this.asyncValidators = defaults.tagInput.asyncValidators;
        /**
        * - if set to true, it will only possible to add items from the autocomplete
        * @name onlyFromAutocomplete
        */
        _this.onlyFromAutocomplete = defaults.tagInput.onlyFromAutocomplete;
        /**
         * @name errorMessages
         */
        _this.errorMessages = defaults.tagInput.errorMessages;
        /**
         * @name theme
         */
        _this.theme = defaults.tagInput.theme;
        /**
         * @name onTextChangeDebounce
         */
        _this.onTextChangeDebounce = defaults.tagInput.onTextChangeDebounce;
        /**
         * - custom id assigned to the input
         * @name id
         */
        _this.inputId = defaults.tagInput.inputId;
        /**
         * - custom class assigned to the input
         */
        _this.inputClass = defaults.tagInput.inputClass;
        /**
         * - option to clear text input when the form is blurred
         * @name clearOnBlur
         */
        _this.clearOnBlur = defaults.tagInput.clearOnBlur;
        /**
         * - hideForm
         * @name clearOnBlur
         */
        _this.hideForm = defaults.tagInput.hideForm;
        /**
         * @name addOnBlur
         */
        _this.addOnBlur = defaults.tagInput.addOnBlur;
        /**
         * @name addOnPaste
         */
        _this.addOnPaste = defaults.tagInput.addOnPaste;
        /**
         * - pattern used with the native method split() to separate patterns in the string pasted
         * @name pasteSplitPattern
         */
        _this.pasteSplitPattern = defaults.tagInput.pasteSplitPattern;
        /**
         * @name blinkIfDupe
         */
        _this.blinkIfDupe = defaults.tagInput.blinkIfDupe;
        /**
         * @name removable
         */
        _this.removable = defaults.tagInput.removable;
        /**
         * @name editable
         */
        _this.editable = defaults.tagInput.editable;
        /**
         * @name allowDupes
         */
        _this.allowDupes = defaults.tagInput.allowDupes;
        /**
         * @description if set to true, the newly added tags will be added as strings, and not objects
         * @name modelAsStrings
         */
        _this.modelAsStrings = defaults.tagInput.modelAsStrings;
        /**
         * @name trimTags
         */
        _this.trimTags = defaults.tagInput.trimTags;
        /**
         * @name ripple
         */
        _this.ripple = defaults.tagInput.ripple;
        /**
         * @name tabindex
         * @desc pass through the specified tabindex to the input
         */
        _this.tabindex = defaults.tagInput.tabIndex;
        /**
         * @name disable
         */
        _this.disable = defaults.tagInput.disable;
        /**
         * @name dragZone
         */
        _this.dragZone = defaults.tagInput.dragZone;
        /**
         * @name onRemoving
         */
        _this.onRemoving = defaults.tagInput.onRemoving;
        /**
         * @name onAdding
         */
        _this.onAdding = defaults.tagInput.onAdding;
        /**
         * @name animationDuration
         */
        _this.animationDuration = defaults.tagInput.animationDuration;
        /**
         * @name onAdd
         * @desc event emitted when adding a new item
         */
        _this.onAdd = new EventEmitter();
        /**
         * @name onRemove
         * @desc event emitted when removing an existing item
         */
        _this.onRemove = new EventEmitter();
        /**
         * @name onSelect
         * @desc event emitted when selecting an item
         */
        _this.onSelect = new EventEmitter();
        /**
         * @name onFocus
         * @desc event emitted when the input is focused
         */
        _this.onFocus = new EventEmitter();
        /**
         * @name onFocus
         * @desc event emitted when the input is blurred
         */
        _this.onBlur = new EventEmitter();
        /**
         * @name onTextChange
         * @desc event emitted when the input value changes
         */
        _this.onTextChange = new EventEmitter();
        /**
         * - output triggered when text is pasted in the form
         * @name onPaste
         */
        _this.onPaste = new EventEmitter();
        /**
         * - output triggered when tag entered is not valid
         * @name onValidationError
         */
        _this.onValidationError = new EventEmitter();
        /**
         * - output triggered when tag is edited
         * @name onTagEdited
         */
        _this.onTagEdited = new EventEmitter();
        /**
         * @name isLoading
         */
        _this.isLoading = false;
        /**
         * @name listeners
         * @desc array of events that get fired using @fireEvents
         */
        _this.listeners = (_a = {},
            _a[constants.KEYDOWN] = [],
            _a[constants.KEYUP] = [],
            _a);
        /**
         * @description emitter for the 2-way data binding inputText value
         * @name inputTextChange
         */
        _this.inputTextChange = new EventEmitter();
        /**
         * @description private variable to bind get/set
         * @name inputTextValue
         */
        _this.inputTextValue = '';
        _this.errors = [];
        /**
         * @name appendTag
         * @param tag {TagModel}
         */
        _this.appendTag = function (tag, index) {
            if (index === void 0) { index = _this.items.length; }
            var items = _this.items;
            var model = _this.modelAsStrings ? tag[_this.identifyBy] : tag;
            _this.items = tslib_1.__spread(items.slice(0, index), [
                model
            ], items.slice(index, items.length));
        };
        /**
         * @name createTag
         * @param model
         */
        _this.createTag = function (model) {
            var _a;
            var trim = function (val, key) {
                return typeof val === 'string' ? val.trim() : val[key];
            };
            return tslib_1.__assign({}, typeof model !== 'string' ? model : {}, (_a = {}, _a[_this.displayBy] = _this.trimTags ? trim(model, _this.displayBy) : model, _a[_this.identifyBy] = _this.trimTags ? trim(model, _this.identifyBy) : model, _a));
        };
        /**
         *
         * @param tag
         * @param isFromAutocomplete
         */
        _this.isTagValid = function (tag, fromAutocomplete) {
            if (fromAutocomplete === void 0) { fromAutocomplete = false; }
            var selectedItem = _this.dropdown ? _this.dropdown.selectedItem : undefined;
            var value = _this.getItemDisplay(tag).trim();
            if (selectedItem && !fromAutocomplete || !value) {
                return false;
            }
            var dupe = _this.findDupe(tag, fromAutocomplete);
            // if so, give a visual cue and return false
            if (!_this.allowDupes && dupe && _this.blinkIfDupe) {
                var model = _this.tags.find(function (item) {
                    return _this.getItemValue(item.model) === _this.getItemValue(dupe);
                });
                if (model) {
                    model.blink();
                }
            }
            var isFromAutocomplete = fromAutocomplete && _this.onlyFromAutocomplete;
            var assertions = [
                // 1. there must be no dupe OR dupes are allowed
                !dupe || _this.allowDupes,
                // 2. check max items has not been reached
                !_this.maxItemsReached,
                // 3. check item comes from autocomplete or onlyFromAutocomplete is false
                ((isFromAutocomplete) || !_this.onlyFromAutocomplete)
            ];
            return assertions.filter(Boolean).length === assertions.length;
        };
        /**
         * @name onPasteCallback
         * @param data
         */
        _this.onPasteCallback = function (data) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var getText, text, requests, resetInput;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                getText = function () {
                    var isIE = Boolean(window.clipboardData);
                    var clipboardData = isIE ? (window.clipboardData) : data.clipboardData;
                    var type = isIE ? 'Text' : 'text/plain';
                    return clipboardData === null ? '' : clipboardData.getData(type) || '';
                };
                text = getText();
                requests = text
                    .split(this.pasteSplitPattern)
                    .map(function (item) {
                    var tag = _this.createTag(item);
                    _this.setInputValue(tag[_this.displayBy]);
                    return _this.onAddingRequested(false, tag);
                });
                resetInput = function () { return setTimeout(function () { return _this.setInputValue(''); }, 50); };
                Promise.all(requests).then(function () {
                    _this.onPaste.emit(text);
                    resetInput();
                })
                    .catch(resetInput);
                return [2 /*return*/];
            });
        }); };
        return _this;
    }
    Object.defineProperty(TagInputComponent.prototype, "inputText", {
        /**
         * @name inputText
         */
        get: function () {
            return this.inputTextValue;
        },
        /**
         * @name inputText
         * @param text
         */
        set: function (text) {
            this.inputTextValue = text;
            this.inputTextChange.emit(text);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputComponent.prototype, "tabindexAttr", {
        /**
         * @desc removes the tab index if it is set - it will be passed through to the input
         * @name tabindexAttr
         */
        get: function () {
            return this.tabindex !== '' ? '-1' : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @name ngAfterViewInit
     */
    TagInputComponent.prototype.ngAfterViewInit = function () {
        // set up listeners
        var _this = this;
        this.setUpKeypressListeners();
        this.setupSeparatorKeysListener();
        this.setUpInputKeydownListeners();
        if (this.onTextChange.observers.length) {
            this.setUpTextChangeSubscriber();
        }
        // if clear on blur is set to true, subscribe to the event and clear the text's form
        if (this.clearOnBlur || this.addOnBlur) {
            this.setUpOnBlurSubscriber();
        }
        // if addOnPaste is set to true, register the handler and add items
        if (this.addOnPaste) {
            this.setUpOnPasteListener();
        }
        var statusChanges$ = this.inputForm.form.statusChanges;
        statusChanges$.pipe(filter(function (status) { return status !== 'PENDING'; })).subscribe(function () {
            _this.errors = _this.inputForm.getErrorMessages(_this.errorMessages);
        });
        this.isProgressBarVisible$ = statusChanges$.pipe(map(function (status) {
            return status === 'PENDING' || _this.isLoading;
        }));
        // if hideForm is set to true, remove the input
        if (this.hideForm) {
            this.inputForm.destroy();
        }
    };
    /**
     * @name ngOnInit
     */
    TagInputComponent.prototype.ngOnInit = function () {
        // if the number of items specified in the model is > of the value of maxItems
        // degrade gracefully and let the max number of items to be the number of items in the model
        // though, warn the user.
        var hasReachedMaxItems = this.maxItems !== undefined &&
            this.items &&
            this.items.length > this.maxItems;
        if (hasReachedMaxItems) {
            this.maxItems = this.items.length;
            console.warn(constants.MAX_ITEMS_WARNING);
        }
        // Setting editable to false to fix problem with tags in IE still being editable when
        // onlyFromAutocomplete is true
        this.editable = this.onlyFromAutocomplete ? false : this.editable;
        this.setAnimationMetadata();
    };
    /**
     * @name onRemoveRequested
     * @param tag
     * @param index
     */
    TagInputComponent.prototype.onRemoveRequested = function (tag, index) {
        var _this = this;
        return new Promise(function (resolve) {
            var subscribeFn = function (model) {
                _this.removeItem(model, index);
                resolve(tag);
            };
            _this.onRemoving ?
                _this.onRemoving(tag)
                    .pipe(first())
                    .subscribe(subscribeFn) : subscribeFn(tag);
        });
    };
    /**
     * @name onAddingRequested
     * @param fromAutocomplete {boolean}
     * @param tag {TagModel}
     * @param index? {number}
     * @param giveupFocus? {boolean}
     */
    TagInputComponent.prototype.onAddingRequested = function (fromAutocomplete, tag, index, giveupFocus) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var subscribeFn = function (model) {
                return _this
                    .addItem(fromAutocomplete, model, index, giveupFocus)
                    .then(resolve)
                    .catch(reject);
            };
            return _this.onAdding ?
                _this.onAdding(tag)
                    .pipe(first())
                    .subscribe(subscribeFn, reject) : subscribeFn(tag);
        });
    };
    /**
     * @name selectItem
     * @desc selects item passed as parameter as the selected tag
     * @param item
     * @param emit
     */
    TagInputComponent.prototype.selectItem = function (item, emit) {
        if (emit === void 0) { emit = true; }
        var isReadonly = item && typeof item !== 'string' && item.readonly;
        if (isReadonly || this.selectedTag === item) {
            return;
        }
        this.selectedTag = item;
        if (emit) {
            this.onSelect.emit(item);
        }
    };
    /**
     * @name fireEvents
     * @desc goes through the list of the events for a given eventName, and fires each of them
     * @param eventName
     * @param $event
     */
    TagInputComponent.prototype.fireEvents = function (eventName, $event) {
        var _this = this;
        this.listeners[eventName].forEach(function (listener) { return listener.call(_this, $event); });
    };
    /**
     * @name handleKeydown
     * @desc handles action when the user hits a keyboard key
     * @param data
     */
    TagInputComponent.prototype.handleKeydown = function (data) {
        var event = data.event;
        var key = event.keyCode || event.which;
        var shiftKey = event.shiftKey || false;
        switch (constants.KEY_PRESS_ACTIONS[key]) {
            case constants.ACTIONS_KEYS.DELETE:
                if (this.selectedTag && this.removable) {
                    var index = this.items.indexOf(this.selectedTag);
                    this.onRemoveRequested(this.selectedTag, index);
                }
                break;
            case constants.ACTIONS_KEYS.SWITCH_PREV:
                this.moveToTag(data.model, constants.PREV);
                break;
            case constants.ACTIONS_KEYS.SWITCH_NEXT:
                this.moveToTag(data.model, constants.NEXT);
                break;
            case constants.ACTIONS_KEYS.TAB:
                if (shiftKey) {
                    if (this.isFirstTag(data.model)) {
                        return;
                    }
                    this.moveToTag(data.model, constants.PREV);
                }
                else {
                    if (this.isLastTag(data.model) && (this.disable || this.maxItemsReached)) {
                        return;
                    }
                    this.moveToTag(data.model, constants.NEXT);
                }
                break;
            default:
                return;
        }
        // prevent default behaviour
        event.preventDefault();
    };
    TagInputComponent.prototype.onFormSubmit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.onAddingRequested(false, this.formValue)];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = _b.sent();
                        return [2 /*return*/];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @name setInputValue
     * @param value
     */
    TagInputComponent.prototype.setInputValue = function (value, emitEvent) {
        if (emitEvent === void 0) { emitEvent = true; }
        var control = this.getControl();
        // update form value with the transformed item
        control.setValue(value, { emitEvent: emitEvent });
    };
    /**
     * @name getControl
     */
    TagInputComponent.prototype.getControl = function () {
        return this.inputForm.value;
    };
    /**
     * @name focus
     * @param applyFocus
     * @param displayAutocomplete
     */
    TagInputComponent.prototype.focus = function (applyFocus, displayAutocomplete) {
        if (applyFocus === void 0) { applyFocus = false; }
        if (displayAutocomplete === void 0) { displayAutocomplete = false; }
        if (this.dragProvider.getState('dragging')) {
            return;
        }
        this.selectItem(undefined, false);
        if (applyFocus) {
            this.inputForm.focus();
            this.onFocus.emit(this.formValue);
        }
    };
    /**
     * @name blur
     */
    TagInputComponent.prototype.blur = function () {
        this.onTouched();
        this.onBlur.emit(this.formValue);
    };
    /**
     * @name hasErrors
     */
    TagInputComponent.prototype.hasErrors = function () {
        return !!this.inputForm && this.inputForm.hasErrors();
    };
    /**
     * @name isInputFocused
     */
    TagInputComponent.prototype.isInputFocused = function () {
        return !!this.inputForm && this.inputForm.isInputFocused();
    };
    /**
     * - this is the one way I found to tell if the template has been passed and it is not
     * the template for the menu item
     * @name hasCustomTemplate
     */
    TagInputComponent.prototype.hasCustomTemplate = function () {
        var template = this.templates ? this.templates.first : undefined;
        var menuTemplate = this.dropdown && this.dropdown.templates ?
            this.dropdown.templates.first : undefined;
        return Boolean(template && template !== menuTemplate);
    };
    Object.defineProperty(TagInputComponent.prototype, "maxItemsReached", {
        /**
         * @name maxItemsReached
         */
        get: function () {
            return this.maxItems !== undefined &&
                this.items.length >= this.maxItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputComponent.prototype, "formValue", {
        /**
         * @name formValue
         */
        get: function () {
            var form = this.inputForm.value;
            return form ? form.value : '';
        },
        enumerable: true,
        configurable: true
    });
    /**3
     * @name onDragStarted
     * @param event
     * @param index
     */
    TagInputComponent.prototype.onDragStarted = function (event, tag, index) {
        event.stopPropagation();
        var item = { zone: this.dragZone, tag: tag, index: index };
        this.dragProvider.setSender(this);
        this.dragProvider.setDraggedItem(event, item);
        this.dragProvider.setState({ dragging: true, index: index });
    };
    /**
     * @name onDragOver
     * @param event
     */
    TagInputComponent.prototype.onDragOver = function (event, index) {
        this.dragProvider.setState({ dropping: true });
        this.dragProvider.setReceiver(this);
        event.preventDefault();
    };
    /**
     * @name onTagDropped
     * @param event
     * @param index
     */
    TagInputComponent.prototype.onTagDropped = function (event, index) {
        var item = this.dragProvider.getDraggedItem(event);
        if (!item || item.zone !== this.dragZone) {
            return;
        }
        this.dragProvider.onTagDropped(item.tag, item.index, index);
        event.preventDefault();
        event.stopPropagation();
    };
    /**
     * @name isDropping
     */
    TagInputComponent.prototype.isDropping = function () {
        var isReceiver = this.dragProvider.receiver === this;
        var isDropping = this.dragProvider.getState('dropping');
        return Boolean(isReceiver && isDropping);
    };
    /**
     * @name onTagBlurred
     * @param changedElement {TagModel}
     * @param index {number}
     */
    TagInputComponent.prototype.onTagBlurred = function (changedElement, index) {
        this.items[index] = changedElement;
        this.blur();
    };
    /**
     * @name trackBy
     * @param items
     */
    TagInputComponent.prototype.trackBy = function (index, item) {
        return item[this.identifyBy];
    };
    /**
     * @name updateEditedTag
     * @param tag
     */
    TagInputComponent.prototype.updateEditedTag = function (_a) {
        var tag = _a.tag, index = _a.index;
        this.onTagEdited.emit(tag);
    };
    /**
     * @name moveToTag
     * @param item
     * @param direction
     */
    TagInputComponent.prototype.moveToTag = function (item, direction) {
        var isLast = this.isLastTag(item);
        var isFirst = this.isFirstTag(item);
        var stopSwitch = (direction === constants.NEXT && isLast) ||
            (direction === constants.PREV && isFirst);
        if (stopSwitch) {
            this.focus(true);
            return;
        }
        var offset = direction === constants.NEXT ? 1 : -1;
        var index = this.getTagIndex(item) + offset;
        var tag = this.getTagAtIndex(index);
        return tag.select.call(tag);
    };
    /**
     * @name isFirstTag
     * @param item {TagModel}
     */
    TagInputComponent.prototype.isFirstTag = function (item) {
        return this.tags.first.model === item;
    };
    /**
     * @name isLastTag
     * @param item {TagModel}
     */
    TagInputComponent.prototype.isLastTag = function (item) {
        return this.tags.last.model === item;
    };
    /**
     * @name getTagIndex
     * @param item
     */
    TagInputComponent.prototype.getTagIndex = function (item) {
        var tags = this.tags.toArray();
        return tags.findIndex(function (tag) { return tag.model === item; });
    };
    /**
     * @name getTagAtIndex
     * @param index
     */
    TagInputComponent.prototype.getTagAtIndex = function (index) {
        var tags = this.tags.toArray();
        return tags[index];
    };
    /**
     * @name removeItem
     * @desc removes an item from the array of the model
     * @param tag {TagModel}
     * @param index {number}
     */
    TagInputComponent.prototype.removeItem = function (tag, index) {
        this.items = this.getItemsWithout(index);
        // if the removed tag was selected, set it as undefined
        if (this.selectedTag === tag) {
            this.selectItem(undefined, false);
        }
        // focus input
        this.focus(true, false);
        // emit remove event
        this.onRemove.emit(tag);
    };
    /**
     * @name addItem
     * @desc adds the current text model to the items array
     * @param fromAutocomplete {boolean}
     * @param item {TagModel}
     * @param index? {number}
     * @param giveupFocus? {boolean}
     */
    TagInputComponent.prototype.addItem = function (fromAutocomplete, item, index, giveupFocus) {
        var _this = this;
        if (fromAutocomplete === void 0) { fromAutocomplete = false; }
        var display = this.getItemDisplay(item);
        var tag = this.createTag(item);
        if (fromAutocomplete) {
            this.setInputValue(this.getItemValue(item, true));
        }
        return new Promise(function (resolve, reject) {
            /**
             * @name reset
             */
            var reset = function () {
                // reset control and focus input
                _this.setInputValue('');
                if (giveupFocus) {
                    _this.focus(false, false);
                }
                else {
                    // focus input
                    _this.focus(true, false);
                }
                resolve(display);
            };
            var appendItem = function () {
                _this.appendTag(tag, index);
                // emit event
                _this.onAdd.emit(tag);
                if (!_this.dropdown) {
                    return;
                }
                _this.dropdown.hide();
                if (_this.dropdown.showDropdownIfEmpty) {
                    _this.dropdown.show();
                }
            };
            var status = _this.inputForm.form.status;
            var isTagValid = _this.isTagValid(tag, fromAutocomplete);
            var onValidationError = function () {
                _this.onValidationError.emit(tag);
                return reject();
            };
            if (status === 'VALID' && isTagValid) {
                appendItem();
                return reset();
            }
            if (status === 'INVALID' || !isTagValid) {
                reset();
                return onValidationError();
            }
            if (status === 'PENDING') {
                var statusUpdate$ = _this.inputForm.form.statusChanges;
                return statusUpdate$
                    .pipe(filter(function (statusUpdate) { return statusUpdate !== 'PENDING'; }), first())
                    .subscribe(function (statusUpdate) {
                    if (statusUpdate === 'VALID' && isTagValid) {
                        appendItem();
                        resolve();
                    }
                    else {
                        onValidationError();
                    }
                });
            }
        });
    };
    /**
     * @name setupSeparatorKeysListener
     */
    TagInputComponent.prototype.setupSeparatorKeysListener = function () {
        var _this = this;
        var useSeparatorKeys = this.separatorKeyCodes.length > 0 || this.separatorKeys.length > 0;
        var listener = function ($event) {
            var hasKeyCode = _this.separatorKeyCodes.indexOf($event.keyCode) >= 0;
            var hasKey = _this.separatorKeys.indexOf($event.key) >= 0;
            // the keyCode of keydown event is 229 when IME is processing the key event.
            var isIMEProcessing = $event.keyCode === 229;
            if (hasKeyCode || (hasKey && !isIMEProcessing)) {
                $event.preventDefault();
                _this.onAddingRequested(false, _this.formValue)
                    .catch(function () { });
            }
        };
        listen.call(this, constants.KEYDOWN, listener, useSeparatorKeys);
    };
    /**
     * @name setUpKeypressListeners
     */
    TagInputComponent.prototype.setUpKeypressListeners = function () {
        var _this = this;
        var listener = function ($event) {
            var isCorrectKey = $event.keyCode === 37 || $event.keyCode === 8;
            if (isCorrectKey &&
                !_this.formValue &&
                _this.items.length) {
                _this.tags.last.select.call(_this.tags.last);
            }
        };
        // setting up the keypress listeners
        listen.call(this, constants.KEYDOWN, listener);
    };
    /**
     * @name setUpKeydownListeners
     */
    TagInputComponent.prototype.setUpInputKeydownListeners = function () {
        var _this = this;
        this.inputForm.onKeydown.subscribe(function (event) {
            _this.fireEvents('keydown', event);
            if (event.key === 'Backspace' && _this.formValue.trim() === '') {
                event.preventDefault();
            }
        });
    };
    /**
     * @name setUpOnPasteListener
     */
    TagInputComponent.prototype.setUpOnPasteListener = function () {
        var _this = this;
        var input = this.inputForm.input.nativeElement;
        // attach listener to input
        this.renderer.listen(input, 'paste', function (event) {
            _this.onPasteCallback(event);
            event.preventDefault();
            return true;
        });
    };
    /**
     * @name setUpTextChangeSubscriber
     */
    TagInputComponent.prototype.setUpTextChangeSubscriber = function () {
        var _this = this;
        this.inputForm.form
            .valueChanges
            .pipe(debounceTime(this.onTextChangeDebounce))
            .subscribe(function (value) {
            _this.onTextChange.emit(value.item);
        });
    };
    /**
     * @name setUpOnBlurSubscriber
     */
    TagInputComponent.prototype.setUpOnBlurSubscriber = function () {
        var _this = this;
        var filterFn = function () {
            var isVisible = _this.dropdown && _this.dropdown.isVisible;
            return !isVisible && !!_this.formValue;
        };
        this.inputForm
            .onBlur
            .pipe(debounceTime(100), filter(filterFn))
            .subscribe(function () {
            var reset = function () { return _this.setInputValue(''); };
            if (_this.addOnBlur) {
                return _this
                    .onAddingRequested(false, _this.formValue, undefined, true)
                    .then(reset)
                    .catch(reset);
            }
            reset();
        });
    };
    /**
     * @name findDupe
     * @param tag
     * @param isFromAutocomplete
     */
    TagInputComponent.prototype.findDupe = function (tag, isFromAutocomplete) {
        var _this = this;
        var identifyBy = isFromAutocomplete ? this.dropdown.identifyBy : this.identifyBy;
        var id = tag[identifyBy];
        return this.items.find(function (item) { return _this.getItemValue(item) === id; });
    };
    /**
     * @name setAnimationMetadata
     */
    TagInputComponent.prototype.setAnimationMetadata = function () {
        this.animationMetadata = {
            value: 'in',
            params: tslib_1.__assign({}, this.animationDuration)
        };
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], TagInputComponent.prototype, "separatorKeys", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], TagInputComponent.prototype, "separatorKeyCodes", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], TagInputComponent.prototype, "placeholder", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], TagInputComponent.prototype, "secondaryPlaceholder", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], TagInputComponent.prototype, "maxItems", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], TagInputComponent.prototype, "validators", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], TagInputComponent.prototype, "asyncValidators", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TagInputComponent.prototype, "onlyFromAutocomplete", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TagInputComponent.prototype, "errorMessages", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], TagInputComponent.prototype, "theme", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TagInputComponent.prototype, "onTextChangeDebounce", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TagInputComponent.prototype, "inputId", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], TagInputComponent.prototype, "inputClass", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], TagInputComponent.prototype, "clearOnBlur", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], TagInputComponent.prototype, "hideForm", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], TagInputComponent.prototype, "addOnBlur", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], TagInputComponent.prototype, "addOnPaste", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TagInputComponent.prototype, "pasteSplitPattern", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TagInputComponent.prototype, "blinkIfDupe", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TagInputComponent.prototype, "removable", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], TagInputComponent.prototype, "editable", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TagInputComponent.prototype, "allowDupes", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TagInputComponent.prototype, "modelAsStrings", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TagInputComponent.prototype, "trimTags", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], TagInputComponent.prototype, "inputText", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], TagInputComponent.prototype, "ripple", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], TagInputComponent.prototype, "tabindex", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], TagInputComponent.prototype, "disable", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], TagInputComponent.prototype, "dragZone", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TagInputComponent.prototype, "onRemoving", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TagInputComponent.prototype, "onAdding", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TagInputComponent.prototype, "animationDuration", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], TagInputComponent.prototype, "onAdd", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], TagInputComponent.prototype, "onRemove", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], TagInputComponent.prototype, "onSelect", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], TagInputComponent.prototype, "onFocus", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], TagInputComponent.prototype, "onBlur", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], TagInputComponent.prototype, "onTextChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], TagInputComponent.prototype, "onPaste", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], TagInputComponent.prototype, "onValidationError", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], TagInputComponent.prototype, "onTagEdited", void 0);
    tslib_1.__decorate([
        ContentChild(TagInputDropdown, { static: false }),
        tslib_1.__metadata("design:type", TagInputDropdown)
    ], TagInputComponent.prototype, "dropdown", void 0);
    tslib_1.__decorate([
        ContentChildren(TemplateRef, { descendants: false }),
        tslib_1.__metadata("design:type", QueryList)
    ], TagInputComponent.prototype, "templates", void 0);
    tslib_1.__decorate([
        ViewChild(TagInputForm, { static: false }),
        tslib_1.__metadata("design:type", TagInputForm)
    ], TagInputComponent.prototype, "inputForm", void 0);
    tslib_1.__decorate([
        ViewChildren(TagComponent),
        tslib_1.__metadata("design:type", QueryList)
    ], TagInputComponent.prototype, "tags", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], TagInputComponent.prototype, "inputTextChange", void 0);
    tslib_1.__decorate([
        HostBinding('attr.tabindex'),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [])
    ], TagInputComponent.prototype, "tabindexAttr", null);
    TagInputComponent = tslib_1.__decorate([
        Component({
            selector: 'tag-input',
            providers: [CUSTOM_ACCESSOR],
            template: "<div\n    [ngClass]=\"theme\"\n    class=\"ng2-tag-input\"\n    (click)=\"focus(true, false)\"\n    [attr.tabindex]=\"-1\"\n    (drop)=\"dragZone ? onTagDropped($event, undefined) : undefined\"\n    (dragenter)=\"dragZone ? onDragOver($event) : undefined\"\n    (dragover)=\"dragZone ? onDragOver($event) : undefined\"\n    (dragend)=\"dragZone ? dragProvider.onDragEnd() : undefined\"\n    [class.ng2-tag-input--dropping]=\"isDropping()\"\n    [class.ng2-tag-input--disabled]=\"disable\"\n    [class.ng2-tag-input--loading]=\"isLoading\"\n    [class.ng2-tag-input--invalid]=\"hasErrors()\"\n    [class.ng2-tag-input--focused]=\"isInputFocused()\"\n>\n\n    <!-- TAGS -->\n    <div class=\"ng2-tags-container\">\n        <tag\n            *ngFor=\"let item of items; let i = index; trackBy: trackBy\"\n            (onSelect)=\"selectItem(item)\"\n            (onRemove)=\"onRemoveRequested(item, i)\"\n            (onKeyDown)=\"handleKeydown($event)\"\n            (onTagEdited)=\"updateEditedTag($event)\"\n            (onBlur)=\"onTagBlurred($event, i)\"\n            draggable=\"{{ editable }}\"\n            (dragstart)=\"dragZone ? onDragStarted($event, item, i) : undefined\"\n            (drop)=\"dragZone ? onTagDropped($event, i) : undefined\"\n            (dragenter)=\"dragZone ? onDragOver($event) : undefined\"\n            (dragover)=\"dragZone ? onDragOver($event, i) : undefined\"\n            (dragleave)=\"dragZone ? dragProvider.onDragEnd() : undefined\"\n            [canAddTag]=\"isTagValid\"\n            [attr.tabindex]=\"0\"\n            [disabled]=\"disable\"\n            [@animation]=\"animationMetadata\"\n            [hasRipple]=\"ripple\"\n            [index]=\"i\"\n            [removable]=\"removable\"\n            [editable]=\"editable\"\n            [displayBy]=\"displayBy\"\n            [identifyBy]=\"identifyBy\"\n            [template]=\"!!hasCustomTemplate() ? templates.first : undefined\"\n            [draggable]=\"dragZone\"\n            [model]=\"item\"\n        >\n        </tag>\n\n        <tag-input-form\n            (onSubmit)=\"onFormSubmit()\"\n            (onBlur)=\"blur()\"\n            (click)=\"dropdown ? dropdown.show() : undefined\"\n            (onKeydown)=\"fireEvents('keydown', $event)\"\n            (onKeyup)=\"fireEvents('keyup', $event)\"\n            [(inputText)]=\"inputText\"\n            [disabled]=\"disable\"\n            [validators]=\"validators\"\n            [asyncValidators]=\"asyncValidators\"\n            [hidden]=\"maxItemsReached\"\n            [placeholder]=\"items.length ? placeholder : secondaryPlaceholder\"\n            [inputClass]=\"inputClass\"\n            [inputId]=\"inputId\"\n            [tabindex]=\"tabindex\"\n        >\n        </tag-input-form>\n    </div>\n\n    <div\n        class=\"progress-bar\"\n        *ngIf=\"isProgressBarVisible$ | async\"\n    ></div>\n</div>\n\n<!-- ERRORS -->\n<div\n    *ngIf=\"hasErrors()\"\n    [ngClass]=\"theme\"\n    class=\"error-messages\"\n>\n    <p\n        *ngFor=\"let error of errors\"\n        class=\"error-message\"\n    >\n        <span>{{ error }}</span>\n    </p>\n</div>\n<ng-content></ng-content>",
            animations: animations,
            styles: [".dark tag:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:.25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.dark.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{box-shadow:inset 0 1px 1px #d9534f;border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}.progress-bar,.progress-bar:before{height:2px;width:100%;margin:0}.progress-bar{background-color:#2196f3;display:flex;position:absolute;bottom:0}.progress-bar:before{background-color:#82c4f8;content:\"\";-webkit-animation:2s cubic-bezier(.4,0,.2,1) infinite running-progress;animation:2s cubic-bezier(.4,0,.2,1) infinite running-progress}@-webkit-keyframes running-progress{0%{margin-left:0;margin-right:100%}50%{margin-left:25%;margin-right:0}100%{margin-left:100%;margin-right:0}}@keyframes running-progress{0%{margin-left:0;margin-right:100%}50%{margin-left:25%;margin-right:0}100%{margin-left:100%;margin-right:0}}tag{display:flex;flex-direction:row;flex-wrap:wrap;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:400;font-size:1em;letter-spacing:.05rem;color:#444;border-radius:16px;transition:.3s;margin:.1rem .3rem .1rem 0;padding:.08rem .45rem;height:32px;line-height:34px;background:#efefef;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}tag:not(.readonly):not(.tag--editing):focus{background:#2196f3;color:#fff;box-shadow:0 2px 3px 1px #d4d1d1}tag:not(.readonly):not(.tag--editing):active{background:#0d8aee;color:#fff;box-shadow:0 2px 3px 1px #d4d1d1}tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#e2e2e2;color:initial;box-shadow:0 2px 3px 1px #d4d1d1}tag.readonly{cursor:default}tag.readonly:focus,tag:focus{outline:0}tag.tag--editing{background-color:#fff;border:1px solid #ccc;cursor:text}.minimal tag{display:flex;flex-direction:row;flex-wrap:wrap;border-radius:0;background:#f9f9f9;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.minimal tag:not(.readonly):not(.tag--editing):active,.minimal tag:not(.readonly):not(.tag--editing):focus{background:#d0d0d0;color:initial}.minimal tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#ececec}.minimal tag.readonly{cursor:default}.minimal tag.readonly:focus,.minimal tag:focus{outline:0}.minimal tag.tag--editing{cursor:text}.dark tag{display:flex;flex-direction:row;flex-wrap:wrap;color:#f9f9f9;border-radius:3px;background:#444;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.dark tag:not(.readonly):not(.tag--editing):focus{background:#efefef;color:#444}.dark tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#2b2b2b;color:#f9f9f9}.dark tag.readonly{cursor:default}.dark tag.readonly:focus,.dark tag:focus{outline:0}.dark tag.tag--editing{cursor:text}.bootstrap tag{display:flex;flex-direction:row;flex-wrap:wrap;color:#f9f9f9;border-radius:.25rem;background:#0275d8;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.bootstrap tag:not(.readonly):not(.tag--editing):active,.bootstrap tag:not(.readonly):not(.tag--editing):focus{background:#025aa5}.bootstrap tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#0267bf;color:#f9f9f9}.bootstrap tag.readonly{cursor:default}.bootstrap tag.readonly:focus,.bootstrap tag:focus{outline:0}.bootstrap tag.tag--editing{cursor:text}.bootstrap3-info tag{display:flex;flex-direction:row;flex-wrap:wrap;font-family:inherit;font-weight:400;font-size:95%;color:#fff;border-radius:.25em;background:#5bc0de;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative;padding:.25em .6em;text-align:center;white-space:nowrap}.bootstrap3-info tag:not(.readonly):not(.tag--editing):active,.bootstrap3-info tag:not(.readonly):not(.tag--editing):focus{background:#28a1c5}.bootstrap3-info tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#46b8da;color:#fff}.bootstrap3-info tag.readonly{cursor:default}.bootstrap3-info tag.readonly:focus,.bootstrap3-info tag:focus{outline:0}.bootstrap3-info tag.tag--editing{cursor:text}:host{display:block}"]
        }),
        tslib_1.__metadata("design:paramtypes", [Renderer2,
            DragProvider])
    ], TagInputComponent);
    return TagInputComponent;
}(TagInputAccessor));
export { TagInputComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWlucHV0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNoaXBzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy90YWctaW5wdXQvdGFnLWlucHV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxVQUFVO0FBQ1YsT0FBTyxFQUNILFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFNBQVMsRUFDVCxTQUFTLEVBQ1QsWUFBWSxFQUNaLGVBQWUsRUFDZixZQUFZLEVBRVosV0FBVyxFQUNYLFNBQVMsRUFFWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBR0gsaUJBQWlCLEVBRXBCLE1BQU0sZ0JBQWdCLENBQUM7QUFJeEIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLGdCQUFnQjtBQUNoQixPQUFPLEVBQUUsZ0JBQWdCLEVBQVksTUFBTSxxQkFBcUIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbkQsT0FBTyxLQUFLLFNBQVMsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsWUFBWSxFQUFjLE1BQU0sb0NBQW9DLENBQUM7QUFFOUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUU1RSwwQkFBMEI7QUFDMUIsOEJBQThCO0FBQzlCLElBQU0sU0FBUyxHQUFJLE1BQWMsQ0FBQyxTQUFTLENBQUM7QUFFNUMsSUFB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QVMsQ0FBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7MENBQW1CLFlBQVk7d0RBQUM7SUEwQi9DO1FBQTNCLFlBQVksQ0FBQyxZQUFZLENBQUM7MENBQWMsU0FBUzttREFBZTtJQWV2RDtRQUFULE1BQU0sRUFBRTswQ0FBeUIsWUFBWTs4REFBOEI7SUFhNUU7UUFEQyxXQUFXLENBQUMsZUFBZSxDQUFDOzs7eURBRzVCO0lBN1NRLGlCQUFpQjtRQVA3QixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUM7WUFFNUIsNmxHQUF3QztZQUN4QyxVQUFVLFlBQUE7O1NBQ2IsQ0FBQztpREF5VHlDLFNBQVM7WUFDZCxZQUFZO09BelRyQyxpQkFBaUIsQ0F1a0M3QjtJQUFELHdCQUFDO0NBQUEsQUF2a0NELENBQXVDLGdCQUFnQixHQXVrQ3REO1NBdmtDWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBmb3J3YXJkUmVmLFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIElucHV0LFxuICAgIE91dHB1dCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgUmVuZGVyZXIyLFxuICAgIFZpZXdDaGlsZCxcbiAgICBWaWV3Q2hpbGRyZW4sXG4gICAgQ29udGVudENoaWxkcmVuLFxuICAgIENvbnRlbnRDaGlsZCxcbiAgICBPbkluaXQsXG4gICAgVGVtcGxhdGVSZWYsXG4gICAgUXVlcnlMaXN0LFxuICAgIEFmdGVyVmlld0luaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gICAgQXN5bmNWYWxpZGF0b3JGbixcbiAgICBGb3JtQ29udHJvbCxcbiAgICBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICBWYWxpZGF0b3JGblxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8vIHJ4XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciwgbWFwLCBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLy8gbmcyLXRhZy1pbnB1dFxuaW1wb3J0IHsgVGFnSW5wdXRBY2Nlc3NvciwgVGFnTW9kZWwgfSBmcm9tICcuLi8uLi9jb3JlL2FjY2Vzc29yJztcbmltcG9ydCB7IGxpc3RlbiB9IGZyb20gJy4uLy4uL2NvcmUvaGVscGVycy9saXN0ZW4nO1xuaW1wb3J0ICogYXMgY29uc3RhbnRzIGZyb20gJy4uLy4uL2NvcmUvY29uc3RhbnRzJztcblxuaW1wb3J0IHsgRHJhZ1Byb3ZpZGVyLCBEcmFnZ2VkVGFnIH0gZnJvbSAnLi4vLi4vY29yZS9wcm92aWRlcnMvZHJhZy1wcm92aWRlcic7XG5cbmltcG9ydCB7IFRhZ0lucHV0Rm9ybSB9IGZyb20gJy4uL3RhZy1pbnB1dC1mb3JtL3RhZy1pbnB1dC1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWdDb21wb25lbnQgfSBmcm9tICcuLi90YWcvdGFnLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IGFuaW1hdGlvbnMgfSBmcm9tICcuL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgZGVmYXVsdHMgfSBmcm9tICcuLi8uLi9kZWZhdWx0cyc7XG5pbXBvcnQgeyBUYWdJbnB1dERyb3Bkb3duIH0gZnJvbSAnLi4vZHJvcGRvd24vdGFnLWlucHV0LWRyb3Bkb3duLmNvbXBvbmVudCc7XG5cbi8vIGFuZ3VsYXIgdW5pdmVyc2FsIGhhY2tzXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmNvbnN0IERyYWdFdmVudCA9ICh3aW5kb3cgYXMgYW55KS5EcmFnRXZlbnQ7XG5cbmNvbnN0IENVU1RPTV9BQ0NFU1NPUiA9IHtcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUYWdJbnB1dENvbXBvbmVudCksXG4gICAgbXVsdGk6IHRydWVcbn07XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3RhZy1pbnB1dCcsXG4gICAgcHJvdmlkZXJzOiBbQ1VTVE9NX0FDQ0VTU09SXSxcbiAgICBzdHlsZVVybHM6IFsnLi90YWctaW5wdXQuc3R5bGUuc2NzcyddLFxuICAgIHRlbXBsYXRlVXJsOiAnLi90YWctaW5wdXQudGVtcGxhdGUuaHRtbCcsXG4gICAgYW5pbWF0aW9uc1xufSlcbmV4cG9ydCBjbGFzcyBUYWdJbnB1dENvbXBvbmVudCBleHRlbmRzIFRhZ0lucHV0QWNjZXNzb3IgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAgIC8qKlxuICAgICAqIEBuYW1lIHNlcGFyYXRvcktleXNcbiAgICAgKiBAZGVzYyBrZXlib2FyZCBrZXlzIHdpdGggd2hpY2ggYSB1c2VyIGNhbiBzZXBhcmF0ZSBpdGVtc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzZXBhcmF0b3JLZXlzOiBzdHJpbmdbXSA9IGRlZmF1bHRzLnRhZ0lucHV0LnNlcGFyYXRvcktleXM7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZXBhcmF0b3JLZXlDb2Rlc1xuICAgICAqIEBkZXNjIGtleWJvYXJkIGtleSBjb2RlcyB3aXRoIHdoaWNoIGEgdXNlciBjYW4gc2VwYXJhdGUgaXRlbXNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc2VwYXJhdG9yS2V5Q29kZXM6IG51bWJlcltdID0gZGVmYXVsdHMudGFnSW5wdXQuc2VwYXJhdG9yS2V5Q29kZXM7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBwbGFjZWhvbGRlclxuICAgICAqIEBkZXNjIHRoZSBwbGFjZWhvbGRlciBvZiB0aGUgaW5wdXQgdGV4dFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBwbGFjZWhvbGRlcjogc3RyaW5nID0gZGVmYXVsdHMudGFnSW5wdXQucGxhY2Vob2xkZXI7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZWNvbmRhcnlQbGFjZWhvbGRlclxuICAgICAqIEBkZXNjIHBsYWNlaG9sZGVyIHRvIGFwcGVhciB3aGVuIHRoZSBpbnB1dCBpcyBlbXB0eVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzZWNvbmRhcnlQbGFjZWhvbGRlcjogc3RyaW5nID0gZGVmYXVsdHMudGFnSW5wdXQuc2Vjb25kYXJ5UGxhY2Vob2xkZXI7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBtYXhJdGVtc1xuICAgICAqIEBkZXNjIG1heGltdW0gbnVtYmVyIG9mIGl0ZW1zIHRoYXQgY2FuIGJlIGFkZGVkXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIG1heEl0ZW1zOiBudW1iZXIgPSBkZWZhdWx0cy50YWdJbnB1dC5tYXhJdGVtcztcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHZhbGlkYXRvcnNcbiAgICAgKiBAZGVzYyBhcnJheSBvZiBWYWxpZGF0b3JzIHRoYXQgYXJlIHVzZWQgdG8gdmFsaWRhdGUgdGhlIHRhZyBiZWZvcmUgaXQgZ2V0cyBhcHBlbmRlZCB0byB0aGUgbGlzdFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB2YWxpZGF0b3JzOiBWYWxpZGF0b3JGbltdID0gZGVmYXVsdHMudGFnSW5wdXQudmFsaWRhdG9ycztcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGFzeW5jVmFsaWRhdG9yc1xuICAgICAqIEBkZXNjIGFycmF5IG9mIEFzeW5jVmFsaWRhdG9yIHRoYXQgYXJlIHVzZWQgdG8gdmFsaWRhdGUgdGhlIHRhZyBiZWZvcmUgaXQgZ2V0cyBhcHBlbmRlZCB0byB0aGUgbGlzdFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBhc3luY1ZhbGlkYXRvcnM6IEFzeW5jVmFsaWRhdG9yRm5bXSA9IGRlZmF1bHRzLnRhZ0lucHV0LmFzeW5jVmFsaWRhdG9ycztcblxuICAgIC8qKlxuICAgICogLSBpZiBzZXQgdG8gdHJ1ZSwgaXQgd2lsbCBvbmx5IHBvc3NpYmxlIHRvIGFkZCBpdGVtcyBmcm9tIHRoZSBhdXRvY29tcGxldGVcbiAgICAqIEBuYW1lIG9ubHlGcm9tQXV0b2NvbXBsZXRlXG4gICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgb25seUZyb21BdXRvY29tcGxldGUgPSBkZWZhdWx0cy50YWdJbnB1dC5vbmx5RnJvbUF1dG9jb21wbGV0ZTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGVycm9yTWVzc2FnZXNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZXJyb3JNZXNzYWdlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IGRlZmF1bHRzLnRhZ0lucHV0LmVycm9yTWVzc2FnZXM7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSB0aGVtZVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB0aGVtZTogc3RyaW5nID0gZGVmYXVsdHMudGFnSW5wdXQudGhlbWU7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvblRleHRDaGFuZ2VEZWJvdW5jZVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBvblRleHRDaGFuZ2VEZWJvdW5jZSA9IGRlZmF1bHRzLnRhZ0lucHV0Lm9uVGV4dENoYW5nZURlYm91bmNlO1xuXG4gICAgLyoqXG4gICAgICogLSBjdXN0b20gaWQgYXNzaWduZWQgdG8gdGhlIGlucHV0XG4gICAgICogQG5hbWUgaWRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgaW5wdXRJZCA9IGRlZmF1bHRzLnRhZ0lucHV0LmlucHV0SWQ7XG5cbiAgICAvKipcbiAgICAgKiAtIGN1c3RvbSBjbGFzcyBhc3NpZ25lZCB0byB0aGUgaW5wdXRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgaW5wdXRDbGFzczogc3RyaW5nID0gZGVmYXVsdHMudGFnSW5wdXQuaW5wdXRDbGFzcztcblxuICAgIC8qKlxuICAgICAqIC0gb3B0aW9uIHRvIGNsZWFyIHRleHQgaW5wdXQgd2hlbiB0aGUgZm9ybSBpcyBibHVycmVkXG4gICAgICogQG5hbWUgY2xlYXJPbkJsdXJcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgY2xlYXJPbkJsdXI6IGJvb2xlYW4gPSBkZWZhdWx0cy50YWdJbnB1dC5jbGVhck9uQmx1cjtcblxuICAgIC8qKlxuICAgICAqIC0gaGlkZUZvcm1cbiAgICAgKiBAbmFtZSBjbGVhck9uQmx1clxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBoaWRlRm9ybTogYm9vbGVhbiA9IGRlZmF1bHRzLnRhZ0lucHV0LmhpZGVGb3JtO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgYWRkT25CbHVyXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGFkZE9uQmx1cjogYm9vbGVhbiA9IGRlZmF1bHRzLnRhZ0lucHV0LmFkZE9uQmx1cjtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGFkZE9uUGFzdGVcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgYWRkT25QYXN0ZTogYm9vbGVhbiA9IGRlZmF1bHRzLnRhZ0lucHV0LmFkZE9uUGFzdGU7XG5cbiAgICAvKipcbiAgICAgKiAtIHBhdHRlcm4gdXNlZCB3aXRoIHRoZSBuYXRpdmUgbWV0aG9kIHNwbGl0KCkgdG8gc2VwYXJhdGUgcGF0dGVybnMgaW4gdGhlIHN0cmluZyBwYXN0ZWRcbiAgICAgKiBAbmFtZSBwYXN0ZVNwbGl0UGF0dGVyblxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBwYXN0ZVNwbGl0UGF0dGVybiA9IGRlZmF1bHRzLnRhZ0lucHV0LnBhc3RlU3BsaXRQYXR0ZXJuO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgYmxpbmtJZkR1cGVcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgYmxpbmtJZkR1cGUgPSBkZWZhdWx0cy50YWdJbnB1dC5ibGlua0lmRHVwZTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHJlbW92YWJsZVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyByZW1vdmFibGUgPSBkZWZhdWx0cy50YWdJbnB1dC5yZW1vdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBlZGl0YWJsZVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBlZGl0YWJsZTogYm9vbGVhbiA9IGRlZmF1bHRzLnRhZ0lucHV0LmVkaXRhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgYWxsb3dEdXBlc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBhbGxvd0R1cGVzID0gZGVmYXVsdHMudGFnSW5wdXQuYWxsb3dEdXBlcztcblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiBpZiBzZXQgdG8gdHJ1ZSwgdGhlIG5ld2x5IGFkZGVkIHRhZ3Mgd2lsbCBiZSBhZGRlZCBhcyBzdHJpbmdzLCBhbmQgbm90IG9iamVjdHNcbiAgICAgKiBAbmFtZSBtb2RlbEFzU3RyaW5nc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBtb2RlbEFzU3RyaW5ncyA9IGRlZmF1bHRzLnRhZ0lucHV0Lm1vZGVsQXNTdHJpbmdzO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdHJpbVRhZ3NcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgdHJpbVRhZ3MgPSBkZWZhdWx0cy50YWdJbnB1dC50cmltVGFncztcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGlucHV0VGV4dFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBnZXQgaW5wdXRUZXh0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0VGV4dFZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHJpcHBsZVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyByaXBwbGU6IGJvb2xlYW4gPSBkZWZhdWx0cy50YWdJbnB1dC5yaXBwbGU7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSB0YWJpbmRleFxuICAgICAqIEBkZXNjIHBhc3MgdGhyb3VnaCB0aGUgc3BlY2lmaWVkIHRhYmluZGV4IHRvIHRoZSBpbnB1dFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB0YWJpbmRleDogc3RyaW5nID0gZGVmYXVsdHMudGFnSW5wdXQudGFiSW5kZXg7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBkaXNhYmxlXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGRpc2FibGU6IGJvb2xlYW4gPSBkZWZhdWx0cy50YWdJbnB1dC5kaXNhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZHJhZ1pvbmVcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZHJhZ1pvbmU6IHN0cmluZyA9IGRlZmF1bHRzLnRhZ0lucHV0LmRyYWdab25lO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25SZW1vdmluZ1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBvblJlbW92aW5nID0gZGVmYXVsdHMudGFnSW5wdXQub25SZW1vdmluZztcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uQWRkaW5nXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIG9uQWRkaW5nID0gZGVmYXVsdHMudGFnSW5wdXQub25BZGRpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBhbmltYXRpb25EdXJhdGlvblxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBhbmltYXRpb25EdXJhdGlvbiA9IGRlZmF1bHRzLnRhZ0lucHV0LmFuaW1hdGlvbkR1cmF0aW9uO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25BZGRcbiAgICAgKiBAZGVzYyBldmVudCBlbWl0dGVkIHdoZW4gYWRkaW5nIGEgbmV3IGl0ZW1cbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIG9uQWRkID0gbmV3IEV2ZW50RW1pdHRlcjxUYWdNb2RlbD4oKTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uUmVtb3ZlXG4gICAgICogQGRlc2MgZXZlbnQgZW1pdHRlZCB3aGVuIHJlbW92aW5nIGFuIGV4aXN0aW5nIGl0ZW1cbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIG9uUmVtb3ZlID0gbmV3IEV2ZW50RW1pdHRlcjxUYWdNb2RlbD4oKTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uU2VsZWN0XG4gICAgICogQGRlc2MgZXZlbnQgZW1pdHRlZCB3aGVuIHNlbGVjdGluZyBhbiBpdGVtXG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvblNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8VGFnTW9kZWw+KCk7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvbkZvY3VzXG4gICAgICogQGRlc2MgZXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBpbnB1dCBpcyBmb2N1c2VkXG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbkZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvbkZvY3VzXG4gICAgICogQGRlc2MgZXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBpbnB1dCBpcyBibHVycmVkXG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbkJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uVGV4dENoYW5nZVxuICAgICAqIEBkZXNjIGV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgaW5wdXQgdmFsdWUgY2hhbmdlc1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25UZXh0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxUYWdNb2RlbD4oKTtcblxuICAgIC8qKlxuICAgICAqIC0gb3V0cHV0IHRyaWdnZXJlZCB3aGVuIHRleHQgaXMgcGFzdGVkIGluIHRoZSBmb3JtXG4gICAgICogQG5hbWUgb25QYXN0ZVxuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25QYXN0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gICAgLyoqXG4gICAgICogLSBvdXRwdXQgdHJpZ2dlcmVkIHdoZW4gdGFnIGVudGVyZWQgaXMgbm90IHZhbGlkXG4gICAgICogQG5hbWUgb25WYWxpZGF0aW9uRXJyb3JcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIG9uVmFsaWRhdGlvbkVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxUYWdNb2RlbD4oKTtcblxuICAgIC8qKlxuICAgICAqIC0gb3V0cHV0IHRyaWdnZXJlZCB3aGVuIHRhZyBpcyBlZGl0ZWRcbiAgICAgKiBAbmFtZSBvblRhZ0VkaXRlZFxuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25UYWdFZGl0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFRhZ01vZGVsPigpO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZHJvcGRvd25cbiAgICAgKi9cbiAgICAvLyBAQ29udGVudENoaWxkKGZvcndhcmRSZWYoKCkgPT4gVGFnSW5wdXREcm9wZG93biksIHtzdGF0aWM6IHRydWV9KSBkcm9wZG93bjogVGFnSW5wdXREcm9wZG93bjtcbiAgICBAQ29udGVudENoaWxkKFRhZ0lucHV0RHJvcGRvd24sIHsgc3RhdGljOiBmYWxzZSB9KSBwdWJsaWMgZHJvcGRvd246IFRhZ0lucHV0RHJvcGRvd247XG4gICAgLyoqXG4gICAgICogQG5hbWUgdGVtcGxhdGVcbiAgICAgKiBAZGVzYyByZWZlcmVuY2UgdG8gdGhlIHRlbXBsYXRlIGlmIHByb3ZpZGVkIGJ5IHRoZSB1c2VyXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZHJlbihUZW1wbGF0ZVJlZiwgeyBkZXNjZW5kYW50czogZmFsc2UgfSkgcHVibGljIHRlbXBsYXRlczogUXVlcnlMaXN0PFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaW5wdXRGb3JtXG4gICAgICovXG4gICAgQFZpZXdDaGlsZChUYWdJbnB1dEZvcm0sIHsgc3RhdGljOiBmYWxzZSB9KSBwdWJsaWMgaW5wdXRGb3JtOiBUYWdJbnB1dEZvcm07XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZWxlY3RlZFRhZ1xuICAgICAqIEBkZXNjIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudCBzZWxlY3RlZCB0YWdcbiAgICAgKi9cbiAgICBwdWJsaWMgc2VsZWN0ZWRUYWc6IFRhZ01vZGVsIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaXNMb2FkaW5nXG4gICAgICovXG4gICAgcHVibGljIGlzTG9hZGluZyA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaW5wdXRUZXh0XG4gICAgICogQHBhcmFtIHRleHRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGlucHV0VGV4dCh0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5pbnB1dFRleHRWYWx1ZSA9IHRleHQ7XG4gICAgICAgIHRoaXMuaW5wdXRUZXh0Q2hhbmdlLmVtaXQodGV4dCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdGFnc1xuICAgICAqIEBkZXNjIGxpc3Qgb2YgRWxlbWVudCBpdGVtc1xuICAgICAqL1xuICAgIEBWaWV3Q2hpbGRyZW4oVGFnQ29tcG9uZW50KSBwdWJsaWMgdGFnczogUXVlcnlMaXN0PFRhZ0NvbXBvbmVudD47XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBsaXN0ZW5lcnNcbiAgICAgKiBAZGVzYyBhcnJheSBvZiBldmVudHMgdGhhdCBnZXQgZmlyZWQgdXNpbmcgQGZpcmVFdmVudHNcbiAgICAgKi9cbiAgICBwcml2YXRlIGxpc3RlbmVycyA9IHtcbiAgICAgICAgW2NvbnN0YW50cy5LRVlET1dOXTogPHsgKGZ1bik6IGFueSB9W10+W10sXG4gICAgICAgIFtjb25zdGFudHMuS0VZVVBdOiA8eyAoZnVuKTogYW55IH1bXT5bXVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24gZW1pdHRlciBmb3IgdGhlIDItd2F5IGRhdGEgYmluZGluZyBpbnB1dFRleHQgdmFsdWVcbiAgICAgKiBAbmFtZSBpbnB1dFRleHRDaGFuZ2VcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIGlucHV0VGV4dENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24gcHJpdmF0ZSB2YXJpYWJsZSB0byBiaW5kIGdldC9zZXRcbiAgICAgKiBAbmFtZSBpbnB1dFRleHRWYWx1ZVxuICAgICAqL1xuICAgIHB1YmxpYyBpbnB1dFRleHRWYWx1ZSA9ICcnO1xuXG4gICAgLyoqXG4gICAgICogQGRlc2MgcmVtb3ZlcyB0aGUgdGFiIGluZGV4IGlmIGl0IGlzIHNldCAtIGl0IHdpbGwgYmUgcGFzc2VkIHRocm91Z2ggdG8gdGhlIGlucHV0XG4gICAgICogQG5hbWUgdGFiaW5kZXhBdHRyXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLnRhYmluZGV4JylcbiAgICBwdWJsaWMgZ2V0IHRhYmluZGV4QXR0cigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy50YWJpbmRleCAhPT0gJycgPyAnLTEnIDogJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgYW5pbWF0aW9uTWV0YWRhdGFcbiAgICAgKi9cbiAgICBwdWJsaWMgYW5pbWF0aW9uTWV0YWRhdGE6IHsgdmFsdWU6IHN0cmluZywgcGFyYW1zOiBvYmplY3QgfTtcblxuICAgIHB1YmxpYyBlcnJvcnM6IHN0cmluZ1tdID0gW107XG5cbiAgICBwdWJsaWMgaXNQcm9ncmVzc0JhclZpc2libGUkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgZHJhZ1Byb3ZpZGVyOiBEcmFnUHJvdmlkZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBuZ0FmdGVyVmlld0luaXRcbiAgICAgKi9cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBzZXQgdXAgbGlzdGVuZXJzXG5cbiAgICAgICAgdGhpcy5zZXRVcEtleXByZXNzTGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuc2V0dXBTZXBhcmF0b3JLZXlzTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy5zZXRVcElucHV0S2V5ZG93bkxpc3RlbmVycygpO1xuXG4gICAgICAgIGlmICh0aGlzLm9uVGV4dENoYW5nZS5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFVwVGV4dENoYW5nZVN1YnNjcmliZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGNsZWFyIG9uIGJsdXIgaXMgc2V0IHRvIHRydWUsIHN1YnNjcmliZSB0byB0aGUgZXZlbnQgYW5kIGNsZWFyIHRoZSB0ZXh0J3MgZm9ybVxuICAgICAgICBpZiAodGhpcy5jbGVhck9uQmx1ciB8fCB0aGlzLmFkZE9uQmx1cikge1xuICAgICAgICAgICAgdGhpcy5zZXRVcE9uQmx1clN1YnNjcmliZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGFkZE9uUGFzdGUgaXMgc2V0IHRvIHRydWUsIHJlZ2lzdGVyIHRoZSBoYW5kbGVyIGFuZCBhZGQgaXRlbXNcbiAgICAgICAgaWYgKHRoaXMuYWRkT25QYXN0ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRVcE9uUGFzdGVMaXN0ZW5lcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3RhdHVzQ2hhbmdlcyQgPSB0aGlzLmlucHV0Rm9ybS5mb3JtLnN0YXR1c0NoYW5nZXM7XG5cbiAgICAgICAgc3RhdHVzQ2hhbmdlcyQucGlwZShcbiAgICAgICAgICAgIGZpbHRlcigoc3RhdHVzOiBzdHJpbmcpID0+IHN0YXR1cyAhPT0gJ1BFTkRJTkcnKVxuICAgICAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVycm9ycyA9IHRoaXMuaW5wdXRGb3JtLmdldEVycm9yTWVzc2FnZXModGhpcy5lcnJvck1lc3NhZ2VzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5pc1Byb2dyZXNzQmFyVmlzaWJsZSQgPSBzdGF0dXNDaGFuZ2VzJC5waXBlKFxuICAgICAgICAgICAgbWFwKChzdGF0dXM6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0dXMgPT09ICdQRU5ESU5HJyB8fCB0aGlzLmlzTG9hZGluZztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gaWYgaGlkZUZvcm0gaXMgc2V0IHRvIHRydWUsIHJlbW92ZSB0aGUgaW5wdXRcbiAgICAgICAgaWYgKHRoaXMuaGlkZUZvcm0pIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRGb3JtLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG5nT25Jbml0XG4gICAgICovXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBpZiB0aGUgbnVtYmVyIG9mIGl0ZW1zIHNwZWNpZmllZCBpbiB0aGUgbW9kZWwgaXMgPiBvZiB0aGUgdmFsdWUgb2YgbWF4SXRlbXNcbiAgICAgICAgLy8gZGVncmFkZSBncmFjZWZ1bGx5IGFuZCBsZXQgdGhlIG1heCBudW1iZXIgb2YgaXRlbXMgdG8gYmUgdGhlIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgbW9kZWxcbiAgICAgICAgLy8gdGhvdWdoLCB3YXJuIHRoZSB1c2VyLlxuICAgICAgICBjb25zdCBoYXNSZWFjaGVkTWF4SXRlbXMgPSB0aGlzLm1heEl0ZW1zICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIHRoaXMuaXRlbXMgJiZcbiAgICAgICAgICAgIHRoaXMuaXRlbXMubGVuZ3RoID4gdGhpcy5tYXhJdGVtcztcblxuICAgICAgICBpZiAoaGFzUmVhY2hlZE1heEl0ZW1zKSB7XG4gICAgICAgICAgICB0aGlzLm1heEl0ZW1zID0gdGhpcy5pdGVtcy5sZW5ndGg7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oY29uc3RhbnRzLk1BWF9JVEVNU19XQVJOSU5HKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldHRpbmcgZWRpdGFibGUgdG8gZmFsc2UgdG8gZml4IHByb2JsZW0gd2l0aCB0YWdzIGluIElFIHN0aWxsIGJlaW5nIGVkaXRhYmxlIHdoZW5cbiAgICAgICAgLy8gb25seUZyb21BdXRvY29tcGxldGUgaXMgdHJ1ZVxuICAgICAgICB0aGlzLmVkaXRhYmxlID0gdGhpcy5vbmx5RnJvbUF1dG9jb21wbGV0ZSA/IGZhbHNlIDogdGhpcy5lZGl0YWJsZTtcblxuICAgICAgICB0aGlzLnNldEFuaW1hdGlvbk1ldGFkYXRhKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25SZW1vdmVSZXF1ZXN0ZWRcbiAgICAgKiBAcGFyYW0gdGFnXG4gICAgICogQHBhcmFtIGluZGV4XG4gICAgICovXG4gICAgcHVibGljIG9uUmVtb3ZlUmVxdWVzdGVkKHRhZzogVGFnTW9kZWwsIGluZGV4OiBudW1iZXIpOiBQcm9taXNlPFRhZ01vZGVsPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnNjcmliZUZuID0gKG1vZGVsOiBUYWdNb2RlbCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSXRlbShtb2RlbCwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUodGFnKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMub25SZW1vdmluZyA/XG4gICAgICAgICAgICAgICAgdGhpcy5vblJlbW92aW5nKHRhZylcbiAgICAgICAgICAgICAgICAgICAgLnBpcGUoZmlyc3QoKSlcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShzdWJzY3JpYmVGbikgOiBzdWJzY3JpYmVGbih0YWcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvbkFkZGluZ1JlcXVlc3RlZFxuICAgICAqIEBwYXJhbSBmcm9tQXV0b2NvbXBsZXRlIHtib29sZWFufVxuICAgICAqIEBwYXJhbSB0YWcge1RhZ01vZGVsfVxuICAgICAqIEBwYXJhbSBpbmRleD8ge251bWJlcn1cbiAgICAgKiBAcGFyYW0gZ2l2ZXVwRm9jdXM/IHtib29sZWFufVxuICAgICAqL1xuICAgIHB1YmxpYyBvbkFkZGluZ1JlcXVlc3RlZChmcm9tQXV0b2NvbXBsZXRlOiBib29sZWFuLCB0YWc6IFRhZ01vZGVsLFxuICAgICAgICBpbmRleD86IG51bWJlciwgZ2l2ZXVwRm9jdXM/OiBib29sZWFuKTogUHJvbWlzZTxUYWdNb2RlbD4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3Vic2NyaWJlRm4gPSAobW9kZWw6IFRhZ01vZGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgLmFkZEl0ZW0oZnJvbUF1dG9jb21wbGV0ZSwgbW9kZWwsIGluZGV4LCBnaXZldXBGb2N1cylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzb2x2ZSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHJlamVjdCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkFkZGluZyA/XG4gICAgICAgICAgICAgICAgdGhpcy5vbkFkZGluZyh0YWcpXG4gICAgICAgICAgICAgICAgICAgIC5waXBlKGZpcnN0KCkpXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoc3Vic2NyaWJlRm4sIHJlamVjdCkgOiBzdWJzY3JpYmVGbih0YWcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBhcHBlbmRUYWdcbiAgICAgKiBAcGFyYW0gdGFnIHtUYWdNb2RlbH1cbiAgICAgKi9cbiAgICBwdWJsaWMgYXBwZW5kVGFnID0gKHRhZzogVGFnTW9kZWwsIGluZGV4ID0gdGhpcy5pdGVtcy5sZW5ndGgpOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgICAgICBjb25zdCBtb2RlbCA9IHRoaXMubW9kZWxBc1N0cmluZ3MgPyB0YWdbdGhpcy5pZGVudGlmeUJ5XSA6IHRhZztcblxuICAgICAgICB0aGlzLml0ZW1zID0gW1xuICAgICAgICAgICAgLi4uaXRlbXMuc2xpY2UoMCwgaW5kZXgpLFxuICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICAuLi5pdGVtcy5zbGljZShpbmRleCwgaXRlbXMubGVuZ3RoKVxuICAgICAgICBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGNyZWF0ZVRhZ1xuICAgICAqIEBwYXJhbSBtb2RlbFxuICAgICAqL1xuICAgIHB1YmxpYyBjcmVhdGVUYWcgPSAobW9kZWw6IFRhZ01vZGVsKTogVGFnTW9kZWwgPT4ge1xuICAgICAgICBjb25zdCB0cmltID0gKHZhbDogVGFnTW9kZWwsIGtleTogc3RyaW5nKTogVGFnTW9kZWwgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnID8gdmFsLnRyaW0oKSA6IHZhbFtrZXldO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi50eXBlb2YgbW9kZWwgIT09ICdzdHJpbmcnID8gbW9kZWwgOiB7fSxcbiAgICAgICAgICAgIFt0aGlzLmRpc3BsYXlCeV06IHRoaXMudHJpbVRhZ3MgPyB0cmltKG1vZGVsLCB0aGlzLmRpc3BsYXlCeSkgOiBtb2RlbCxcbiAgICAgICAgICAgIFt0aGlzLmlkZW50aWZ5QnldOiB0aGlzLnRyaW1UYWdzID8gdHJpbShtb2RlbCwgdGhpcy5pZGVudGlmeUJ5KSA6IG1vZGVsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2VsZWN0SXRlbVxuICAgICAqIEBkZXNjIHNlbGVjdHMgaXRlbSBwYXNzZWQgYXMgcGFyYW1ldGVyIGFzIHRoZSBzZWxlY3RlZCB0YWdcbiAgICAgKiBAcGFyYW0gaXRlbVxuICAgICAqIEBwYXJhbSBlbWl0XG4gICAgICovXG4gICAgcHVibGljIHNlbGVjdEl0ZW0oaXRlbTogVGFnTW9kZWwgfCB1bmRlZmluZWQsIGVtaXQgPSB0cnVlKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGlzUmVhZG9ubHkgPSBpdGVtICYmIHR5cGVvZiBpdGVtICE9PSAnc3RyaW5nJyAmJiBpdGVtLnJlYWRvbmx5O1xuXG4gICAgICAgIGlmIChpc1JlYWRvbmx5IHx8IHRoaXMuc2VsZWN0ZWRUYWcgPT09IGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYWcgPSBpdGVtO1xuXG4gICAgICAgIGlmIChlbWl0KSB7XG4gICAgICAgICAgICB0aGlzLm9uU2VsZWN0LmVtaXQoaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBmaXJlRXZlbnRzXG4gICAgICogQGRlc2MgZ29lcyB0aHJvdWdoIHRoZSBsaXN0IG9mIHRoZSBldmVudHMgZm9yIGEgZ2l2ZW4gZXZlbnROYW1lLCBhbmQgZmlyZXMgZWFjaCBvZiB0aGVtXG4gICAgICogQHBhcmFtIGV2ZW50TmFtZVxuICAgICAqIEBwYXJhbSAkZXZlbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgZmlyZUV2ZW50cyhldmVudE5hbWU6IHN0cmluZywgJGV2ZW50Pyk6IHZvaWQge1xuICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdLmZvckVhY2gobGlzdGVuZXIgPT4gbGlzdGVuZXIuY2FsbCh0aGlzLCAkZXZlbnQpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBoYW5kbGVLZXlkb3duXG4gICAgICogQGRlc2MgaGFuZGxlcyBhY3Rpb24gd2hlbiB0aGUgdXNlciBoaXRzIGEga2V5Ym9hcmQga2V5XG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICBwdWJsaWMgaGFuZGxlS2V5ZG93bihkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBkYXRhLmV2ZW50O1xuICAgICAgICBjb25zdCBrZXkgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoO1xuICAgICAgICBjb25zdCBzaGlmdEtleSA9IGV2ZW50LnNoaWZ0S2V5IHx8IGZhbHNlO1xuXG4gICAgICAgIHN3aXRjaCAoY29uc3RhbnRzLktFWV9QUkVTU19BQ1RJT05TW2tleV0pIHtcbiAgICAgICAgICAgIGNhc2UgY29uc3RhbnRzLkFDVElPTlNfS0VZUy5ERUxFVEU6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRUYWcgJiYgdGhpcy5yZW1vdmFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2YodGhpcy5zZWxlY3RlZFRhZyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25SZW1vdmVSZXF1ZXN0ZWQodGhpcy5zZWxlY3RlZFRhZywgaW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBjb25zdGFudHMuQUNUSU9OU19LRVlTLlNXSVRDSF9QUkVWOlxuICAgICAgICAgICAgICAgIHRoaXMubW92ZVRvVGFnKGRhdGEubW9kZWwsIGNvbnN0YW50cy5QUkVWKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBjb25zdGFudHMuQUNUSU9OU19LRVlTLlNXSVRDSF9ORVhUOlxuICAgICAgICAgICAgICAgIHRoaXMubW92ZVRvVGFnKGRhdGEubW9kZWwsIGNvbnN0YW50cy5ORVhUKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBjb25zdGFudHMuQUNUSU9OU19LRVlTLlRBQjpcbiAgICAgICAgICAgICAgICBpZiAoc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNGaXJzdFRhZyhkYXRhLm1vZGVsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlVG9UYWcoZGF0YS5tb2RlbCwgY29uc3RhbnRzLlBSRVYpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTGFzdFRhZyhkYXRhLm1vZGVsKSAmJiAodGhpcy5kaXNhYmxlIHx8IHRoaXMubWF4SXRlbXNSZWFjaGVkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlVG9UYWcoZGF0YS5tb2RlbCwgY29uc3RhbnRzLk5FWFQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwcmV2ZW50IGRlZmF1bHQgYmVoYXZpb3VyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIG9uRm9ybVN1Ym1pdCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMub25BZGRpbmdSZXF1ZXN0ZWQoZmFsc2UsIHRoaXMuZm9ybVZhbHVlKTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZXRJbnB1dFZhbHVlXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgcHVibGljIHNldElucHV0VmFsdWUodmFsdWU6IHN0cmluZywgZW1pdEV2ZW50ID0gdHJ1ZSk6IHZvaWQge1xuICAgICAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKCk7XG5cbiAgICAgICAgLy8gdXBkYXRlIGZvcm0gdmFsdWUgd2l0aCB0aGUgdHJhbnNmb3JtZWQgaXRlbVxuICAgICAgICBjb250cm9sLnNldFZhbHVlKHZhbHVlLCB7IGVtaXRFdmVudCB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBnZXRDb250cm9sXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRDb250cm9sKCk6IEZvcm1Db250cm9sIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRGb3JtLnZhbHVlIGFzIEZvcm1Db250cm9sO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGZvY3VzXG4gICAgICogQHBhcmFtIGFwcGx5Rm9jdXNcbiAgICAgKiBAcGFyYW0gZGlzcGxheUF1dG9jb21wbGV0ZVxuICAgICAqL1xuICAgIHB1YmxpYyBmb2N1cyhhcHBseUZvY3VzID0gZmFsc2UsIGRpc3BsYXlBdXRvY29tcGxldGUgPSBmYWxzZSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5kcmFnUHJvdmlkZXIuZ2V0U3RhdGUoJ2RyYWdnaW5nJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VsZWN0SXRlbSh1bmRlZmluZWQsIGZhbHNlKTtcblxuICAgICAgICBpZiAoYXBwbHlGb2N1cykge1xuICAgICAgICAgICAgdGhpcy5pbnB1dEZvcm0uZm9jdXMoKTtcbiAgICAgICAgICAgIHRoaXMub25Gb2N1cy5lbWl0KHRoaXMuZm9ybVZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGJsdXJcbiAgICAgKi9cbiAgICBwdWJsaWMgYmx1cigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vblRvdWNoZWQoKTtcblxuICAgICAgICB0aGlzLm9uQmx1ci5lbWl0KHRoaXMuZm9ybVZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBoYXNFcnJvcnNcbiAgICAgKi9cbiAgICBwdWJsaWMgaGFzRXJyb3JzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISF0aGlzLmlucHV0Rm9ybSAmJiB0aGlzLmlucHV0Rm9ybS5oYXNFcnJvcnMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBpc0lucHV0Rm9jdXNlZFxuICAgICAqL1xuICAgIHB1YmxpYyBpc0lucHV0Rm9jdXNlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5pbnB1dEZvcm0gJiYgdGhpcy5pbnB1dEZvcm0uaXNJbnB1dEZvY3VzZWQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAtIHRoaXMgaXMgdGhlIG9uZSB3YXkgSSBmb3VuZCB0byB0ZWxsIGlmIHRoZSB0ZW1wbGF0ZSBoYXMgYmVlbiBwYXNzZWQgYW5kIGl0IGlzIG5vdFxuICAgICAqIHRoZSB0ZW1wbGF0ZSBmb3IgdGhlIG1lbnUgaXRlbVxuICAgICAqIEBuYW1lIGhhc0N1c3RvbVRlbXBsYXRlXG4gICAgICovXG4gICAgcHVibGljIGhhc0N1c3RvbVRlbXBsYXRlKCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGVzID8gdGhpcy50ZW1wbGF0ZXMuZmlyc3QgOiB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IG1lbnVUZW1wbGF0ZSA9IHRoaXMuZHJvcGRvd24gJiYgdGhpcy5kcm9wZG93bi50ZW1wbGF0ZXMgP1xuICAgICAgICAgICAgdGhpcy5kcm9wZG93bi50ZW1wbGF0ZXMuZmlyc3QgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgcmV0dXJuIEJvb2xlYW4odGVtcGxhdGUgJiYgdGVtcGxhdGUgIT09IG1lbnVUZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgbWF4SXRlbXNSZWFjaGVkXG4gICAgICovXG4gICAgcHVibGljIGdldCBtYXhJdGVtc1JlYWNoZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLm1heEl0ZW1zICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIHRoaXMuaXRlbXMubGVuZ3RoID49IHRoaXMubWF4SXRlbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZm9ybVZhbHVlXG4gICAgICovXG4gICAgcHVibGljIGdldCBmb3JtVmFsdWUoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IHRoaXMuaW5wdXRGb3JtLnZhbHVlO1xuXG4gICAgICAgIHJldHVybiBmb3JtID8gZm9ybS52YWx1ZSA6ICcnO1xuICAgIH1cblxuICAgIC8qKjNcbiAgICAgKiBAbmFtZSBvbkRyYWdTdGFydGVkXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICogQHBhcmFtIGluZGV4XG4gICAgICovXG4gICAgcHVibGljIG9uRHJhZ1N0YXJ0ZWQoZXZlbnQ6IERyYWdFdmVudCwgdGFnOiBUYWdNb2RlbCwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBjb25zdCBpdGVtID0geyB6b25lOiB0aGlzLmRyYWdab25lLCB0YWcsIGluZGV4IH0gYXMgRHJhZ2dlZFRhZztcblxuICAgICAgICB0aGlzLmRyYWdQcm92aWRlci5zZXRTZW5kZXIodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhZ1Byb3ZpZGVyLnNldERyYWdnZWRJdGVtKGV2ZW50LCBpdGVtKTtcbiAgICAgICAgdGhpcy5kcmFnUHJvdmlkZXIuc2V0U3RhdGUoeyBkcmFnZ2luZzogdHJ1ZSwgaW5kZXggfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25EcmFnT3ZlclxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBvbkRyYWdPdmVyKGV2ZW50OiBEcmFnRXZlbnQsIGluZGV4PzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZHJhZ1Byb3ZpZGVyLnNldFN0YXRlKHsgZHJvcHBpbmc6IHRydWUgfSk7XG4gICAgICAgIHRoaXMuZHJhZ1Byb3ZpZGVyLnNldFJlY2VpdmVyKHRoaXMpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgb25UYWdEcm9wcGVkXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICogQHBhcmFtIGluZGV4XG4gICAgICovXG4gICAgcHVibGljIG9uVGFnRHJvcHBlZChldmVudDogRHJhZ0V2ZW50LCBpbmRleD86IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5kcmFnUHJvdmlkZXIuZ2V0RHJhZ2dlZEl0ZW0oZXZlbnQpO1xuXG4gICAgICAgIGlmICghaXRlbSB8fCBpdGVtLnpvbmUgIT09IHRoaXMuZHJhZ1pvbmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZHJhZ1Byb3ZpZGVyLm9uVGFnRHJvcHBlZChpdGVtLnRhZywgaXRlbS5pbmRleCwgaW5kZXgpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGlzRHJvcHBpbmdcbiAgICAgKi9cbiAgICBwdWJsaWMgaXNEcm9wcGluZygpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgaXNSZWNlaXZlciA9IHRoaXMuZHJhZ1Byb3ZpZGVyLnJlY2VpdmVyID09PSB0aGlzO1xuICAgICAgICBjb25zdCBpc0Ryb3BwaW5nID0gdGhpcy5kcmFnUHJvdmlkZXIuZ2V0U3RhdGUoJ2Ryb3BwaW5nJyk7XG5cbiAgICAgICAgcmV0dXJuIEJvb2xlYW4oaXNSZWNlaXZlciAmJiBpc0Ryb3BwaW5nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBvblRhZ0JsdXJyZWRcbiAgICAgKiBAcGFyYW0gY2hhbmdlZEVsZW1lbnQge1RhZ01vZGVsfVxuICAgICAqIEBwYXJhbSBpbmRleCB7bnVtYmVyfVxuICAgICAqL1xuICAgIHB1YmxpYyBvblRhZ0JsdXJyZWQoY2hhbmdlZEVsZW1lbnQ6IFRhZ01vZGVsLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXRlbXNbaW5kZXhdID0gY2hhbmdlZEVsZW1lbnQ7XG4gICAgICAgIHRoaXMuYmx1cigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHRyYWNrQnlcbiAgICAgKiBAcGFyYW0gaXRlbXNcbiAgICAgKi9cbiAgICBwdWJsaWMgdHJhY2tCeShpbmRleDogbnVtYmVyLCBpdGVtOiBUYWdNb2RlbCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBpdGVtW3RoaXMuaWRlbnRpZnlCeV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdXBkYXRlRWRpdGVkVGFnXG4gICAgICogQHBhcmFtIHRhZ1xuICAgICAqL1xuICAgIHB1YmxpYyB1cGRhdGVFZGl0ZWRUYWcoeyB0YWcsIGluZGV4IH06IHsgdGFnOiBUYWdNb2RlbCwgaW5kZXg6IG51bWJlciB9KTogdm9pZCB7XG4gICAgICAgIHRoaXMub25UYWdFZGl0ZWQuZW1pdCh0YWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHRhZ1xuICAgICAqIEBwYXJhbSBpc0Zyb21BdXRvY29tcGxldGVcbiAgICAgKi9cbiAgICBwdWJsaWMgaXNUYWdWYWxpZCA9ICh0YWc6IFRhZ01vZGVsLCBmcm9tQXV0b2NvbXBsZXRlID0gZmFsc2UpOiBib29sZWFuID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gdGhpcy5kcm9wZG93biA/IHRoaXMuZHJvcGRvd24uc2VsZWN0ZWRJdGVtIDogdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0SXRlbURpc3BsYXkodGFnKS50cmltKCk7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkSXRlbSAmJiAhZnJvbUF1dG9jb21wbGV0ZSB8fCAhdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGR1cGUgPSB0aGlzLmZpbmREdXBlKHRhZywgZnJvbUF1dG9jb21wbGV0ZSk7XG5cbiAgICAgICAgLy8gaWYgc28sIGdpdmUgYSB2aXN1YWwgY3VlIGFuZCByZXR1cm4gZmFsc2VcbiAgICAgICAgaWYgKCF0aGlzLmFsbG93RHVwZXMgJiYgZHVwZSAmJiB0aGlzLmJsaW5rSWZEdXBlKSB7XG4gICAgICAgICAgICBjb25zdCBtb2RlbCA9IHRoaXMudGFncy5maW5kKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEl0ZW1WYWx1ZShpdGVtLm1vZGVsKSA9PT0gdGhpcy5nZXRJdGVtVmFsdWUoZHVwZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKG1vZGVsKSB7XG4gICAgICAgICAgICAgICAgbW9kZWwuYmxpbmsoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzRnJvbUF1dG9jb21wbGV0ZSA9IGZyb21BdXRvY29tcGxldGUgJiYgdGhpcy5vbmx5RnJvbUF1dG9jb21wbGV0ZTtcblxuICAgICAgICBjb25zdCBhc3NlcnRpb25zID0gW1xuICAgICAgICAgICAgLy8gMS4gdGhlcmUgbXVzdCBiZSBubyBkdXBlIE9SIGR1cGVzIGFyZSBhbGxvd2VkXG4gICAgICAgICAgICAhZHVwZSB8fCB0aGlzLmFsbG93RHVwZXMsXG5cbiAgICAgICAgICAgIC8vIDIuIGNoZWNrIG1heCBpdGVtcyBoYXMgbm90IGJlZW4gcmVhY2hlZFxuICAgICAgICAgICAgIXRoaXMubWF4SXRlbXNSZWFjaGVkLFxuXG4gICAgICAgICAgICAvLyAzLiBjaGVjayBpdGVtIGNvbWVzIGZyb20gYXV0b2NvbXBsZXRlIG9yIG9ubHlGcm9tQXV0b2NvbXBsZXRlIGlzIGZhbHNlXG4gICAgICAgICAgICAoKGlzRnJvbUF1dG9jb21wbGV0ZSkgfHwgIXRoaXMub25seUZyb21BdXRvY29tcGxldGUpXG4gICAgICAgIF07XG5cbiAgICAgICAgcmV0dXJuIGFzc2VydGlvbnMuZmlsdGVyKEJvb2xlYW4pLmxlbmd0aCA9PT0gYXNzZXJ0aW9ucy5sZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgbW92ZVRvVGFnXG4gICAgICogQHBhcmFtIGl0ZW1cbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uXG4gICAgICovXG4gICAgcHJpdmF0ZSBtb3ZlVG9UYWcoaXRlbTogVGFnTW9kZWwsIGRpcmVjdGlvbjogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGlzTGFzdCA9IHRoaXMuaXNMYXN0VGFnKGl0ZW0pO1xuICAgICAgICBjb25zdCBpc0ZpcnN0ID0gdGhpcy5pc0ZpcnN0VGFnKGl0ZW0pO1xuICAgICAgICBjb25zdCBzdG9wU3dpdGNoID0gKGRpcmVjdGlvbiA9PT0gY29uc3RhbnRzLk5FWFQgJiYgaXNMYXN0KSB8fFxuICAgICAgICAgICAgKGRpcmVjdGlvbiA9PT0gY29uc3RhbnRzLlBSRVYgJiYgaXNGaXJzdCk7XG5cbiAgICAgICAgaWYgKHN0b3BTd2l0Y2gpIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXModHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvZmZzZXQgPSBkaXJlY3Rpb24gPT09IGNvbnN0YW50cy5ORVhUID8gMSA6IC0xO1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0VGFnSW5kZXgoaXRlbSkgKyBvZmZzZXQ7XG4gICAgICAgIGNvbnN0IHRhZyA9IHRoaXMuZ2V0VGFnQXRJbmRleChpbmRleCk7XG5cbiAgICAgICAgcmV0dXJuIHRhZy5zZWxlY3QuY2FsbCh0YWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGlzRmlyc3RUYWdcbiAgICAgKiBAcGFyYW0gaXRlbSB7VGFnTW9kZWx9XG4gICAgICovXG4gICAgcHJpdmF0ZSBpc0ZpcnN0VGFnKGl0ZW06IFRhZ01vZGVsKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhZ3MuZmlyc3QubW9kZWwgPT09IGl0ZW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaXNMYXN0VGFnXG4gICAgICogQHBhcmFtIGl0ZW0ge1RhZ01vZGVsfVxuICAgICAqL1xuICAgIHByaXZhdGUgaXNMYXN0VGFnKGl0ZW06IFRhZ01vZGVsKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhZ3MubGFzdC5tb2RlbCA9PT0gaXRlbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBnZXRUYWdJbmRleFxuICAgICAqIEBwYXJhbSBpdGVtXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRUYWdJbmRleChpdGVtOiBUYWdNb2RlbCk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IHRhZ3MgPSB0aGlzLnRhZ3MudG9BcnJheSgpO1xuXG4gICAgICAgIHJldHVybiB0YWdzLmZpbmRJbmRleCh0YWcgPT4gdGFnLm1vZGVsID09PSBpdGVtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBnZXRUYWdBdEluZGV4XG4gICAgICogQHBhcmFtIGluZGV4XG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRUYWdBdEluZGV4KGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgdGFncyA9IHRoaXMudGFncy50b0FycmF5KCk7XG5cbiAgICAgICAgcmV0dXJuIHRhZ3NbaW5kZXhdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHJlbW92ZUl0ZW1cbiAgICAgKiBAZGVzYyByZW1vdmVzIGFuIGl0ZW0gZnJvbSB0aGUgYXJyYXkgb2YgdGhlIG1vZGVsXG4gICAgICogQHBhcmFtIHRhZyB7VGFnTW9kZWx9XG4gICAgICogQHBhcmFtIGluZGV4IHtudW1iZXJ9XG4gICAgICovXG4gICAgcHJpdmF0ZSByZW1vdmVJdGVtKHRhZzogVGFnTW9kZWwsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuZ2V0SXRlbXNXaXRob3V0KGluZGV4KTtcblxuICAgICAgICAvLyBpZiB0aGUgcmVtb3ZlZCB0YWcgd2FzIHNlbGVjdGVkLCBzZXQgaXQgYXMgdW5kZWZpbmVkXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkVGFnID09PSB0YWcpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbSh1bmRlZmluZWQsIGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvY3VzIGlucHV0XG4gICAgICAgIHRoaXMuZm9jdXModHJ1ZSwgZmFsc2UpO1xuXG4gICAgICAgIC8vIGVtaXQgcmVtb3ZlIGV2ZW50XG4gICAgICAgIHRoaXMub25SZW1vdmUuZW1pdCh0YWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGFkZEl0ZW1cbiAgICAgKiBAZGVzYyBhZGRzIHRoZSBjdXJyZW50IHRleHQgbW9kZWwgdG8gdGhlIGl0ZW1zIGFycmF5XG4gICAgICogQHBhcmFtIGZyb21BdXRvY29tcGxldGUge2Jvb2xlYW59XG4gICAgICogQHBhcmFtIGl0ZW0ge1RhZ01vZGVsfVxuICAgICAqIEBwYXJhbSBpbmRleD8ge251bWJlcn1cbiAgICAgKiBAcGFyYW0gZ2l2ZXVwRm9jdXM/IHtib29sZWFufVxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkSXRlbShmcm9tQXV0b2NvbXBsZXRlID0gZmFsc2UsIGl0ZW06IFRhZ01vZGVsLCBpbmRleD86IG51bWJlciwgZ2l2ZXVwRm9jdXM/OiBib29sZWFuKTpcbiAgICAgICAgUHJvbWlzZTxUYWdNb2RlbD4ge1xuICAgICAgICBjb25zdCBkaXNwbGF5ID0gdGhpcy5nZXRJdGVtRGlzcGxheShpdGVtKTtcbiAgICAgICAgY29uc3QgdGFnID0gdGhpcy5jcmVhdGVUYWcoaXRlbSk7XG5cbiAgICAgICAgaWYgKGZyb21BdXRvY29tcGxldGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZSh0aGlzLmdldEl0ZW1WYWx1ZShpdGVtLCB0cnVlKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAbmFtZSByZXNldFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjb25zdCByZXNldCA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICAvLyByZXNldCBjb250cm9sIGFuZCBmb2N1cyBpbnB1dFxuICAgICAgICAgICAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZSgnJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZ2l2ZXVwRm9jdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2N1cyhmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZvY3VzIGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9jdXModHJ1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlc29sdmUoZGlzcGxheSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBhcHBlbmRJdGVtID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kVGFnKHRhZywgaW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgLy8gZW1pdCBldmVudFxuICAgICAgICAgICAgICAgIHRoaXMub25BZGQuZW1pdCh0YWcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRyb3Bkb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmRyb3Bkb3duLmhpZGUoKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRyb3Bkb3duLnNob3dEcm9wZG93bklmRW1wdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcm9wZG93bi5zaG93KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gdGhpcy5pbnB1dEZvcm0uZm9ybS5zdGF0dXM7XG4gICAgICAgICAgICBjb25zdCBpc1RhZ1ZhbGlkID0gdGhpcy5pc1RhZ1ZhbGlkKHRhZywgZnJvbUF1dG9jb21wbGV0ZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG9uVmFsaWRhdGlvbkVycm9yID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25WYWxpZGF0aW9uRXJyb3IuZW1pdCh0YWcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT09ICdWQUxJRCcgJiYgaXNUYWdWYWxpZCkge1xuICAgICAgICAgICAgICAgIGFwcGVuZEl0ZW0oKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzZXQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ0lOVkFMSUQnIHx8ICFpc1RhZ1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb25WYWxpZGF0aW9uRXJyb3IoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ1BFTkRJTkcnKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzVXBkYXRlJCA9IHRoaXMuaW5wdXRGb3JtLmZvcm0uc3RhdHVzQ2hhbmdlcztcblxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0dXNVcGRhdGUkXG4gICAgICAgICAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyKHN0YXR1c1VwZGF0ZSA9PiBzdGF0dXNVcGRhdGUgIT09ICdQRU5ESU5HJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdCgpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSgoc3RhdHVzVXBkYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzVXBkYXRlID09PSAnVkFMSUQnICYmIGlzVGFnVmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRJdGVtKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblZhbGlkYXRpb25FcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2V0dXBTZXBhcmF0b3JLZXlzTGlzdGVuZXJcbiAgICAgKi9cbiAgICBwcml2YXRlIHNldHVwU2VwYXJhdG9yS2V5c0xpc3RlbmVyKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB1c2VTZXBhcmF0b3JLZXlzID0gdGhpcy5zZXBhcmF0b3JLZXlDb2Rlcy5sZW5ndGggPiAwIHx8IHRoaXMuc2VwYXJhdG9yS2V5cy5sZW5ndGggPiAwO1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9ICgkZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhhc0tleUNvZGUgPSB0aGlzLnNlcGFyYXRvcktleUNvZGVzLmluZGV4T2YoJGV2ZW50LmtleUNvZGUpID49IDA7XG4gICAgICAgICAgICBjb25zdCBoYXNLZXkgPSB0aGlzLnNlcGFyYXRvcktleXMuaW5kZXhPZigkZXZlbnQua2V5KSA+PSAwO1xuICAgICAgICAgICAgLy8gdGhlIGtleUNvZGUgb2Yga2V5ZG93biBldmVudCBpcyAyMjkgd2hlbiBJTUUgaXMgcHJvY2Vzc2luZyB0aGUga2V5IGV2ZW50LlxuICAgICAgICAgICAgY29uc3QgaXNJTUVQcm9jZXNzaW5nID0gJGV2ZW50LmtleUNvZGUgPT09IDIyOTtcblxuICAgICAgICAgICAgaWYgKGhhc0tleUNvZGUgfHwgKGhhc0tleSAmJiAhaXNJTUVQcm9jZXNzaW5nKSkge1xuICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMub25BZGRpbmdSZXF1ZXN0ZWQoZmFsc2UsIHRoaXMuZm9ybVZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4geyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBsaXN0ZW4uY2FsbCh0aGlzLCBjb25zdGFudHMuS0VZRE9XTiwgbGlzdGVuZXIsIHVzZVNlcGFyYXRvcktleXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHNldFVwS2V5cHJlc3NMaXN0ZW5lcnNcbiAgICAgKi9cbiAgICBwcml2YXRlIHNldFVwS2V5cHJlc3NMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gKCRldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNDb3JyZWN0S2V5ID0gJGV2ZW50LmtleUNvZGUgPT09IDM3IHx8ICRldmVudC5rZXlDb2RlID09PSA4O1xuXG4gICAgICAgICAgICBpZiAoaXNDb3JyZWN0S2V5ICYmXG4gICAgICAgICAgICAgICAgIXRoaXMuZm9ybVZhbHVlICYmXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhZ3MubGFzdC5zZWxlY3QuY2FsbCh0aGlzLnRhZ3MubGFzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gc2V0dGluZyB1cCB0aGUga2V5cHJlc3MgbGlzdGVuZXJzXG4gICAgICAgIGxpc3Rlbi5jYWxsKHRoaXMsIGNvbnN0YW50cy5LRVlET1dOLCBsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2V0VXBLZXlkb3duTGlzdGVuZXJzXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXRVcElucHV0S2V5ZG93bkxpc3RlbmVycygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbnB1dEZvcm0ub25LZXlkb3duLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLmZpcmVFdmVudHMoJ2tleWRvd24nLCBldmVudCk7XG5cbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdCYWNrc3BhY2UnICYmIHRoaXMuZm9ybVZhbHVlLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZXRVcE9uUGFzdGVMaXN0ZW5lclxuICAgICAqL1xuICAgIHByaXZhdGUgc2V0VXBPblBhc3RlTGlzdGVuZXIoKSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5pbnB1dEZvcm0uaW5wdXQubmF0aXZlRWxlbWVudDtcblxuICAgICAgICAvLyBhdHRhY2ggbGlzdGVuZXIgdG8gaW5wdXRcbiAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oaW5wdXQsICdwYXN0ZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vblBhc3RlQ2FsbGJhY2soZXZlbnQpO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHNldFVwVGV4dENoYW5nZVN1YnNjcmliZXJcbiAgICAgKi9cbiAgICBwcml2YXRlIHNldFVwVGV4dENoYW5nZVN1YnNjcmliZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW5wdXRGb3JtLmZvcm1cbiAgICAgICAgICAgIC52YWx1ZUNoYW5nZXNcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIGRlYm91bmNlVGltZSh0aGlzLm9uVGV4dENoYW5nZURlYm91bmNlKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgodmFsdWU6IHsgaXRlbTogc3RyaW5nIH0pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uVGV4dENoYW5nZS5lbWl0KHZhbHVlLml0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2V0VXBPbkJsdXJTdWJzY3JpYmVyXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXRVcE9uQmx1clN1YnNjcmliZXIoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGZpbHRlckZuID0gKCk6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gdGhpcy5kcm9wZG93biAmJiB0aGlzLmRyb3Bkb3duLmlzVmlzaWJsZTtcbiAgICAgICAgICAgIHJldHVybiAhaXNWaXNpYmxlICYmICEhdGhpcy5mb3JtVmFsdWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5pbnB1dEZvcm1cbiAgICAgICAgICAgIC5vbkJsdXJcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIGRlYm91bmNlVGltZSgxMDApLFxuICAgICAgICAgICAgICAgIGZpbHRlcihmaWx0ZXJGbilcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4gdGhpcy5zZXRJbnB1dFZhbHVlKCcnKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFkZE9uQmx1cikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgLm9uQWRkaW5nUmVxdWVzdGVkKGZhbHNlLCB0aGlzLmZvcm1WYWx1ZSwgdW5kZWZpbmVkLCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2gocmVzZXQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBmaW5kRHVwZVxuICAgICAqIEBwYXJhbSB0YWdcbiAgICAgKiBAcGFyYW0gaXNGcm9tQXV0b2NvbXBsZXRlXG4gICAgICovXG4gICAgcHJpdmF0ZSBmaW5kRHVwZSh0YWc6IFRhZ01vZGVsLCBpc0Zyb21BdXRvY29tcGxldGU6IGJvb2xlYW4pOiBUYWdNb2RlbCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGNvbnN0IGlkZW50aWZ5QnkgPSBpc0Zyb21BdXRvY29tcGxldGUgPyB0aGlzLmRyb3Bkb3duLmlkZW50aWZ5QnkgOiB0aGlzLmlkZW50aWZ5Qnk7XG4gICAgICAgIGNvbnN0IGlkID0gdGFnW2lkZW50aWZ5QnldO1xuXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbmQoaXRlbSA9PiB0aGlzLmdldEl0ZW1WYWx1ZShpdGVtKSA9PT0gaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIG9uUGFzdGVDYWxsYmFja1xuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgcHJpdmF0ZSBvblBhc3RlQ2FsbGJhY2sgPSBhc3luYyAoZGF0YTogQ2xpcGJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgaW50ZXJmYWNlIElFV2luZG93IGV4dGVuZHMgV2luZG93IHtcbiAgICAgICAgICAgIGNsaXBib2FyZERhdGE6IERhdGFUcmFuc2ZlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGdldFRleHQgPSAoKTogc3RyaW5nID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzSUUgPSBCb29sZWFuKCh3aW5kb3cgYXMgSUVXaW5kb3cpLmNsaXBib2FyZERhdGEpO1xuICAgICAgICAgICAgY29uc3QgY2xpcGJvYXJkRGF0YSA9IGlzSUUgPyAoXG4gICAgICAgICAgICAgICAgKHdpbmRvdyBhcyBJRVdpbmRvdykuY2xpcGJvYXJkRGF0YVxuICAgICAgICAgICAgKSA6IGRhdGEuY2xpcGJvYXJkRGF0YTtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBpc0lFID8gJ1RleHQnIDogJ3RleHQvcGxhaW4nO1xuICAgICAgICAgICAgcmV0dXJuIGNsaXBib2FyZERhdGEgPT09IG51bGwgPyAnJyA6IGNsaXBib2FyZERhdGEuZ2V0RGF0YSh0eXBlKSB8fCAnJztcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB0ZXh0ID0gZ2V0VGV4dCgpO1xuXG4gICAgICAgIGNvbnN0IHJlcXVlc3RzID0gdGV4dFxuICAgICAgICAgICAgLnNwbGl0KHRoaXMucGFzdGVTcGxpdFBhdHRlcm4pXG4gICAgICAgICAgICAubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhZyA9IHRoaXMuY3JlYXRlVGFnKGl0ZW0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZSh0YWdbdGhpcy5kaXNwbGF5QnldKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vbkFkZGluZ1JlcXVlc3RlZChmYWxzZSwgdGFnKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHJlc2V0SW5wdXQgPSAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2V0SW5wdXRWYWx1ZSgnJyksIDUwKTtcblxuICAgICAgICBQcm9taXNlLmFsbChyZXF1ZXN0cykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uUGFzdGUuZW1pdCh0ZXh0KTtcbiAgICAgICAgICAgIHJlc2V0SW5wdXQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChyZXNldElucHV0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZXRBbmltYXRpb25NZXRhZGF0YVxuICAgICAqL1xuICAgIHByaXZhdGUgc2V0QW5pbWF0aW9uTWV0YWRhdGEoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uTWV0YWRhdGEgPSB7XG4gICAgICAgICAgICB2YWx1ZTogJ2luJyxcbiAgICAgICAgICAgIHBhcmFtczogeyAuLi50aGlzLmFuaW1hdGlvbkR1cmF0aW9uIH1cbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=
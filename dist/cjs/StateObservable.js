"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var rxjs_1 = require("rxjs");
var StateObservable = /** @class */ (function (_super) {
    tslib_1.__extends(StateObservable, _super);
    function StateObservable(input$, initialState) {
        var _this = _super.call(this, function (subscriber) {
            var subscription = _this.__notifier.subscribe(subscriber);
            if (subscription && !subscription.closed) {
                subscriber.next(_this.value);
            }
            return subscription;
        }) || this;
        _this.__notifier = new rxjs_1.Subject();
        _this.value = initialState;
        input$.subscribe(function (value) {
            // We only want to update state$ if it has actually changed since
            // redux requires reducers use immutability patterns.
            // This is basically what distinctUntilChanged() does but it's so simple
            // we don't need to pull that code in
            if (value !== _this.value) {
                _this.value = value;
                _this.__notifier.next(value);
            }
        });
        return _this;
    }
    return StateObservable;
}(rxjs_1.Observable));
exports.StateObservable = StateObservable;

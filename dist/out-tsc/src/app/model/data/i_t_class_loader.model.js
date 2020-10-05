var InstanceLoader = /** @class */ (function () {
    function InstanceLoader(context) {
        this.context = context;
    }
    InstanceLoader.prototype.getInstance = function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var instance = Object.create(this.context[name].prototype);
        instance.constructor.apply(instance, args);
        return instance;
    };
    return InstanceLoader;
}());
//# sourceMappingURL=i_t_class_loader.model.js.map
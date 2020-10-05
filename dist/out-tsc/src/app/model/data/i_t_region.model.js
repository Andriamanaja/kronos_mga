import * as tslib_1 from "tslib";
import { base_data } from './base_data.model';
var i_t_region = /** @class */ (function (_super) {
    tslib_1.__extends(i_t_region, _super);
    function i_t_region(code, create_uid, name, write_uid, id) {
        var _this = this;
        if (id) {
            _this = _super.call(this, create_uid, name, write_uid, id) || this;
        }
        else {
            _this = _super.call(this, create_uid, name, write_uid) || this;
        }
        _this.set_code(code);
        return _this;
    }
    i_t_region.prototype.set_code = function (code) {
        this.code = code;
    };
    i_t_region.prototype.get_code = function () {
        return this.code;
    };
    return i_t_region;
}(base_data));
export { i_t_region };
//# sourceMappingURL=i_t_region.model.js.map
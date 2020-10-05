import * as tslib_1 from "tslib";
import { base_data } from './base_data.model';
var i_t_agence = /** @class */ (function (_super) {
    tslib_1.__extends(i_t_agence, _super);
    function i_t_agence(code, region_id, create_uid, name, write_uid, id) {
        var _this = this;
        if (id) {
            _this = _super.call(this, create_uid, name, write_uid, id) || this;
        }
        else {
            _this = _super.call(this, create_uid, name, write_uid) || this;
        }
        _this.setCode(code);
        _this.setRegion_id(region_id);
        return _this;
    }
    i_t_agence.prototype.setCode = function (code) {
        this.code = code;
    };
    i_t_agence.prototype.setRegion_id = function (region_id) {
        this.region_id = region_id;
    };
    i_t_agence.prototype.getCode = function () {
        return this.code;
    };
    i_t_agence.prototype.getRegion_id = function () {
        return this.region_id;
    };
    return i_t_agence;
}(base_data));
export { i_t_agence };
//# sourceMappingURL=i_t_agence.model.js.map
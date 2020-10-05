import * as tslib_1 from "tslib";
import { base_data } from './base_data.model';
var i_t_zone = /** @class */ (function (_super) {
    tslib_1.__extends(i_t_zone, _super);
    function i_t_zone(create_uid, name, write_uid, agence_id, id) {
        var _this = this;
        if (id) {
            _this = _super.call(this, create_uid, name, write_uid, id) || this;
        }
        else {
            _this = _super.call(this, create_uid, name, write_uid) || this;
        }
        _this.set_agence_id(agence_id);
        return _this;
    }
    i_t_zone.prototype.set_agence_id = function (agence_id) {
        this.agence_id = agence_id;
    };
    i_t_zone.prototype.get_agence_id = function () {
        return this.agence_id;
    };
    return i_t_zone;
}(base_data));
export { i_t_zone };
//# sourceMappingURL=i_t_zone.model.js.map
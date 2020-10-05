import * as tslib_1 from "tslib";
import { base_data } from './base_data.model';
var i_t_activite_pos = /** @class */ (function (_super) {
    tslib_1.__extends(i_t_activite_pos, _super);
    function i_t_activite_pos(create_uid, name, canal_id, write_uid, id) {
        var _this = this;
        if (id) {
            _this = _super.call(this, create_uid, name, write_uid, id) || this;
        }
        else {
            _this = _super.call(this, create_uid, name, write_uid) || this;
        }
        _this.canal_id = canal_id;
        return _this;
    }
    return i_t_activite_pos;
}(base_data));
export { i_t_activite_pos };
//# sourceMappingURL=i_t_activite_pos.model.js.map
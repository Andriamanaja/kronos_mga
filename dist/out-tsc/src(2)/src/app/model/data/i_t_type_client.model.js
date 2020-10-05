import * as tslib_1 from "tslib";
import { base_data } from './base_data.model';
var i_t_type_client = /** @class */ (function (_super) {
    tslib_1.__extends(i_t_type_client, _super);
    function i_t_type_client(code, create_uid, name, write_uid, id) {
        var _this = this;
        if (id) {
            _this = _super.call(this, create_uid, name, write_uid, id) || this;
        }
        else {
            _this = _super.call(this, create_uid, name, write_uid) || this;
        }
        _this.code = code;
        return _this;
    }
    return i_t_type_client;
}(base_data));
export { i_t_type_client };
//# sourceMappingURL=i_t_type_client.model.js.map
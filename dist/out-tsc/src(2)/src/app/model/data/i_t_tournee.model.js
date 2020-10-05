import * as tslib_1 from "tslib";
import { base_data } from './base_data.model';
var i_t_tournee = /** @class */ (function (_super) {
    tslib_1.__extends(i_t_tournee, _super);
    function i_t_tournee(commercial_id, date, state, create_uid, name, write_uid, id) {
        var _this = _super.call(this, create_uid, name, write_uid, id) || this;
        _this.setCommarcial_id(commercial_id);
        _this.setDate(date);
        _this.setState(state);
        return _this;
    }
    i_t_tournee.prototype.setCommarcial_id = function (commercial_id) {
        this.commercial_id = commercial_id;
    };
    i_t_tournee.prototype.setDate = function (date) {
        this.date = date;
    };
    i_t_tournee.prototype.setState = function (state) {
        this.state = state;
    };
    i_t_tournee.prototype.getCommercial_id = function () {
        return this.commercial_id;
    };
    i_t_tournee.prototype.getDate = function () {
        return this.date;
    };
    i_t_tournee.prototype.getState = function () {
        return this.state;
    };
    return i_t_tournee;
}(base_data));
export { i_t_tournee };
//# sourceMappingURL=i_t_tournee.model.js.map
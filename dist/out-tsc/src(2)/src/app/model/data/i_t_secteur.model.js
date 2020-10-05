import * as tslib_1 from "tslib";
import { base_data } from './base_data.model';
var i_t_secteur = /** @class */ (function (_super) {
    tslib_1.__extends(i_t_secteur, _super);
    function i_t_secteur(zone_id, create_uid, name, write_uid, id) {
        var _this = _super.call(this, create_uid, name, write_uid, id) || this;
        _this.setZone_id(zone_id);
        return _this;
    }
    i_t_secteur.prototype.setZone_id = function (zone_id) {
        this.zone_id = zone_id;
    };
    i_t_secteur.prototype.getZone_id = function () {
        return this.zone_id;
    };
    return i_t_secteur;
}(base_data));
export { i_t_secteur };
//# sourceMappingURL=i_t_secteur.model.js.map
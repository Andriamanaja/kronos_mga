import * as tslib_1 from "tslib";
import { base_data } from './base_data.model';
var i_t_contrat = /** @class */ (function (_super) {
    tslib_1.__extends(i_t_contrat, _super);
    function i_t_contrat(date_fin_contrat, date_debut_contrat, create_uid, name, write_uid, id) {
        var _this = _super.call(this, create_uid, name, write_uid, id) || this;
        _this.setDate_debut_contrat(date_debut_contrat);
        _this.setDate_fin_contrat(date_fin_contrat);
        return _this;
    }
    i_t_contrat.prototype.setDate_debut_contrat = function (date_debut_contrat) {
        this.date_debut_contrat = date_debut_contrat;
    };
    i_t_contrat.prototype.setDate_fin_contrat = function (date_fin_contrat) {
        this.date_fin_contrat = date_fin_contrat;
    };
    i_t_contrat.prototype.getDate_debut_contrat = function () {
        return this.date_debut_contrat;
    };
    i_t_contrat.prototype.getDate_fin_contrat = function () {
        return this.date_fin_contrat;
    };
    return i_t_contrat;
}(base_data));
export { i_t_contrat };
//# sourceMappingURL=i_t_contrat.model.js.map
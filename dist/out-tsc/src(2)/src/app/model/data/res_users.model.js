import * as tslib_1 from "tslib";
import { base_data } from './base_data.model';
var res_users = /** @class */ (function (_super) {
    tslib_1.__extends(res_users, _super);
    function res_users(active, login, password, company_id, partner_id, share, action_id, signature, password_crypt, alias_id, sale_team, target_sales_done, target_sales_won, create_uid, name, write_uid, id) {
        var _this = _super.call(this, create_uid, name, write_uid, id) || this;
        _this.setactive(active);
        _this.setlogin(login);
        _this.setpassword(password);
        _this.setcompany_id(company_id);
        _this.setshare(share);
        _this.setaction_id(action_id);
        _this.setsignature(signature);
        _this.setpassword_crypt(password_crypt);
        _this.setalias_id(alias_id);
        _this.setsale_team(sale_team);
        _this.settarget_sales_done(target_sales_done);
        _this.settarget_sales_won(target_sales_won);
        _this.setpartnerid(partner_id);
        return _this;
    }
    res_users.prototype.setactive = function (active) {
        this.active = active;
    };
    res_users.prototype.setlogin = function (login) {
        this.login = login;
    };
    res_users.prototype.setpartnerid = function (partner_id) {
        this.partner_id = partner_id;
    };
    res_users.prototype.getpartnerid = function () {
        return this.partner_id;
    };
    res_users.prototype.setpassword = function (password) {
        this.password = password;
    };
    res_users.prototype.setcompany_id = function (company_id) {
        this.company_id = company_id;
    };
    res_users.prototype.setshare = function (share) {
        this.share = share;
    };
    res_users.prototype.setaction_id = function (action_id) {
        this.action_id = action_id;
    };
    res_users.prototype.setsignature = function (signature) {
        this.signature = signature;
    };
    res_users.prototype.setpassword_crypt = function (password_crypt) {
        this.password_crypt = password_crypt;
    };
    res_users.prototype.setalias_id = function (alias_id) {
        this.alias_id = alias_id;
    };
    res_users.prototype.setsale_team = function (sale_team) {
        this.sale_team = sale_team;
    };
    res_users.prototype.settarget_sales_done = function (target_sales_done) {
        this.target_sales_done = target_sales_done;
    };
    res_users.prototype.settarget_sales_won = function (target_sales_won) {
        this.target_sales_won = target_sales_won;
    };
    //
    res_users.prototype.getactive = function () {
        return this.active;
    };
    res_users.prototype.getlogin = function () {
        return this.login;
    };
    res_users.prototype.getpassword = function () {
        return this.password;
    };
    res_users.prototype.getcompany_id = function () {
        return this.company_id;
    };
    res_users.prototype.getshare = function () {
        return this.share;
    };
    res_users.prototype.getaction_id = function () {
        return this.action_id;
    };
    res_users.prototype.getsignature = function () {
        return this.signature;
    };
    res_users.prototype.getpassword_crypt = function () {
        return this.password_crypt;
    };
    res_users.prototype.getalias_id = function () {
        return this.alias_id;
    };
    res_users.prototype.getsale_team = function () {
        return this.sale_team;
    };
    res_users.prototype.gettarget_sales_done = function () {
        return this.target_sales_done;
    };
    res_users.prototype.gettarget_sales_won = function () {
        return this.target_sales_won;
    };
    return res_users;
}(base_data));
export { res_users };
//# sourceMappingURL=res_users.model.js.map
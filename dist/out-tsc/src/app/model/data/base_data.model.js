var base_data = /** @class */ (function () {
    function base_data(create_uid, name, write_uid, id) {
        if (id) {
            this.setId(id);
        }
        this.setCreate_date();
        this.setCreate_uid(create_uid);
        this.setName(name);
        this.setWtrite_uid(write_uid);
        this.setWrite_date();
    }
    base_data.prototype.setId = function (id) {
        this.id = id;
    };
    base_data.prototype.setCreate_uid = function (create_uid) {
        this.create_uid = create_uid;
    };
    base_data.prototype.setCreate_date = function () {
        this.create_date = 'DEFAULT';
    };
    base_data.prototype.setName = function (name) {
        this.name = name;
    };
    base_data.prototype.setWtrite_uid = function (write_uid) {
        this.write_uid = write_uid;
    };
    base_data.prototype.setWrite_date = function () {
        this.create_date = 'DEFAULT';
    };
    base_data.prototype.getCreate_uid = function () {
        return this.create_uid;
    };
    base_data.prototype.getCreate_date = function () {
        return this.create_date;
    };
    base_data.prototype.getName = function () {
        return this.name;
    };
    base_data.prototype.getWrite_uid = function () {
        return this.write_uid;
    };
    base_data.prototype.getWrite_date = function () {
        return this.write_date;
    };
    return base_data;
}());
export { base_data };
//# sourceMappingURL=base_data.model.js.map
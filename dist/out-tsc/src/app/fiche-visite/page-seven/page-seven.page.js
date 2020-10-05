import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
<<<<<<< HEAD
import { FormGroup } from '@angular/forms';
import { Database_manager } from 'src/app/model/DAO/database_manager.model';
var PageSevenPage = /** @class */ (function () {
    function PageSevenPage(dbm, storage, router, activatedRoute) {
        this.dbm = dbm;
        this.storage = storage;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.orderForm = new FormGroup({});
        this.model = {};
        this.data = [];
=======
import { FormControl, FormBuilder } from '@angular/forms';
import { Database_manager } from 'src/app/model/DAO/database_manager.model';
var PageSevenPage = /** @class */ (function () {
    function PageSevenPage(formBuilder, dbm, fbuilder, storage, router, activatedRoute) {
        this.formBuilder = formBuilder;
        this.dbm = dbm;
        this.fbuilder = fbuilder;
        this.storage = storage;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.model = {};
        this.display = false;
        this.name = '';
        /* blobControl(){
           let formObj = this.filegroupe.getRawValue();
           let serializedForm = JSON.stringify(formObj.fileName);
   
           var reader = new FileReader();
           
           reader.onload = (function(theFile) {
               return function(e) {
                   
               var binaryData = e.target.result;
   
               var base64String = window.btoa(binaryData);
               
               console.log('aler'+base64String);
               };
           })(files);
           
           reader.readAsBinaryString(files);
   
   };*/
        this.filename = '';
        this.todo = this.formBuilder.group({});
        this.filegroupe = this.formBuilder.group({
            fileName: '',
        });
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
    }
    PageSevenPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (data) {
            _this.dt = data['data'];
            _this.data_from_route = JSON.parse(data['data']);
        });
        this.dbm.get_data_for_p7(1, 3).then(function (data) {
            _this.data_from_db = data;
<<<<<<< HEAD
            for (var i = 0; i < _this.data_from_db.length; i++) {
                switch (_this.data_from_db[i].type) {
                    case "input": {
                        _this.data.push({
                            key: _this.data_from_db[i].question_id.toString(),
                            type: _this.data_from_db[i].type,
                            templateOptions: {
                                label: _this.data_from_db[i].name,
                            },
                        });
                        break;
                    }
                    case "textarea": {
                        _this.data.push({
                            key: _this.data_from_db[i].question_id.toString(),
                            type: 'textarea',
                            templateOptions: {
                                label: _this.data_from_db[i].name,
                            },
                        });
                        break;
                    }
                    case "simple_choice": {
                        _this.data.push({
                            key: _this.data_from_db[i].question_id.toString(),
                            type: 'select',
                            templateOptions: {
                                label: _this.data_from_db[i].name,
                                options: _this.data_from_db[i].response
                            }
                        });
                        break;
                    }
                    case "multiple_choice": {
                        _this.data.push({
                            key: _this.data_from_db[i].question_id.toString(),
                            type: 'select',
                            templateOptions: {
                                label: _this.data_from_db[i].name,
                                multiple: true,
                                options: _this.data_from_db[i].response
                            }
                        });
                        break;
                    }
                    case "number": {
                        _this.data.push({
                            key: _this.data_from_db[i].question_id.toString(),
                            type: 'input',
                            templateOptions: {
                                type: _this.data_from_db[i].type,
                                label: _this.data_from_db[i].name,
                            }
                        });
                        break;
                    }
                }
            }
            _this.orderFields = JSON.stringify(data);
=======
            console.log(JSON.stringify(_this.data_from_db));
            for (var i = 0; i < _this.data_from_db.length; i++) {
                _this.todo.addControl('input' + i, new FormControl());
            }
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
        });
        this.items = [
            { id: 1, label: 'NOUVEAU' },
            { id: 2, label: 'OUVERTE' },
            { id: 3, label: 'CLÔTURÉE' },
        ];
    };
    PageSevenPage.prototype.page_six = function () {
        this.router.navigate(['page-six']);
    };
    PageSevenPage.prototype.open_menu = function () {
        this.storage.set("last", "tournees");
        this.router.navigate(['menu']);
    };
<<<<<<< HEAD
    PageSevenPage.prototype.end_visite = function () {
    };
    PageSevenPage.prototype.page_one = function () {
        this.router.navigate(['page-one']);
    };
=======
    PageSevenPage.prototype.page_one = function () {
        this.router.navigate(['page-one']);
    };
    PageSevenPage.prototype.end_visite = function () {
        var _this = this;
        var id = this.data_from_route.visit_sheet_id;
        var now = this.dbm.getDatetimeNow();
        // get begin datetime 	
        this.dbm.get_visit_begin_datetime(id)
            .then(function (data) {
            var begin_datetime = data.begin_datetime;
            begin_datetime = new Date(begin_datetime).valueOf();
            var end_datetime = new Date(now).valueOf();
            var duration = end_datetime - begin_datetime;
            duration = duration / 1000;
            _this.dbm.set_visit_duration_end_datetime(id, duration, now)
                .then()
                .catch(function (e) { return alert(e.message); });
        })
            .catch(function (e) { return alert(e.message); });
    };
    PageSevenPage.prototype.removeControl = function () {
        var formObj = this.todo.getRawValue();
        var serializedForm = JSON.stringify(formObj);
        alert('response' + serializedForm);
        this.display = false;
    };
    PageSevenPage.prototype.showDialog = function () {
        this.display = true;
    };
    PageSevenPage.prototype.Annuler = function () {
        this.display = false;
    };
    PageSevenPage.prototype.onFileSelected = function (event) {
        var file = event.target.files[0];
        this.filename = file.name;
        alert(this.filename);
        var reader = new FileReader();
        reader.onload = function (e) {
            var fileData = e.target.result;
            console.log(fileData);
        };
        reader.readAsDataURL(file);
    };
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
    PageSevenPage.prototype.onSubmit = function (order) {
        console.log(order);
        console.log(JSON.stringify(this.orderFields));
    };
    PageSevenPage = tslib_1.__decorate([
        Component({
            selector: 'app-page-seven',
            templateUrl: './page-seven.page.html',
            styleUrls: ['./page-seven.page.scss'],
        }),
<<<<<<< HEAD
        tslib_1.__metadata("design:paramtypes", [Database_manager, Storage, Router, ActivatedRoute])
=======
        tslib_1.__metadata("design:paramtypes", [FormBuilder, Database_manager, FormBuilder, Storage, Router, ActivatedRoute])
>>>>>>> 696747c9ec9803580d9b2d4dfb3368365b981bf8
    ], PageSevenPage);
    return PageSevenPage;
}());
export { PageSevenPage };
//# sourceMappingURL=page-seven.page.js.map
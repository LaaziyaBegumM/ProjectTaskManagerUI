(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task/task.component */ "./src/app/task/task.component.ts");
/* harmony import */ var _view_task_view_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-task/view-task.component */ "./src/app/view-task/view-task.component.ts");
/* harmony import */ var _update_task_update_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./update-task/update-task.component */ "./src/app/update-task/update-task.component.ts");








var routes = [
    { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"] },
    { path: 'project', component: _project_project_component__WEBPACK_IMPORTED_MODULE_4__["ProjectComponent"] },
    { path: 'task', component: _task_task_component__WEBPACK_IMPORTED_MODULE_5__["TaskComponent"] },
    { path: 'view-task', component: _view_task_view_task_component__WEBPACK_IMPORTED_MODULE_6__["ViewTaskComponent"] },
    { path: 'update-task', component: _update_task_update_task_component__WEBPACK_IMPORTED_MODULE_7__["UpdateTaskComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <app-menu></app-menu>\n  <hr>\n  <router-outlet></router-outlet>\n </div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Project Managaer';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./task/task.component */ "./src/app/task/task.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _view_task_view_task_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view-task/view-task.component */ "./src/app/view-task/view-task.component.ts");
/* harmony import */ var _services_pmuser_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/pmuser.service */ "./src/app/services/pmuser.service.ts");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./search.pipe */ "./src/app/search.pipe.ts");
/* harmony import */ var _update_task_update_task_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./update-task/update-task.component */ "./src/app/update-task/update-task.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"],
                _project_project_component__WEBPACK_IMPORTED_MODULE_8__["ProjectComponent"],
                _task_task_component__WEBPACK_IMPORTED_MODULE_9__["TaskComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"],
                _view_task_view_task_component__WEBPACK_IMPORTED_MODULE_11__["ViewTaskComponent"],
                _search_pipe__WEBPACK_IMPORTED_MODULE_13__["SearchPipe"],
                _update_task_update_task_component__WEBPACK_IMPORTED_MODULE_14__["UpdateTaskComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [_services_pmuser_service__WEBPACK_IMPORTED_MODULE_12__["PMUserService"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <h1>Project Manager</h1>\n      <ul class=\"nav nav-pills\">\n        <li><a [routerLink]=\"['/project']\">Add Project</a> </li>\n        <li><a [routerLink]=\"['/task']\">Add Task</a> </li>\n        <li><a [routerLink]=\"['/user']\">Add User</a> </li>\n        <li><a [routerLink]=\"['/view-task']\">View Task</a> </li>\n      </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/project/project.component.css":
/*!***********************************************!*\
  !*** ./src/app/project/project.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/project/project.component.html":
/*!************************************************!*\
  !*** ./src/app/project/project.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Add Project</h2>\n<form class=\"project-form\" #projectForm=\"ngForm\" (ngSubmit)=\"onSubmit(projectForm)\">\n    \n    <div class=\"form-group row\">\n      <label for=\"text\" class=\"col-sm-2 col-form-label\"> Project: </label>\n      <div class=\"col-sm-5\">\n        <input type=\"text\" class=\"form-control\" #ProjectName=\"ngModel\" required  [(ngModel)]=\"projectService.project.ProjectName\" \n        name =\"ProjectName\" placeholder=\"Project\" autofocus/>        \n      </div>\n    </div>\n    <div class=\"form-group row\">        \n        <div class=\"col-sm-offset-2\">      \n            <label for=\"dateCheck\" class=\"col-sm-6 col-form-label\"><input type=\"checkbox\"  (click)=\"checkDate($event)\" \n              [(ngModel)]=\"projectService.project.DateChecked\" checked=\"projectService.project.DateChecked\" id=\"DateChecked\" name=\"DateChecked\"> \n            Set Start and End Date</label>                                           \n      </div>  \n      </div>\n      <div class=\"form-group row\">        \n          <div class=\"col-sm-offset-2\">  \n              <div class=\"col-sm-6\">                                                     \n            <input type=\"date\" class=\"form-control form-control-rounded\" \n            #StartDate=\"ngModel\" required  \n            [(ngModel)]=\"projectService.project.StartDate\"\n            name =\"StartDate\" placeholder=\"StartDate\"/> \n            <input type=\"date\" class=\"form-control form-control-rounded\" \n            #EndDate=\"ngModel\" required  \n            [(ngModel)]=\"projectService.project.EndDate\"\n            name =\"EndDate\" placeholder=\"EndDate\"/> \n            </div>            \n        </div>  \n      </div>\n      <label for=\"text\" style=\"margin-left:150px\" > 0 <label for=\"text\" style=\"margin-left:180px\"> 30</label> </label>                 \n    <div class=\"form-group row\">\n        <label for=\"text\" class=\"col-sm-2 col-form-label\"> Priority: </label>           \n        <div class=\"col-sm-4\">                       \n          <input type=\"range\" class=\"form-control\" #Priority=\"ngModel\" required [(ngModel)]=\"projectService.project.Priority\" \n          name =\"Priority\" id =\"Priority\" value=\"0\" oninput=\"amount.value=Priority.value\" placeholder=\"Priority\"  min=\"0\" max=\"30\" />     \n          </div>\n          <div class=\"col-sm-4\"> \n          <output class=\"col-sm-2 col-form-label\" id=\"amount\" name=\"amount\" for=\"Piority\"></output>   \n        </div>               \n      </div>\n      <div class=\"form-group row\">\n          <label for=\"text\" class=\"col-sm-2 col-form-label\"> Manager: </label>\n          <div class=\"col-sm-4\">\n            <input readonly type=\"text\" class=\"form-control\" #ManagerName=\"ngModel\" required [(ngModel)]=\"projectService.project.ManagerName\" \n            name =\"ManagerName\" placeholder=\"ManagerName\" /> \n            </div>\n            <div class=\"col-sm-1\">\n            <a class=\"btn btn-default btn-info\" data-toggle=\"modal\" data-target=\"#myModal\">Search</a>&nbsp;               \n          </div>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"col-sm-offset-4\">   \n                <div class=\"col-sm-8\">               \n               <button  type=\"submit\" class=\"btn btn-default btn-info\" style=\"margin-left:75px\">Submit</button>                       \n               &nbsp;<button  type=\"button\" class=\"btn btn-default btn-info\" (click)=\"reset(projectService.project)\">Reset</button>                                       \n               </div>               \n            </div>\n        </div>\n        <input type=\"hidden\" name =\"ProjectId\" #ProjectId=\"ngModel\" [(ngModel)]=\"projectService.project.ProjectId\">\n    <input type=\"hidden\" name =\"UserId\" #UserId=\"ngModel\" [(ngModel)]=\"projectService.project.UserId\">\n    <input type=\"hidden\" name =\"Status\" #Status=\"ngModel\" [(ngModel)]=\"projectService.project.Status\">\n  </form>\n<hr>\n<div>    \n    <div class=\"form-group \">       \n        <div class=\"col-sm-7\">\n          <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"searchText\" placeholder=\"search..\" >                           \n        </div>\n        <br>\n        <br>\n        </div>\n        <div class=\"form-group row \">\n        <div class=\"col-sm-8\">            \n           <label for=\"text\" class=\"col-sm-2 col-form-label\"> Sort: </label>  \n           <a class=\"btn btn-default btnSort\" (click)=\"sort('StartDate')\">Start Date</a>&nbsp;\n           <a class=\"btn btn-default btnSort\" (click)=\"sort('EndDate')\">End Date</a>&nbsp;\n           <a class=\"btn btn-default btnSort\" (click)=\"sort('Priority')\">Priority</a>  &nbsp;        \n           <a class=\"btn btn-default btnSort\" (click)=\"sort('Completed')\">Completed</a>  &nbsp;        \n          </div>\n      </div>\n\n<table class=\"table table-sm table-hover table-striped\">  \n    <tr *ngFor=\"let project of projectList |search: 'ProjectName' : searchText ; let i= index\">\n      <td>\n          <label ng-readonly=\"all\" style=\"margin-left:20px\">Project: </label>\n       <label ng-readonly=\"all\" style=\"margin-left:20px\">{{project.ProjectName}}</label>      \n      <br>\n      <br>\n        <label ng-readonly=\"all\" style=\"margin-left:20px\">No of Tasks: </label>\n        <label ng-readonly=\"all\" style=\"margin-left:20px\">{{project.TaskCount}} </label>\n        <label ng-readonly=\"all\" style=\"margin-left:165px\">Completed:</label>\n        <label ng-readonly=\"all\" style=\"margin-left:20px\">{{project.Status}}</label>\n        <br>\n        <label ng-readonly=\"all\" style=\"margin-left:20px\">Start Date:</label>  \n        <label ng-readonly=\"all\" style=\"margin-left:20px\">{{project.StartDate|date:'MM/dd/yyyy'}}</label>  \n        <label ng-readonly=\"all\" style=\"margin-left:50px\">End Date:</label>  \n         <label ng-readonly=\"all\" style=\"margin-left:20px\">{{project.EndDate|date:'MM/dd/yyyy'}}</label>        \n      </td>  \n      <td>\n          <label ng-readonly=\"all\" style=\"margin-left:100px\">Priority</label><br>\n          <label ng-readonly=\"all\" style=\"margin-left:100px\">{{project.Priority}}</label>  \n      </td>\n      <td>\n          <a class=\"btn btn-default btnColor\" (click)=\"edit(project)\">Update</a>&nbsp;\n          <a *ngIf=\"project.Status == 'InProgress'\" class=\"btn btn-default btnColor\" (click)=\"suspend(project)\">Suspend</a><br>\n      </td>   \n    </tr>  \n  </table>\n</div>\n\n  <div class=\"container\">     \n      <!-- Modal -->\n      <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n        <div class=\"modal-dialog\">        \n          <!-- Modal content-->\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              <h4 class=\"modal-title\">User List</h4>\n            </div>\n            <div class=\"modal-body\">\n                <table class=\"table table-sm table-hover table-striped\">  \n                    <tr *ngFor=\"let user of userList\">\n                      <td>\n                        <label ng-readonly=\"all\" >{{user.FirstName}}</label>\n                      </td>    \n                        <td>\n                        <label ng-readonly=\"all\" >{{user.LastName}}</label>\n                      </td>    \n                        <td>\n                         <label ng-readonly=\"all\">{{user.EmployeeId}}</label>  &nbsp;&nbsp;  \n                         <input type=\"checkbox\"  id=\"userCheck\" name=\"userCheck\" [checked]=\"checkbox\" (change)=\"changed(user)\">                            \n                      </td>     \n                    </tr>  \n                  </table>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Select</button>\n            </div>\n          </div>\n          \n        </div>\n      </div>\n      \n    </div>"

/***/ }),

/***/ "./src/app/project/project.component.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pmproject_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/pmproject.service */ "./src/app/services/pmproject.service.ts");
/* harmony import */ var _services_pmuser_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/pmuser.service */ "./src/app/services/pmuser.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(projectService, userService) {
        var _this = this;
        this.projectService = projectService;
        this.userService = userService;
        this.projectService.getProjects().subscribe(function (i) { return _this.projectList = i; });
        this.userService.getUsers().subscribe(function (i) { return _this.userList = i; });
        this.reset();
        this.projectService.project.DateChecked = true;
        this.today = new Date().toISOString().split('T')[0];
        this.nextDate = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0];
        this.projectService.project.StartDate = this.today;
        this.projectService.project.EndDate = this.nextDate;
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    ProjectComponent.prototype.reset = function (form) {
        this.projectService.project = {
            UserId: null,
            ProjectId: null,
            ProjectName: '',
            Priority: null,
            StartDate: null,
            EndDate: null,
            ManagerName: '',
            Status: '',
            TaskCount: null,
            DateChecked: null
        };
        this.projectService.project.DateChecked = true;
    };
    ProjectComponent.prototype.checkDate = function (evt) {
        if (evt.target.checked) {
            this.dateChecked = true;
            this.projectService.project.DateChecked = true;
        }
        else {
            this.dateChecked = false;
            this.projectService.project.DateChecked = false;
        }
    };
    ProjectComponent.prototype.changed = function (usr) {
        this.projectService.project.UserId = usr.UserId;
        this.projectService.project.ManagerName = usr.FirstName + "  " + usr.LastName;
    };
    ProjectComponent.prototype.sort = function (colName) {
        if (colName == "StartDate")
            this.projectList.sort(function (a, b) {
                return new Date(b.StartDate) - new Date(a.StartDate);
            });
        if (colName == "EndDate")
            this.projectList.sort(function (a, b) {
                return new Date(b.EndDate) - new Date(a.EndDate);
            });
        if (colName == "Priority")
            this.projectList.sort(function (a, b) {
                return new Date(b.Priority) - new Date(a.Priority);
            });
        if (colName == "Completed")
            this.projectList.sort(function (a, b) {
                var nameA = a.Status.toLowerCase(), nameB = b.Status.toLowerCase();
                if (nameA < nameB)
                    return -1;
                if (nameA > nameB)
                    return 1;
                return 0;
            });
    };
    ProjectComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.value.ProjectName == '' || form.value.ProjectName == null) {
            alert("Enter Project Name");
            return;
        }
        if (this.dateChecked == true) {
            if (form.value.StartDate == null) {
                alert("Enter StartDate with Time");
                return;
            }
            if (form.value.EndDate == null) {
                alert("Enter EndDate with Time");
                return;
            }
        }
        if (form.value.ManagerName == '' || form.value.ManagerName == null) {
            alert("Enter Manager Name");
            return;
        }
        if (form.value.ProjectId == null) {
            form.value.Status = "InProgress";
            this.projectService.Add(form.value)
                .subscribe(function (data) {
                _this.reset(form);
                alert("Added Project Successfully");
                _this.projectService.getProjects().subscribe(function (i) { return _this.projectList = i; });
            });
        }
        else {
            this.projectService.Update(form.value)
                .subscribe(function (data) {
                _this.reset(form);
                alert("Updated Project Successfully");
                _this.projectService.getProjects().subscribe(function (i) { return _this.projectList = i; });
            });
        }
    };
    ProjectComponent.prototype.edit = function (proj) {
        var date = new _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]("en-US");
        this.sdate = date.transform(proj.StartDate, 'MM/dd/yyyy');
        this.edate = date.transform(proj.EndDate, 'MM/dd/yyyy');
        proj.StartDate = this.sdate;
        proj.EndDate = this.edate;
        if (proj.StartDate != null && proj.EndDate != null)
            this.projectService.project.DateChecked = true;
        else
            this.projectService.project.DateChecked = false;
        this.projectService.project = Object.assign({}, proj);
    };
    ProjectComponent.prototype.suspend = function (proj) {
        var _this = this;
        if (confirm('Are you sure to suspend this project ?') == true) {
            proj.Status = "Suspended";
            this.projectService.Update(proj).subscribe(function (x) {
                _this.projectService.getProjects().subscribe(function (i) { return _this.projectList = i; });
            });
        }
    };
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/project/project.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_pmproject_service__WEBPACK_IMPORTED_MODULE_2__["PMProjectService"], _services_pmuser_service__WEBPACK_IMPORTED_MODULE_3__["PMUserService"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/search.pipe.ts":
/*!********************************!*\
  !*** ./src/app/search.pipe.ts ***!
  \********************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (items, field, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (item) { return item[field].toLowerCase().includes(searchText.toLowerCase()); });
    };
    SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/services/pmProject.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/pmProject.service.ts ***!
  \***********************************************/
/*! exports provided: PMProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PMProjectService", function() { return PMProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);





var headersObj = new Headers({ 'content-Type': 'application/json' });
var options = { headers: headersObj };
var PMProjectService = /** @class */ (function () {
    function PMProjectService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:49755/api/Project';
    }
    PMProjectService.prototype.getProjects = function () {
        return this.http.get(this.baseUrl);
    };
    ;
    PMProjectService.prototype.get = function (Id) {
        return this.http.get(this.baseUrl + "/" + Id);
    };
    PMProjectService.prototype.Add = function (item) {
        return this.http.post(this.baseUrl, item);
    };
    PMProjectService.prototype.Delete = function (Id) {
        return this.http.delete(this.baseUrl + "/" + Id);
    };
    PMProjectService.prototype.Update = function (item) {
        return this.http.put(this.baseUrl + "/" + item.ProjectId, item);
    };
    PMProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PMProjectService);
    return PMProjectService;
}());



/***/ }),

/***/ "./src/app/services/pmproject.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/pmproject.service.ts ***!
  \***********************************************/
/*! exports provided: PMProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PMProjectService", function() { return PMProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);





var headersObj = new Headers({ 'content-Type': 'application/json' });
var options = { headers: headersObj };
var PMProjectService = /** @class */ (function () {
    function PMProjectService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:49755/api/Project';
    }
    PMProjectService.prototype.getProjects = function () {
        return this.http.get(this.baseUrl);
    };
    ;
    PMProjectService.prototype.get = function (Id) {
        return this.http.get(this.baseUrl + "/" + Id);
    };
    PMProjectService.prototype.Add = function (item) {
        return this.http.post(this.baseUrl, item);
    };
    PMProjectService.prototype.Delete = function (Id) {
        return this.http.delete(this.baseUrl + "/" + Id);
    };
    PMProjectService.prototype.Update = function (item) {
        return this.http.put(this.baseUrl + "/" + item.ProjectId, item);
    };
    PMProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PMProjectService);
    return PMProjectService;
}());



/***/ }),

/***/ "./src/app/services/pmtask.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/pmtask.service.ts ***!
  \********************************************/
/*! exports provided: PMTaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PMTaskService", function() { return PMTaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);





var headersObj = new Headers({ 'content-Type': 'application/json' });
var options = { headers: headersObj };
var PMTaskService = /** @class */ (function () {
    function PMTaskService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:49755/api/Task';
    }
    PMTaskService.prototype.getTasks = function () {
        return this.http.get(this.baseUrl);
    };
    ;
    PMTaskService.prototype.get = function (Id) {
        return this.http.get(this.baseUrl + "/" + Id);
    };
    PMTaskService.prototype.Add = function (item) {
        return this.http.post(this.baseUrl, item);
    };
    PMTaskService.prototype.Delete = function (Id) {
        return this.http.delete(this.baseUrl + "/" + Id);
    };
    PMTaskService.prototype.Update = function (item) {
        return this.http.put(this.baseUrl + "/" + item.TaskId, item);
    };
    PMTaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PMTaskService);
    return PMTaskService;
}());



/***/ }),

/***/ "./src/app/services/pmuser.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/pmuser.service.ts ***!
  \********************************************/
/*! exports provided: PMUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PMUserService", function() { return PMUserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);





var headersObj = new Headers({ 'content-Type': 'application/json' });
var options = { headers: headersObj };
var PMUserService = /** @class */ (function () {
    function PMUserService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:49755/api/User';
    }
    PMUserService.prototype.getUsers = function () {
        return this.http.get(this.baseUrl);
    };
    ;
    PMUserService.prototype.get = function (Id) {
        return this.http.get(this.baseUrl + "/" + Id);
    };
    PMUserService.prototype.Add = function (item) {
        return this.http.post(this.baseUrl, item);
    };
    PMUserService.prototype.Delete = function (Id) {
        return this.http.delete(this.baseUrl + "/" + Id);
    };
    PMUserService.prototype.Update = function (item) {
        return this.http.put(this.baseUrl + "/" + item.UserId, item);
    };
    PMUserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PMUserService);
    return PMUserService;
}());



/***/ }),

/***/ "./src/app/task/task.component.css":
/*!*****************************************!*\
  !*** ./src/app/task/task.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2svdGFzay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/task/task.component.html":
/*!******************************************!*\
  !*** ./src/app/task/task.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Add Task</h2>\n<form class=\"task-form\" #taskForm=\"ngForm\" (ngSubmit)=\"onSubmit(taskForm)\">\n    <input type=\"hidden\" name =\"ProjectId\" #ProjectId=\"ngModel\" [(ngModel)]=\"taskService.task.ProjectId\">\n    <input type=\"hidden\" name =\"UserId\" #UserId=\"ngModel\" [(ngModel)]=\"taskService.task.UserId\">\n    <input type=\"hidden\" name =\"Status\" #Status=\"ngModel\" [(ngModel)]=\"taskService.task.Status\">\n    <input type=\"hidden\" name =\"ParentTaskId\" #ParentTaskId=\"ngModel\" [(ngModel)]=\"taskService.task.ParentTaskId\">\n    <div class=\"form-group row\">\n      <label for=\"text\" class=\"col-sm-2 col-form-label\"> Project: </label>\n      <div class=\"col-sm-5\">\n        <input type=\"text\" readonly class=\"form-control\" #ProjectName=\"ngModel\" required [(ngModel)]=\"taskService.task.ProjectName\" \n        name =\"ProjectName\" placeholder=\"ProjectName\" /> \n        </div>\n        <div class=\"col-sm-2\">\n        <a class=\"btn btn-default btn-secondary\" style=\"margin-left:25px\" data-toggle=\"modal\" data-target=\"#myProjectModal\">Search</a>&nbsp;               \n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"text\" class=\"col-sm-2 col-form-label\"> Task: </label>\n      <div class=\"col-sm-6\">\n        <input type=\"text\" class=\"form-control\" #TaskName=\"ngModel\" required  [(ngModel)]=\"taskService.task.TaskName\" \n        name =\"TaskName\" placeholder=\"Task\" autofocus/>        \n      </div>\n    </div>\n    <div class=\"form-group row\">\n        <label><input type=\"checkbox\"  style=\"margin-left:160px\"\n             id=\"ParentTask\" name=\"ParentTask\" checked=\"taskService.task.ParentTask\" [(ngModel)]=\"taskService.task.ParentTask\" checked=\"taskService.task.ParentTask\"> \n          Parent Task </label>     \n    </div>                                          \n    <label for=\"text\" style=\"margin-left:150px\" > 0 <label for=\"text\" style=\"margin-left:400px\"> 30</label> </label>                 \n    <div class=\"form-group row\">\n        <label for=\"text\" class=\"col-sm-2 col-form-label\"> Priority: </label>           \n        <div class=\"col-sm-6\">                       \n          <input type=\"range\" class=\"form-control\" #Priority=\"ngModel\" required [(ngModel)]=\"taskService.task.Priority\" \n          name =\"Priority\" id =\"Priority\" oninput=\"amount.value=Priority.value\" placeholder=\"Priority\" min=\"0\" max=\"30\" />        \n        </div>   \n        <div class=\"col-sm-3\"> \n            <output class=\"col-sm-2 col-form-label\" id=\"amount\" name=\"amount\" for=\"Piority\"></output>   \n          </div>             \n      </div>\n      <div class=\"form-group row\">\n        <label for=\"text\" class=\"col-sm-2 col-form-label\"> Parent Task: </label>\n        <div class=\"col-sm-5\">\n          <input  readonly type=\"text\" class=\"form-control\" #ParentTaskName=\"ngModel\" required [(ngModel)]=\"taskService.task.ParentTaskName\" \n          name =\"ParentTaskName\" placeholder=\"ParentTaskName\" /> \n          </div>\n          <div class=\"col-sm-2\">\n          <a class=\"btn btn-default btn-secondary\" style=\"margin-left:25px\" data-toggle=\"modal\" data-target=\"#myTaskModal\">Search</a>&nbsp;               \n        </div>\n      </div>\n      <div class=\"form-group row\">        \n          <div class=\"col-sm-offset-2\">  \n              <div class=\"col-sm-4\">   \n                  <label for=\"text\"> Start Date:                                       \n            <input type=\"datetime-local\" class=\"form-control form-control-rounded\" #StartDate=\"ngModel\" required  \n            [(ngModel)]=\"taskService.task.StartDate\"  \n            name =\"StartDate\" placeholder=\"StartDate\" /> </label>             \n            </div> \n            <div class=\"col-sm-4\">   \n                <label for=\"text\"> End Date:                                     \n                    <input type=\"datetime-local\"  class=\"form-control\" #EndDate=\"ngModel\" required  [(ngModel)]=\"taskService.task.EndDate\" \n                    name =\"EndDate\" placeholder=\"EndDate\" /> </label>                \n          </div>            \n        </div>  \n      </div>                   \n      <div class=\"form-group row\">\n          <label for=\"text\" class=\"col-sm-2 col-form-label\"> User: </label>\n          <div class=\"col-sm-5\">\n            <input readonly type=\"text\" class=\"form-control\" #UserName=\"ngModel\" required [(ngModel)]=\"taskService.task.UserName\" \n            name =\"UserName\" placeholder=\"UserName\" /> \n            </div>\n            <div class=\"col-sm-2\">\n            <a class=\"btn btn-default btn-secondary\" style=\"margin-left:25px\" data-toggle=\"modal\" data-target=\"#myModal\">Search</a>&nbsp;               \n          </div>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"col-sm-offset-4\">   \n                <div class=\"col-sm-8\">               \n               <button style=\"margin-left:160px\" type=\"submit\" class=\"btn btn-default btn-info\" >Add Task</button>                       \n               &nbsp;<button  type=\"button\" class=\"btn btn-default btn-info\" (click)=\"reset(taskService.task)\">Reset</button>                                       \n               </div>               \n            </div>\n        </div>\n  </form>\n<br>\n<br>\n<hr>\n<div>      \n    <div class=\"container\">     \n        <!-- Modal -->\n        <div class=\"modal fade\" id=\"myTaskModal\" role=\"dialog\">\n          <div class=\"modal-dialog\">        \n            <!-- Modal content-->\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title\">Task List</h4>\n              </div>\n              <div class=\"modal-body\">\n                  <table class=\"table table-sm table-hover table-striped\">  \n                      <tr *ngFor=\"let task of taskList\">\n                        <td>\n                          <label ng-readonly=\"all\" >{{task.TaskName}}</label>\n                        </td>    \n                          <td>\n                          <label ng-readonly=\"all\" >{{task.Status}}</label>\n                        </td>    \n                          <td>                           \n                           <input type=\"checkbox\"  id=\"taskCheck\" name=\"taskCheck\" [checked]=\"checkbox\" (change)=\"changedTask(task)\">                            \n                        </td>     \n                      </tr>  \n                    </table>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Select</button>\n              </div>\n            </div>\n            \n          </div>\n        </div>      \n      </div>\n<div>      \n    <div class=\"container\">     \n        <!-- Modal -->\n        <div class=\"modal fade\" id=\"myProjectModal\" role=\"dialog\">\n          <div class=\"modal-dialog\">        \n            <!-- Modal content-->\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title\">Project List</h4>\n              </div>\n              <div class=\"modal-body\">\n                  <table class=\"table table-sm table-hover table-striped\">  \n                      <tr *ngFor=\"let project of projectList\">\n                        <td>\n                          <label ng-readonly=\"all\" >{{project.ProjectName}}</label>\n                        </td>    \n                          <td>\n                          <label ng-readonly=\"all\" >{{project.Status}}</label>\n                        </td>    \n                          <td>\n                           <label ng-readonly=\"all\">{{project.ProjectId}}</label>  &nbsp;&nbsp;  \n                           <input type=\"checkbox\"  id=\"projectCheck\" name=\"projectCheck\" [checked]=\"checkbox\" (change)=\"changedProject(project)\">                            \n                        </td>     \n                      </tr>  \n                    </table>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Select</button>\n              </div>\n            </div>\n            \n          </div>\n        </div>      \n      </div>\n<div>      \n  <div class=\"container\">     \n      <!-- Modal -->\n      <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n        <div class=\"modal-dialog\">        \n          <!-- Modal content-->\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              <h4 class=\"modal-title\">User List</h4>\n            </div>\n            <div class=\"modal-body\">\n                <table class=\"table table-sm table-hover table-striped\">  \n                    <tr *ngFor=\"let user of userList\">\n                      <td>\n                        <label ng-readonly=\"all\" >{{user.FirstName}}</label>\n                      </td>    \n                        <td>\n                        <label ng-readonly=\"all\" >{{user.LastName}}</label>\n                      </td>    \n                        <td>\n                         <label ng-readonly=\"all\">{{user.EmployeeId}}</label>  &nbsp;&nbsp;  \n                         <input type=\"checkbox\"  id=\"userCheck\" name=\"userCheck\" [checked]=\"checkbox\" (change)=\"changed(user)\">                            \n                      </td>     \n                    </tr>  \n                  </table>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Select</button>\n            </div>\n          </div>\n          \n        </div>\n      </div>      \n    </div>"

/***/ }),

/***/ "./src/app/task/task.component.ts":
/*!****************************************!*\
  !*** ./src/app/task/task.component.ts ***!
  \****************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pmproject_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/pmproject.service */ "./src/app/services/pmproject.service.ts");
/* harmony import */ var _services_pmuser_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/pmuser.service */ "./src/app/services/pmuser.service.ts");
/* harmony import */ var _services_pmtask_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/pmtask.service */ "./src/app/services/pmtask.service.ts");





var TaskComponent = /** @class */ (function () {
    function TaskComponent(taskService, projectService, userService) {
        this.taskService = taskService;
        this.projectService = projectService;
        this.userService = userService;
    }
    TaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectService.getProjects().subscribe(function (i) { return _this.projectList = i; });
        this.userService.getUsers().subscribe(function (i) { return _this.userList = i; });
        this.taskService.getTasks().subscribe(function (i) { return _this.taskList = i; });
        this.reset();
    };
    TaskComponent.prototype.reset = function (form) {
        this.taskService.task = {
            TaskId: null,
            ProjectId: null,
            ProjectName: '',
            ParentTask: null,
            TaskName: '',
            ParentTaskId: null,
            StartDate: null,
            EndDate: null,
            Priority: null,
            Status: '',
            UserId: null,
            UserName: '',
            ParentTaskName: '',
        };
    };
    TaskComponent.prototype.changed = function (usr) {
        this.taskService.task.UserId = usr.UserId;
        this.taskService.task.UserName = usr.FirstName + "  " + usr.LastName;
    };
    TaskComponent.prototype.changedTask = function (task) {
        this.taskService.task.ParentTaskId = task.TaskId;
        this.taskService.task.ParentTaskName = task.TaskName;
    };
    TaskComponent.prototype.changedProject = function (proj) {
        this.taskService.task.ProjectId = proj.ProjectId;
        this.taskService.task.ProjectName = proj.ProjectName;
    };
    TaskComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.value.ProjectName == '' || form.value.ProjectName == null) {
            alert("Enter Project Name");
            return;
        }
        if (form.value.TaskName == '' || form.value.TaskName == null) {
            alert("Enter Task Name");
            return;
        }
        if (form.value.StartDate == null) {
            alert("Enter StartDate with Time");
            return;
        }
        if (form.value.EndDate == null) {
            alert("Enter EndDate with Time");
            return;
        }
        if (form.value.UserName == '' || form.value.UserName == null) {
            alert("Enter User Name");
            return;
        }
        if (form.value.TaskId == null) {
            form.value.Status = "InProgress";
            this.taskService.Add(form.value)
                .subscribe(function (data) {
                _this.reset(form);
                alert("Added Task Successfully");
            });
        }
        else {
            this.taskService.Update(form.value)
                .subscribe(function (data) {
                _this.reset(form);
                alert("Updated Task Successfully");
            });
        }
    };
    TaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task',
            template: __webpack_require__(/*! ./task.component.html */ "./src/app/task/task.component.html"),
            styles: [__webpack_require__(/*! ./task.component.css */ "./src/app/task/task.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_pmtask_service__WEBPACK_IMPORTED_MODULE_4__["PMTaskService"], _services_pmproject_service__WEBPACK_IMPORTED_MODULE_2__["PMProjectService"],
            _services_pmuser_service__WEBPACK_IMPORTED_MODULE_3__["PMUserService"]])
    ], TaskComponent);
    return TaskComponent;
}());



/***/ }),

/***/ "./src/app/update-task/update-task.component.css":
/*!*******************************************************!*\
  !*** ./src/app/update-task/update-task.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS10YXNrL3VwZGF0ZS10YXNrLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/update-task/update-task.component.html":
/*!********************************************************!*\
  !*** ./src/app/update-task/update-task.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Update Task</h2>\n<form class=\"updatetask-form\" #updatetaskForm=\"ngForm\" (ngSubmit)=\"onSubmit(updatetaskForm)\">    \n    <input type=\"hidden\" name =\"TaskId\" #TaskId=\"ngModel\" [(ngModel)]=\"taskService.task.TaskId\">\n    <input type=\"hidden\" name =\"UserId\" #UserId=\"ngModel\" [(ngModel)]=\"taskService.task.UserId\">\n    <input type=\"hidden\" name =\"Status\" #Status=\"ngModel\" [(ngModel)]=\"taskService.task.Status\">\n    <div class=\"form-group row\">\n      <label for=\"text\" class=\"col-sm-2 col-form-label\"> Project: </label>\n      <div class=\"col-sm-5\">\n        <input type=\"text\" readonly class=\"form-control\" #ProjectName=\"ngModel\" required [(ngModel)]=\"taskService.task.ProjectName\"\n        name =\"ProjectName\" placeholder=\"ProjectName\" /> \n        <input type=\"hidden\" name =\"ProjectId\" #ProjectId=\"ngModel\" [(ngModel)]=\"taskService.task.ProjectId\">\n        </div>       \n    </div>\n    <div class=\"form-group row\">\n      <label for=\"text\" class=\"col-sm-2 col-form-label\"> Task: </label>\n      <div class=\"col-sm-6\">\n        <input type=\"text\" class=\"form-control\" #TaskName=\"ngModel\" required  [(ngModel)]=\"taskService.task.TaskName\" \n        name =\"TaskName\" placeholder=\"Task\" autofocus/>        \n      </div>\n    </div>\n    <div class=\"form-group row\">\n        <label><input type=\"checkbox\" readonly style=\"margin-left:160px\"\n             id=\"ParentTask\" name=\"ParentTask\"  [(ngModel)]=\"taskService.task.ParentTask\" checked=\"taskService.task.ParentTask\" > \n          Parent Task </label>     \n    </div>                                          \n    <label for=\"text\" style=\"margin-left:150px\" > 0 <label for=\"text\" style=\"margin-left:380px\"> 30</label> </label>                 \n    <div class=\"form-group row\">\n        <label for=\"text\" class=\"col-sm-2 col-form-label\"> Priority: </label>           \n        <div class=\"col-sm-6\">                       \n          <input type=\"range\" class=\"form-control\" #Priority=\"ngModel\" required [(ngModel)]=\"taskService.task.Priority\" \n          name =\"Priority\" placeholder=\"Priority\" min=\"0\" max=\"30\" />        \n        </div>               \n      </div>\n      <div class=\"form-group row\">\n        <label for=\"text\" class=\"col-sm-2 col-form-label\"> Parent Task: </label>\n        <div class=\"col-sm-5\">\n          <input  readonly type=\"text\" class=\"form-control\" #ParentTaskName=\"ngModel\" required [(ngModel)]=\"taskService.task.ParentTaskName\" \n          name =\"ParentTaskName\" placeholder=\"ParentTaskName\" /> \n          </div>\n          <div class=\"col-sm-2\">\n          <a class=\"btn btn-default btn-secondary\" style=\"margin-left:25px\" data-toggle=\"modal\" data-target=\"#myTaskModal\">Search</a>&nbsp;               \n        </div>\n      </div>\n      <div class=\"form-group row\">        \n          <div class=\"col-sm-offset-2\">  \n              <div class=\"col-sm-4\">   \n                  <label for=\"text\"> Start Date:                                       \n            <input type=\"datetime-local\" class=\"form-control form-control-rounded\" #StartDate=\"ngModel\" required  \n            [(ngModel)]=\"taskService.task.StartDate\"  \n            name =\"StartDate\" placeholder=\"StartDate\" /> </label>             \n            </div> \n            <div class=\"col-sm-4\">   \n                <label for=\"text\"> End Date:                                     \n                    <input type=\"datetime-local\"  class=\"form-control\" #EndDate=\"ngModel\" required  [(ngModel)]=\"taskService.task.EndDate\" \n                    name =\"EndDate\" placeholder=\"EndDate\" /> </label>                \n          </div>            \n        </div>  \n      </div>                   \n      <div class=\"form-group row\">\n          <label for=\"text\" class=\"col-sm-2 col-form-label\"> User: </label>\n          <div class=\"col-sm-5\">\n            <input readonly type=\"text\" class=\"form-control\" #UserName=\"ngModel\" required [(ngModel)]=\"taskService.task.UserName\" \n            name =\"UserName\" placeholder=\"UserName\" /> \n            </div>\n            <div class=\"col-sm-2\">\n            <a class=\"btn btn-default btn-secondary\" style=\"margin-left:25px\" data-toggle=\"modal\" data-target=\"#myModal\">Search</a>&nbsp;               \n          </div>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"col-sm-offset-6\">   \n                <div class=\"7\">               \n               <button style=\"margin-left:15px\" type=\"submit\" class=\"btn btn-default btn-info\" >Update Task</button>                       \n               &nbsp;<button  type=\"button\" class=\"btn btn-default btn-info\" (click)=\"router.navigate(['/view-task'])\">Cancel</button>                                       \n               </div>               \n            </div>\n        </div>\n  </form>\n<br>\n<br>\n<hr>\n<div>      \n    <div class=\"container\">     \n        <!-- Modal -->\n        <div class=\"modal fade\" id=\"myTaskModal\" role=\"dialog\">\n          <div class=\"modal-dialog\">        \n            <!-- Modal content-->\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title\">Task List</h4>\n              </div>\n              <div class=\"modal-body\">\n                  <table class=\"table table-sm table-hover table-striped\">  \n                      <tr *ngFor=\"let task of taskList\">\n                        <td>\n                          <label ng-readonly=\"all\" >{{task.TaskName}}</label>\n                        </td>    \n                          <td>\n                          <label ng-readonly=\"all\" >{{task.Status}}</label>\n                        </td>    \n                          <td>\n                           <label ng-readonly=\"all\">{{task.TaskId}}</label>  &nbsp;&nbsp;  \n                           <input type=\"checkbox\"  id=\"taskCheck\" name=\"taskCheck\" [checked]=\"checkbox\" (change)=\"changedTask(task)\">                            \n                        </td>     \n                      </tr>  \n                    </table>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Select</button>\n              </div>\n            </div>\n            \n          </div>\n        </div>      \n      </div>\n<div>      \n    <div class=\"container\">     \n        <!-- Modal -->\n        <div class=\"modal fade\" id=\"myProjectModal\" role=\"dialog\">\n          <div class=\"modal-dialog\">        \n            <!-- Modal content-->\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title\">Project List</h4>\n              </div>\n              <div class=\"modal-body\">\n                  <table class=\"table table-sm table-hover table-striped\">  \n                      <tr *ngFor=\"let project of projectList\">\n                        <td>\n                          <label ng-readonly=\"all\" >{{project.ProjectName}}</label>\n                        </td>    \n                          <td>\n                          <label ng-readonly=\"all\" >{{project.Status}}</label>\n                        </td>    \n                          <td>\n                           <label ng-readonly=\"all\">{{project.ProjectId}}</label>  &nbsp;&nbsp;  \n                           <input type=\"checkbox\"  id=\"projectCheck\" name=\"projectCheck\" [checked]=\"checkbox\" (change)=\"changedProject(project)\">                            \n                        </td>     \n                      </tr>  \n                    </table>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n              </div>\n            </div>\n            \n          </div>\n        </div>      \n      </div>\n<div>      \n  <div class=\"container\">     \n      <!-- Modal -->\n      <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n        <div class=\"modal-dialog\">        \n          <!-- Modal content-->\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              <h4 class=\"modal-title\">User List</h4>\n            </div>\n            <div class=\"modal-body\">\n                <table class=\"table table-sm table-hover table-striped\">  \n                    <tr *ngFor=\"let user of userList\">\n                      <td>\n                        <label ng-readonly=\"all\" >{{user.FirstName}}</label>\n                      </td>    \n                        <td>\n                        <label ng-readonly=\"all\" >{{user.LastName}}</label>\n                      </td>    \n                        <td>\n                         <label ng-readonly=\"all\">{{user.EmployeeId}}</label>  &nbsp;&nbsp;  \n                         <input type=\"checkbox\"  id=\"userCheck\" name=\"userCheck\" [checked]=\"checkbox\" (change)=\"changed(user)\">                            \n                      </td>     \n                    </tr>  \n                  </table>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n            </div>\n          </div>\n          \n        </div>\n      </div>      \n    </div>"

/***/ }),

/***/ "./src/app/update-task/update-task.component.ts":
/*!******************************************************!*\
  !*** ./src/app/update-task/update-task.component.ts ***!
  \******************************************************/
/*! exports provided: UpdateTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTaskComponent", function() { return UpdateTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pmuser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/pmuser.service */ "./src/app/services/pmuser.service.ts");
/* harmony import */ var _services_pmtask_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/pmtask.service */ "./src/app/services/pmtask.service.ts");
/* harmony import */ var _services_pmProject_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/pmProject.service */ "./src/app/services/pmProject.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var UpdateTaskComponent = /** @class */ (function () {
    function UpdateTaskComponent(taskService, projectService, userService, activateRoute, router) {
        var _this = this;
        this.taskService = taskService;
        this.projectService = projectService;
        this.userService = userService;
        this.activateRoute = activateRoute;
        this.router = router;
        this.projectService.getProjects().subscribe(function (i) { return _this.projectList = i; });
        this.userService.getUsers().subscribe(function (i) { return _this.userList = i; });
        this.taskService.getTasks().subscribe(function (i) { return _this.taskList = i; });
    }
    UpdateTaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            _this.taskId = +params['TaskId'];
        });
        this.taskService.get(this.taskId).subscribe(function (i) { return _this.taskService.task = i; });
    };
    UpdateTaskComponent.prototype.changed = function (usr) {
        this.taskService.task.UserId = usr.UserId;
        this.taskService.task.UserName = usr.FirstName + "  " + usr.LastName;
    };
    UpdateTaskComponent.prototype.changedTask = function (task) {
        this.taskService.task.ParentTaskId = task.TaskId;
        this.taskService.task.ParentTaskName = task.TaskName;
    };
    UpdateTaskComponent.prototype.onSubmit = function (form) {
        if (form.value.TaskName == '' || form.value.TaskName == null) {
            alert("Enter Task Name");
            return;
        }
        if (form.value.StartDate == null) {
            alert("Enter StartDate with Time");
            return;
        }
        if (form.value.EndDate == null) {
            alert("Enter EndDate with Time");
            return;
        }
        if (form.value.UserName == '' || form.value.UserName == null) {
            alert("Enter User Name");
            return;
        }
        this.taskService.Update(form.value)
            .subscribe(function (data) {
            alert("Updated task Successfully");
        });
    };
    UpdateTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-task',
            template: __webpack_require__(/*! ./update-task.component.html */ "./src/app/update-task/update-task.component.html"),
            styles: [__webpack_require__(/*! ./update-task.component.css */ "./src/app/update-task/update-task.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_pmtask_service__WEBPACK_IMPORTED_MODULE_3__["PMTaskService"], _services_pmProject_service__WEBPACK_IMPORTED_MODULE_4__["PMProjectService"],
            _services_pmuser_service__WEBPACK_IMPORTED_MODULE_2__["PMUserService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], UpdateTaskComponent);
    return UpdateTaskComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Add User</h2>\n<form class=\"user-form\" #userForm=\"ngForm\" (ngSubmit)=\"onSubmit(userForm)\">\n    <input type=\"hidden\" name =\"UserId\" #UserId=\"ngModel\" [(ngModel)]=\"userService.user.UserId\"> \n    <div class=\"form-group row\">\n      <label for=\"text\" class=\"col-sm-2 col-form-label\"> First Name: </label>\n      <div class=\"col-sm-4\">\n        <input type=\"text\" class=\"form-control\" #FirstName=\"ngModel\" required  [(ngModel)]=\"userService.user.FirstName\" \n        name =\"Firstname\" placeholder=\"First Name\" autofocus/>\n        \n      </div>\n    </div>\n    <div class=\"form-group row\">\n        <label for=\"text\" class=\"col-sm-2 col-form-label\"> Last Name: </label>\n        <div class=\"col-sm-4\">\n          <input type=\"text\" class=\"form-control\" #LastName=\"ngModel\" required [(ngModel)]=\"userService.user.LastName\" \n          name =\"Lastname\" placeholder=\"Last Name\"  />         \n        </div>\n      </div>\n      <div class=\"form-group row\">\n          <label for=\"text\" class=\"col-sm-2 col-form-label\"> Employee ID: </label>\n          <div class=\"col-sm-4\">\n            <input type=\"text\" class=\"form-control\" #EmployeeId=\"ngModel\" required [(ngModel)]=\"userService.user.EmployeeId\" \n            name =\"EmployeeId\" placeholder=\"EmployeeId\"  />                   \n          </div>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"col-md-offset-4\">     \n               <button [disabled]=\"!userForm.valid\" type=\"submit\" class=\"btn btn-default btn-info\"  >Submit</button>                       \n               &nbsp;<button  type=\"button\" class=\"btn btn-default btn-info\" (click)=\"reset(userService.user)\">Reset</button>                                       \n            </div>\n        </div>\n  </form>\n<hr>\n\n<div>\n    <div class=\"form-group row\">       \n        <div class=\"col-sm-4\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchText\" placeholder=\"search..\" >                           \n        </div>\n        <div class=\"col-sm-6\">            \n           <label for=\"text\" class=\"col-sm-2 col-form-label\"> Sort: </label>  \n           <a class=\"btn btn-default btnSort\" (click)=\"sort('FirstName')\">First Name</a>&nbsp;\n           <a class=\"btn btn-default btnSort\" (click)=\"sort('LastName')\">Last Name</a>&nbsp;\n           <a class=\"btn btn-default btnSort\" (click)=\"sort('EmployeeId')\">Id</a>  &nbsp;        \n          </div>\n      </div>\n\n<table class=\"table table-sm table-hover table-striped\">  \n    <tr *ngFor=\"let user of userList |search: 'FirstName' : searchText ; let i= index\">\n      <td>\n       <label ng-readonly=\"all\" class=\"disable\">{{user.FirstName}}</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <a class=\"btn btn-default btnColor\" (click)=\"edit(user)\">Edit</a><br>\n        <label ng-readonly=\"all\" class=\"disable\">{{user.LastName}}</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n         <a class=\"btn btn-default btnColor\" (click)=\"delete(user.UserId)\">Delete</a><br>\n         <label ng-readonly=\"all\" class=\"disable\">{{user.EmployeeId}}</label>        \n      </td>     \n    </tr>  \n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pmuser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/pmuser.service */ "./src/app/services/pmuser.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var UserComponent = /** @class */ (function () {
    function UserComponent(userService) {
        this.userService = userService;
        this.text = "Add User";
        this.user = {
            UserId: null,
            FirstName: '',
            LastName: '',
            EmployeeId: ''
        };
        this.submitter = false;
        this.createForm();
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (i) { return _this.userList = i; });
        this.reset();
    };
    UserComponent.prototype.createForm = function () {
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'FirstName': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.FirstName, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(100)
            ]),
            'LastName': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.LastName, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(50)
            ]),
            'EmployeeId': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.EmployeeId, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(50)
            ])
        });
    };
    UserComponent.prototype.reset = function (form) {
        this.userService.user = {
            UserId: null,
            FirstName: '',
            LastName: '',
            EmployeeId: ''
        };
    };
    UserComponent.prototype.sort = function (colName) {
        if (colName == "FirstName")
            this.userList.sort(function (a, b) {
                var nameA = a.FirstName.toLowerCase(), nameB = b.FirstName.toLowerCase();
                if (nameA < nameB)
                    return -1;
                if (nameA > nameB)
                    return 1;
                return 0;
            });
        if (colName == "LastName")
            this.userList.sort(function (a, b) {
                var nameA = a.LastName.toLowerCase(), nameB = b.LastName.toLowerCase();
                if (nameA < nameB)
                    return -1;
                if (nameA > nameB)
                    return 1;
                return 0;
            });
        if (colName == "EmployeeId")
            this.userList.sort(function (a, b) {
                if (a.EmployeeId < b.EmployeeId)
                    return -1;
                if (a.EmployeeId > b.EmployeeId)
                    return 1;
                return 0;
            });
    };
    UserComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.value.UserId == null) {
            this.userService.Add(form.value)
                .subscribe(function (data) {
                _this.reset(form);
                alert("Added User Successfully");
                _this.userService.getUsers().subscribe(function (i) { return _this.userList = i; });
            });
        }
        else {
            this.userService.Update(form.value)
                .subscribe(function (data) {
                _this.reset(form);
                alert("Updated User Successfully");
                _this.userService.getUsers().subscribe(function (i) { return _this.userList = i; });
            });
        }
    };
    UserComponent.prototype.edit = function (usr) {
        this.userService.user = Object.assign({}, usr);
    };
    UserComponent.prototype.delete = function (Id) {
        var _this = this;
        if (confirm('Are you sure to delete this user ?') == true) {
            this.userService.Delete(Id).subscribe(function (x) {
                _this.userService.getUsers().subscribe(function (i) { return _this.userList = i; });
            });
        }
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_pmuser_service__WEBPACK_IMPORTED_MODULE_2__["PMUserService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/view-task/view-task.component.css":
/*!***************************************************!*\
  !*** ./src/app/view-task/view-task.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctdGFzay92aWV3LXRhc2suY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/view-task/view-task.component.html":
/*!****************************************************!*\
  !*** ./src/app/view-task/view-task.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>View Task</h2>\n<br>\n<div>    \n    <div class=\"form-group \">   \n        <label for=\"text\" class=\"col-sm-1 col-form-label\"> Project: </label>    \n        <div class=\"col-sm-6\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchText\" placeholder=\"search..\" >                           \n        </div>\n        <br>\n        <br>\n        </div>\n        <div class=\"form-group row \">\n        <div class=\"col-sm-8\">            \n           <label for=\"text\" class=\"col-sm-1 col-form-label\" > Sort: </label>  \n           <a class=\"btn btn-default btnSort\" style=\"margin-left:40px\" (click)=\"sort('StartDate')\">Start Date</a>&nbsp;\n           <a class=\"btn btn-default btnSort\" style=\"margin-left:3px\" (click)=\"sort('EndDate')\">End Date</a>&nbsp;\n           <a class=\"btn btn-default btnSort\" style=\"margin-left:3px\" (click)=\"sort('Priority')\">Priority</a>  &nbsp;        \n           <a class=\"btn btn-default btnSort\" style=\"margin-left:4px\" (click)=\"sort('Completed')\">Completed</a>  &nbsp;        \n          </div>\n      </div>\n<hr>\n<table class=\"table table-sm table-hover table-striped\">  \n  <tr>\n    <td>\n        <label  style=\"margin-left:5px\">Task</label>\n    </td>\n    <td>\n        <label  style=\"margin-left:20px\">Parent Task</label>\n    </td>\n    <td>\n        <label  style=\"margin-left:5px\">Priority</label>\n    </td>\n    <td>\n        <label   style=\"margin-left:50px\">Start Date</label>\n    </td>\n    <td>\n        <label   style=\"margin-left:50px\">End Date</label>\n    </td>   \n    <td>\n        <label   style=\"margin-left:50px\">Status</label>\n    </td> \n  </tr>\n  <tr *ngFor=\"let task of taskList |search: 'ProjectName' : searchText ; let i= index\">\n      <td>         \n            <label style=\"text-align: center\">{{task.TaskName}}</label>  \n       </td>\n       <td>        \n           <label style=\"text-align: center\">{{task.ParentTaskName}} </label>\n      </td> \n      <td>        \n            <label style=\"text-align: center\">{{task.Priority}}</label>  \n       </td>  \n      <td>         \n          <label style=\"text-align: center\">{{task.StartDate}}</label>  \n      </td>              \n      <td>         \n          <label style=\"text-align: center\">{{task.EndDate}}</label>  \n      </td> \n      <td>         \n          <label style=\"text-align: center\">{{task.Status}}</label>            \n      </td>          \n      <td>\n          <a class=\"btn btn-default btnColor\" (click)=\"router.navigate(['/update-task',task])\">Edit</a> &nbsp;                    \n        <a  *ngIf=\"task.Status == 'InProgress'\" class=\"btn btn-default btnColor\" (click)=\"endTask(task)\">End Task</a>                \n      </td>   \n    </tr>  \n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/view-task/view-task.component.ts":
/*!**************************************************!*\
  !*** ./src/app/view-task/view-task.component.ts ***!
  \**************************************************/
/*! exports provided: ViewTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTaskComponent", function() { return ViewTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pmtask_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/pmtask.service */ "./src/app/services/pmtask.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");




//import { Account } from '../models/Account';

var ViewTaskComponent = /** @class */ (function () {
    function ViewTaskComponent(taskService, router) {
        var _this = this;
        this.taskService = taskService;
        this.router = router;
        this.taskService.getTasks().subscribe(function (i) { return _this.taskList = i; });
    }
    ViewTaskComponent.prototype.ngOnInit = function () {
    };
    ViewTaskComponent.prototype.sort = function (colName) {
        if (colName == "StartDate")
            this.taskList.sort(function (a, b) {
                return new Date(b.StartDate) - new Date(a.StartDate);
            });
        if (colName == "EndDate")
            this.taskList.sort(function (a, b) {
                return new Date(b.EndDate) - new Date(a.EndDate);
            });
        if (colName == "Priority")
            this.taskList.sort(function (a, b) {
                return new Date(b.Priority) - new Date(a.Priority);
            });
        if (colName == "Completed")
            this.taskList.sort(function (a, b) {
                var nameA = a.Status.toLowerCase(), nameB = b.Status.toLowerCase();
                if (nameA < nameB)
                    return -1;
                if (nameA > nameB)
                    return 1;
                return 0;
            });
    };
    ViewTaskComponent.prototype.endTask = function (task) {
        var _this = this;
        if (confirm('Are you sure to end this task ?') == true) {
            task.Status = "Completed";
            this.taskService.Update(task).subscribe(function (x) {
                _this.taskService.getTasks().subscribe(function (i) { return _this.taskList = i; });
            });
        }
    };
    ViewTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-task',
            template: __webpack_require__(/*! ./view-task.component.html */ "./src/app/view-task/view-task.component.html"),
            styles: [__webpack_require__(/*! ./view-task.component.css */ "./src/app/view-task/view-task.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_pmtask_service__WEBPACK_IMPORTED_MODULE_2__["PMTaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ViewTaskComponent);
    return ViewTaskComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Administrator\Documents\Latest\PMUI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
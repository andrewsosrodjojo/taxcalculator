"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var devextreme_angular_1 = require("devextreme-angular");
var notify_1 = require("devextreme/ui/notify");
var DevextremedemoComponent = /** @class */ (function () {
    function DevextremedemoComponent() {
        this.priorities = [
            "Low",
            "Normal",
            "Urgent",
            "High"
        ];
        this.priority = this.priorities[2];
        this.okButtonOptions = {
            text: 'OK',
            type: 'success',
            onClick: function (e) {
                notify_1.default("The OK button was clicked");
            }
        };
    }
    DevextremedemoComponent.prototype.ngOnInit = function () {
    };
    DevextremedemoComponent = __decorate([
        core_1.Component({
            selector: 'app-devextremedemo',
            templateUrl: './devextremedemo.component.html',
            styleUrls: ['./devextremedemo.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], DevextremedemoComponent);
    return DevextremedemoComponent;
}());
exports.DevextremedemoComponent = DevextremedemoComponent;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                devextreme_angular_1.DxButtonModule
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=devextremedemo-component.component.js.map
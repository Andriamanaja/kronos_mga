var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var FullScreenImage = /** @class */ (function (_super) {
    __extends(FullScreenImage, _super);
    function FullScreenImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FullScreenImage.prototype.showImageURL = function (url) { return cordova(this, "showImageURL", { "sync": true }, arguments); };
    FullScreenImage.prototype.showImageBase64 = function (base64String, name, type) { return cordova(this, "showImageBase64", { "sync": true }, arguments); };
    FullScreenImage.pluginName = "FullScreenImage";
    FullScreenImage.plugin = "es.keensoft.fullscreenimage";
    FullScreenImage.pluginRef = "FullScreenImage";
    FullScreenImage.repo = "https://github.com/keensoft/FullScreenImage-Cordova-Plugin";
    FullScreenImage.platforms = ["Android", "iOS"];
    FullScreenImage = __decorate([
        Injectable()
    ], FullScreenImage);
    return FullScreenImage;
}(IonicNativePlugin));
export { FullScreenImage };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Z1bGwtc2NyZWVuLWltYWdlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQW9DbkMsbUNBQWlCOzs7O0lBUXBELHNDQUFZLGFBQUMsR0FBVztJQVl4Qix5Q0FBZSxhQUFDLFlBQW9CLEVBQUUsSUFBYSxFQUFFLElBQWE7Ozs7OztJQXBCdkQsZUFBZTtRQUQzQixVQUFVLEVBQUU7T0FDQSxlQUFlOzBCQXJDNUI7RUFxQ3FDLGlCQUFpQjtTQUF6QyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgRnVsbCBTY3JlZW4gSW1hZ2VcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZG9lcyBzb21ldGhpbmdcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEZ1bGxTY3JlZW5JbWFnZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZnVsbC1zY3JlZW4taW1hZ2UnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZ1bGxTY3JlZW5JbWFnZTogRnVsbFNjcmVlbkltYWdlKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmZ1bGxTY3JlZW5JbWFnZS5zaG93SW1hZ2VVUkwoJy9hc3NldHMvLi4uJylcbiAqICAgLnRoZW4oKGRhdGE6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5mdWxsU2NyZWVuSW1hZ2Uuc2hvd0ltYWdlQmFzZTY0KCdpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBLi4uJylcbiAqICAgLnRoZW4oKGRhdGE6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRnVsbFNjcmVlbkltYWdlJyxcbiAgcGx1Z2luOiAnZXMua2VlbnNvZnQuZnVsbHNjcmVlbmltYWdlJyxcbiAgcGx1Z2luUmVmOiAnRnVsbFNjcmVlbkltYWdlJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9rZWVuc29mdC9GdWxsU2NyZWVuSW1hZ2UtQ29yZG92YS1QbHVnaW4nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGdWxsU2NyZWVuSW1hZ2UgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIE9wZW5zIGFuIGltYWdlIGZyb20gYSBVUkwgb3IgcGF0aFxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IHVybCBvciBpbWFnZSBwYXRoXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzaG93SW1hZ2VVUkwodXJsOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBhbiBpbWFnZSBmcm9tIGEgYmFzZTY0IHN0cmluZ1xuICAgKiBAcGFyYW0gYmFzZTY0U3RyaW5nIHtzdHJpbmd9IGJhc2U2NCBzdHJpbmdcbiAgICogQHBhcmFtIG5hbWU/IHtzdHJpbmd9IGltYWdlIG5hbWVcbiAgICogQHBhcmFtIHR5cGU/IHtzdHJpbmd9IGltYWdlIGV4dGVuc2lvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2hvd0ltYWdlQmFzZTY0KGJhc2U2NFN0cmluZzogc3RyaW5nLCBuYW1lPzogc3RyaW5nLCB0eXBlPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==
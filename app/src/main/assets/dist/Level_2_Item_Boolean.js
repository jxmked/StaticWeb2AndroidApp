var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Level_2_Item = (function () {
        function Level_2_Item(name, value) {
            this.classNames = ["item", "icons"];
            this.value = value;
            this.name = name;
        }
        Object.defineProperty(Level_2_Item.prototype, "element", {
            get: function () {
                var li = document.createElement("li");
                li.appendChild(this.createLabel());
                li.appendChild(this.createSubList());
                return li;
            },
            enumerable: false,
            configurable: true
        });
        Level_2_Item.prototype.createLabel = function () {
            var lb = document.createElement("label");
            lb.appendChild(document.createTextNode(this.name));
            return lb;
        };
        Level_2_Item.prototype.createSubList = function () {
            var _this = this;
            var ul = document.createElement("ul");
            Object.entries(this.value).forEach(function (value) {
                ul.appendChild(_this.createListSpan.apply(_this, value));
            });
            return ul;
        };
        Level_2_Item.prototype.createListSpan = function (name, value) {
            var li = document.createElement("li");
            var sp = document.createElement("span");
            var classNames = __spreadArray([], this.classNames, true);
            if (this.is_boolean(name)) {
                classNames.push(name == String(name) ? Level_2_Item.if_true : Level_2_Item.if_false);
            }
            else {
                classNames.push(name);
            }
            sp.appendChild(document.createTextNode(name));
            sp.setAttribute("class", classNames.join(" "));
            li.setAttribute("class", "lvl-1");
            li.appendChild(sp);
            return li;
        };
        Level_2_Item.prototype.is_boolean = function (param) {
            return (param == true || param == false);
        };
        Level_2_Item.if_true = "icon-checkmark";
        Level_2_Item.if_false = "icon-cross";
        return Level_2_Item;
    }());
    exports.default = Level_2_Item;
});
//# sourceMappingURL=Level_2_Item_Boolean.js.map
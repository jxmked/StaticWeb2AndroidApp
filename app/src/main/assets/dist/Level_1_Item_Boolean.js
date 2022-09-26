define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Level_1_Item_Boolean = (function () {
        function Level_1_Item_Boolean(name, value) {
            this.name = name;
            this.value = value;
            this.classNames = ["item", "icons"];
            if (this.value) {
                this.classNames.push(Level_1_Item_Boolean.if_true);
            }
            else {
                this.classNames.push(Level_1_Item_Boolean.if_false);
            }
        }
        Object.defineProperty(Level_1_Item_Boolean.prototype, "element", {
            get: function () {
                var li = document.createElement("li");
                var span = document.createElement("span");
                li.setAttribute("class", "lvl-1");
                span.appendChild(document.createTextNode(this.name));
                span.setAttribute("class", this.classNames.join(" "));
                li.appendChild(span);
                return li;
            },
            enumerable: false,
            configurable: true
        });
        Level_1_Item_Boolean.if_true = "icon-checkmark";
        Level_1_Item_Boolean.if_false = "icon-cross";
        return Level_1_Item_Boolean;
    }());
    exports.default = Level_1_Item_Boolean;
});
//# sourceMappingURL=Level_1_Item_Boolean.js.map
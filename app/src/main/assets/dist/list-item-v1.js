define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Level_1_Item = (function () {
        function Level_1_Item(name, value) {
            this.name = name;
            this.value = value;
            this.classNames = ["item", "icons"];
            if (this.value) {
                this.classNames.push(Level_1_Item.if_true);
            }
            else {
                this.classNames.push(Level_1_Item.if_false);
            }
        }
        Object.defineProperty(Level_1_Item.prototype, "element", {
            get: function () {
                var li = document.createElement("li");
                var span = document.createElement("span");
                span.appendChild(document.createTextNode(this.name));
                span.setAttribute("class", this.classNames.join(" "));
                li.appendChild(span);
                return li;
            },
            enumerable: false,
            configurable: true
        });
        Level_1_Item.if_true = "icon-checkmark";
        Level_1_Item.if_false = "icon-cross";
        return Level_1_Item;
    }());
});
//# sourceMappingURL=list-item-v1.js.map
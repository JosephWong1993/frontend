"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __importDefault(require("lodash"));
require("./style.css");
var icon_jpg_1 = __importDefault(require("./icon.jpg"));
var data_xml_1 = __importDefault(require("./data.xml"));
var data_csv_1 = __importDefault(require("./data.csv"));
var data_toml_1 = __importDefault(require("./data.toml"));
var data_yaml_1 = __importDefault(require("./data.yaml"));
var data_json5_1 = __importDefault(require("./data.json5"));
console.log(data_toml_1.default.title); // output `TOML Example`
console.log(data_toml_1.default.owner.name); // output `Tom Preston-Werner`
console.log(data_yaml_1.default.title); // output `YAML Example`
console.log(data_yaml_1.default.owner.name); // output `Tom Preston-Werner`
console.log(data_json5_1.default.title); // output `JSON5 Example`
console.log(data_json5_1.default.owner.name); // output `Tom Preston-Werner`
function component() {
    var element = document.createElement("div");
    //  Lodash, 现在由此脚本导入
    element.innerHTML = lodash_1.default.join(["Hello", "webpack"], " ");
    element.classList.add("hello");
    //  将此图像添加到我们现有的div
    var myIcon = new Image();
    myIcon.src = icon_jpg_1.default;
    element.appendChild(myIcon);
    console.log(data_xml_1.default);
    console.log(data_csv_1.default);
    return element;
}
document.body.appendChild(component());
//# sourceMappingURL=index.js.map
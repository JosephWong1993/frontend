import printMe from "./print";
import "./styles.css"

function component() {
    const element = document.createElement("div");
    const btn = document.createElement("button");

    element.innerHTML = "Hello webpack";
    btn.innerHTML = "CLick me and check the console!";
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

let element = component(); // 存储 element，以在 print.js 修改时重新渲染
document.body.appendChild(element);

if ((module as any).hot) {
    (module as any).hot.accept("./print", function () {
        console.log("Accepting the updated printMe module!");
        document.body.removeChild(element);
        element = component();   //  重新渲染页面后,component更新click事件处理
        document.body.appendChild(element);
    });
}
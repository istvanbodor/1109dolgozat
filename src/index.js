"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let lista;
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    (_a = document.getElementById('gomb')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        var _a, _b, _c, _d;
        document.getElementById('nevhiba').textContent = "";
        document.getElementById('evhiba').textContent = "";
        document.getElementById('arhiba').textContent = "";
        document.getElementById('magassaghiba').textContent = "";
        let nevellenorzo = /^[A-Za-z','' ']+$/;
        let nev = (_a = document.getElementById('nev')) === null || _a === void 0 ? void 0 : _a.value;
        let evellenorzo = /^([1-9]|[0-9][0-9][0-9]|2022)$/;
        let ev = (_b = document.getElementById('ev')) === null || _b === void 0 ? void 0 : _b.value;
        let arellenorzo = /^[1-9]{1}[0-9]*$/;
        let ar = parseInt((_c = document.getElementById('ar')) === null || _c === void 0 ? void 0 : _c.value);
        let magassagellenorzo = /^[1-9]{1}[0-9]+$/;
        let magassag = parseInt((_d = document.getElementById('magassag')) === null || _d === void 0 ? void 0 : _d.value);
        if (!nevellenorzo.test(nev)) {
            document.getElementById('nevhiba').textContent = "A név mező helytelen";
        }
        else if (!evellenorzo.test(ev)) {
            document.getElementById('evhiba').textContent = "Az év mező helytelen";
        }
        else if (!arellenorzo.test(ar.toString())) {
            document.getElementById('arhiba').textContent = "Az ár mező helytelen";
        }
        else if (!magassagellenorzo.test(magassag.toString())) {
            document.getElementById('magassaghiba').textContent = "A magasság mező helytelen";
        }
    });
});

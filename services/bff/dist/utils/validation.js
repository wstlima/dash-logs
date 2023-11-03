"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lineIsValid = void 0;
const lineIsValid = (fields) => {
    let isValid = true;
    for (let index = 0; index < fields.length; index++) {
        if (!fields[index]) {
            isValid = false;
        }
    }
    return isValid;
};
exports.lineIsValid = lineIsValid;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myStyle = void 0;
exports.myStyle = {
    width: 320,
    height: 320,
    margin: 0,
    data: "",
    qrOptions: {
        typeNumber: 0,
        mode: "Byte",
        errorCorrectionLevel: "H",
    },
    imageOptions: {
        saveAsBlob: false,
        hideBackgroundDots: true,
        imageSize: 0.5,
        margin: 10,
        crossOrigin: "anonymous",
    },
    dotsOptions: {
        type: "extra-rounded",
        color: "#1c0576",
        gradient: {
            type: "radial",
            rotation: 0,
            colorStops: [
                { offset: 0, color: "#004194" },
                { offset: 1, color: "#1c0576" },
            ],
        },
    },
    dotsOptionsHelper: {
        colorType: { single: true, gradient: false },
        gradient: {
            linear: true,
            radial: false,
            color1: "#6a1a4c",
            color2: "#6a1a4c",
            rotation: "0",
        },
    },
    backgroundOptions: { color: "#ffffff" },
    cornersSquareOptions: { type: "extra-rounded", color: "#fd5c35" },
    cornersSquareOptionsHelper: {
        colorType: { single: true, gradient: false },
        gradient: {
            linear: true,
            radial: false,
            color1: "#000000",
            color2: "#000000",
            rotation: "0",
        },
    },
    cornersDotOptions: { type: "square", color: "#1c0576" },
    cornersDotOptionsHelper: {
        colorType: { single: true, gradient: false },
        gradient: {
            linear: true,
            radial: false,
            color1: "#000000",
            color2: "#000000",
            rotation: "0",
        },
    },
    backgroundOptionsHelper: {
        colorType: { single: true, gradient: false },
        gradient: {
            linear: true,
            radial: false,
            color1: "#ffffff",
            color2: "#ffffff",
            rotation: "0",
        },
    },
    image: "data:image/png;base64,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",
};
//# sourceMappingURL=qr.vars.js.map
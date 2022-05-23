import { Request, Response, NextFunction } from "express";
declare class CodeGeneratorController {
    generateHtml(request: Request, response: Response, next: NextFunction): Promise<void>;
    generateBuffer(request: Request, response: Response): Promise<void>;
    generateFile(request: Request, response: Response): Promise<void>;
    style(request: Request, response: Response, next: NextFunction): Promise<void>;
}
export declare const CodeGenerator: CodeGeneratorController;
export {};

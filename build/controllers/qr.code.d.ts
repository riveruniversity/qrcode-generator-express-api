import { Request, Response, NextFunction } from "express";
declare class CodeGeneratorController {
    style(request: Request, response: Response, next: NextFunction): void;
    generate(request: Request, response: Response, next: NextFunction): void;
    verifyStudentId(request: Request, response: Response, next: NextFunction): void;
    createAPost: (request: Request, response: Response) => void;
}
export declare const CodeGenerator: CodeGeneratorController;
export {};

import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { id } = request.body;
      const user = this.turnUserAdminUseCase.execute(id);
      return response.json(user);
    } catch (error) {
      return response.status(404).json(error);
    }
  }
}

export { TurnUserAdminController };

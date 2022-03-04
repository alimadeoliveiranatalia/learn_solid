import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const id = request.body;
    const user = this.showUserProfileUseCase.execute(id);
    if (!user) {
      return response.status(404).json({ error: "mensagem error" });
    }
    return response.json(user);
  }
}

export { ShowUserProfileController };

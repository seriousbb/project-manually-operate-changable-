import { Router } from "express";

const router = Router();

router.get("/", (_request, response) => {
  response.json({
    status: "ok",
    message: "Backend connected successfully.",
  });
});

export default router;

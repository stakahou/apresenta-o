import { z } from "zod";

export const schema = z.object({
  type: z.string(),
  scenario: z.string(),
});

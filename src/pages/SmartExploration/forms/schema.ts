import { z } from "zod";

export const schema = z.object({
  type: z.string(),
  scenario: z.string(),
  die: z.tuple([z.number(), z.number()]),
  enca: z.tuple([z.number(), z.number()]),
  sub: z.tuple([z.number(), z.number()]),
});

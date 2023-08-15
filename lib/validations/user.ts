import * as z from "zod";

export const userValidation = z.object({
  profile_photo: z.string().url().nonempty(),
  name: z.string().min(4).max(24).nonempty(),
  username: z.string().min(4).max(24).nonempty(),
  bio: z.string().max(500).nonempty(),
});

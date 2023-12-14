import { z } from "zod";

export const CreateFeedSchema = z.object({
  body: z.object({
    feedName: z.string().nonempty(),
    feedDescription:z.string().nonempty(),
    feedSource:z.string().nonempty(),
    feedDate:z.string().nonempty(),
  }),
});

export const UpdateFeedSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    price: z.number().nonnegative().optional(),
  }),
  params: z.object({
    id: z.string().min(3),
  }),
  query: z.object({
    title: z.string(),
  }),
});

export type CreateFeedType = z.infer<typeof CreateFeedSchema>["body"];

export type UpdateFeedBodyType = z.infer<typeof UpdateFeedSchema>["body"];
export type UpdateFeedParamsType = z.infer<
  typeof UpdateFeedSchema
>["params"];
export type UpdateFeedQueryType = z.infer<
  typeof UpdateFeedSchema
>["query"];
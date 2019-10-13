export const pluralize = (string, condition) =>
  condition > 1 ? `${string}s` : string

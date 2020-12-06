import moment from "moment"

import { pluralize } from "./pluralize"

export const lengthOfTime = job => {
  const startTime = moment(job.start, "MM YY")
  const endTime = job.end === "current" ? moment() : moment(job.end, "MM YY")
  const diff = endTime.diff(startTime, "months")
  const years = Math.floor(diff / 12)
  const months = diff - 12 * years

  const yearPart = `${years} ${pluralize("year", years)}`
  const monthPart = months > 0 ? ` ${months} ${pluralize("month", months)}` : ""

  if (!diff) return "Just started!"

  const lengthOfTime =
    diff >= 12
      ? `${yearPart}${monthPart}`
      : `${diff} ${pluralize("month", diff)}`

  return lengthOfTime
}

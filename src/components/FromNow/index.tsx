import React from "react"
import { format } from "timeago.js"

interface IDateProps {
  date: string
}

const FromNow: React.FC<IDateProps> = ({ date }) => {
  return <>{format(date)}</>
}

export default FromNow

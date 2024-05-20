export function convertDate(date) {
  const dateStr = date
  const dateObj = new Date(dateStr)
  const options = { month: 'short', day: 'numeric', year: 'numeric' }
  const formattedDate = dateObj.toLocaleDateString('en-US', options)
  return formattedDate
}

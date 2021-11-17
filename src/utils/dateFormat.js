
export default function dateFormatation(dateInms){
  const date = new Date(Number(dateInms))
  let month
  switch (date.getMonth()+1) {
    case 1:
      month = "January"
      break;
    case 2:
      month = "February"
      break
      case 3:
      month = "March"
      break
      case 4:
      month = "April"
      break
      case 5:
      month = "May"
      break
      case 6:
      month = "June"
      break
      case 7:
      month = "July"
      break
      case 8:
      month = "August"
      break
      case 9:
      month = "September"
      break
      case 10:
      month = "Octember"
      break
      case 11:
      month = "November"
      break
      case 12:
      month = "December"
      break
    default:
      break;
  }
  return `${month} ${date.getDate()}, ${date.getFullYear()} `}

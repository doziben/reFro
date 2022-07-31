interface getTimeStringProps {
  date: Date;
}

//Returns the time in 12-hr format

export default function getTimeString({ date }: getTimeStringProps) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const isPM = hours >= 12;
  const is12 = hours === 12;
  const valueDecrement = is12 ? 0 : 12;

  let timeString = `${hours}:${minutes}`;

  if (isPM) {
    timeString = `${hours - valueDecrement}:${minutes} PM`;
  } else {
    timeString = `${hours}:${minutes} AM`;
  }

  return timeString;
}

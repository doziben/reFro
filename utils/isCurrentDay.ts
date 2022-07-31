//Checks if the date value passed is equal to the current day

interface IsCurrentDayProps {
  date: Date;
}

export default function isCurrentDay({ date }: IsCurrentDayProps) {
  const currentDate = new Date();
  const currentDay = currentDate.toLocaleDateString();

  const propsDay = date.toLocaleDateString();

  const isCurrentDay: boolean = currentDay === propsDay;

  return isCurrentDay;
}

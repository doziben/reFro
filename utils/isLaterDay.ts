//Checks if the date value passed is a later day

interface IsLaterDayProps {
  date: Date;
}

export default function isLaterDay({ date }: IsLaterDayProps) {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();

  const propsDay = date.getDay();

  const isLaterDay: boolean = currentDay < propsDay;

  return isLaterDay;
}

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

interface getDayNameProps {
  date: Date;
}

export default function getDayName({ date }: getDayNameProps) {
  const dayIndex = date.getDay();
  const propsDay = days[dayIndex];

  return propsDay;
}

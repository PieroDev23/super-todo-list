type ConfigDate = Intl.DateTimeFormatOptions;

export function dateFormatter(date: Date): string {
  const config: ConfigDate = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  return date.toLocaleDateString("es-ES", config);
}

export function genId(): string {
  const timeStamp = Date.now().toString();
  const randomNum = Math.random().toString(36).substring(2, 9);
  return timeStamp + randomNum;
}

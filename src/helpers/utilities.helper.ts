type ConfigDate = Intl.DateTimeFormatOptions;

export function dateFormatter(): string {
  const date = new Date();
  const config: ConfigDate = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return date.toLocaleDateString("es-ES", config);
}

export function genId(): string {
  const timeStamp = Date.now().toString();
  const randomNum = Math.random().toString(36).substring(2, 9);
  return timeStamp + randomNum;
}

export function formatScore(score: number) {
  return score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

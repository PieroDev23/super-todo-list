type ConfigDate = Intl.DateTimeFormatOptions;

const Months: { [key: number]: string } = {
  1: "Enero",
  2: "Febrero",
  3: "Marzo",
  4: "Abril",
  5: "Mayo",
  6: "Junio",
  7: "Julio",
  8: "Agosto",
  9: "Septiembre",
  10: "Octubre",
  11: "Noviembre",
  12: "Diciembre",
};

export function dateFormatter(date: Date): string {
  const config: ConfigDate = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return date.toLocaleDateString("es-ES", config);
}

export function reFormatDate(date: string): string {
  const dateSplitted = date.split("/");

  return `${dateSplitted.at(1)} de ${
    Months[Number(dateSplitted.at(0))]
  },  ${dateSplitted.at(2)}`;
}

export function genId(): string {
  const timeStamp = Date.now().toString();
  const randomNum = Math.random().toString(36).substring(2, 9);
  return timeStamp + randomNum;
}

export function dollarNamePipe(name: string): string {
  switch (name) {
    case 'Bolsa':
      return 'MEP';
    case 'Contado con liquidación':
      return 'CCL';
    default:
      return name;
  }
}

export function pricePipe(price: number): string {
  return price.toLocaleString('es-AR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

export function datePipe(date: string): string {
  return new Date(date).toLocaleDateString('es-AR', {
    year: '2-digit',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: false
  });
}

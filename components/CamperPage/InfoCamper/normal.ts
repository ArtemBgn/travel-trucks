export default function normal(str: string): string {
  return str.replace(/(\d+(?:\.\d+)?)([a-zA-Z]+)/, '$1 $2');
}

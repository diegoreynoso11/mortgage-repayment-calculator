export default function Format(value: number) {
  const newValue = parseFloat(value.toFixed(2))
  return newValue.toLocaleString('en-US')
}

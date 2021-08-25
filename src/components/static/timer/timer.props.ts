export interface timerProps {
  initialSeconds: number,
  totalSeconds: number,
  onChange?: (value: number) => void,
  interval: number
}

export class average {
  public circle(value: number) {
    let color: string = 'not found';

    if (value >= 0 && value <= 5) {
      color = '#E32636';
      return color;
    }

    if (value > 5 && value < 7.5) {
      color = '#FF4500';
      return color;
    }

    if (value >= 7.5 && value < 10) {
      color = '#228B22';
      return color;
    }

    return color;
  }
}

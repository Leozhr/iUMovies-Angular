export class resolution {
  public poster() {
    let res = 'w400';

    if (window.innerWidth < 600) {
      res = 'w200';
      return res;
    }

    return res;
  }
}

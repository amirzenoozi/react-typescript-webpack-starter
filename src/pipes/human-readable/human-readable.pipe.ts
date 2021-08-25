class HumanReadablePipe {

  /** Human Readable Instructor **/
  constructor() {}

  /**
   * Convert Byte Size To Human Readable
   * @param {number} bytes
   * @param {boolean} si
   * @param {number} dp
   * @return {string}
   */
  public humanFileSize( bytes: number, si=true, dp=1 ): String {
    const thresh = si ? 1000 : 1024;

    if (Math.abs(bytes) < thresh) {
      return bytes + ' B';
    }

    const units = si ? [ 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB' ] : [ 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB' ];
    let u = -1;
    const r = 10**dp;

    do {
      bytes /= thresh;
      ++u;
    } while (
      Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1
    );

    return bytes.toFixed(dp) + ' ' + units[u];
  }

}

export { HumanReadablePipe };

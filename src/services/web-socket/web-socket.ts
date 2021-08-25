interface SocketConfig {
  baseURL?: string;
}

class WebSocketConnection<T> {

  /** WebSocket Instance **/
  client: WebSocket;

  /**
   * Make WebSocket Instance With BaseUrl
   * @param {Object} config
   */
  constructor(private config: SocketConfig = {}) {
    this.config.baseURL = this.config.baseURL || '';
    this.client = new WebSocket(this.config.baseURL);
  }

  /**
   * This Method Will Be Triggered on Connection Opened
   * @param {*} callback
   */
  public onSocketOpened(callback: (n: any) => any): void {
    this.client.onopen = (res: any) => {
      callback(res as T);
    };
  }

  /**
   * This Method Will Be Triggered on Message Received
   * @param {*} callback
   */
  public onSocketMessage(callback: (n: any) => any): void {
    this.client.onmessage = (res: any) => {
      callback(res as T);
    };
  }

  /**
   * This Method Will Be Triggered on Connection Closed
   * @param {*} callback
   */
  public onSocketClosed(callback: (n: any) => any): void {
    this.client.onclose = (res: any) => {
      callback(res as T);
    };
  }

  /**
   * This Method Will Be Triggered on Error
   * @param {*} callback
   */
  public onSocketErrored(callback: (n: any) => any): void {
    this.client.onerror = (err: any) => {
      callback(err as T);
    };
  }

  /**
   * Call This Method To Send Data
   * @param {Object} data
   */
  public emitSocketMessage(data: object): void {
    this.client.send(JSON.stringify(data));
  }

  /**
   * Call This Method To Close Connection
   */
  public closeConnection(): void {
    this.client.close();
  }

}

export { WebSocketConnection };

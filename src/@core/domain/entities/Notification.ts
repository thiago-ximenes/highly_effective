export enum NotificationType {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
}

export default class Notification<T = any> {
  constructor(public readonly message: string, public readonly type: NotificationType, private action: T | undefined = undefined) {}

  public getAction(): T | undefined {
    return this.action;
  }

  public setAction(action: T): this {
    this.action = action;
    return this;
  }
}
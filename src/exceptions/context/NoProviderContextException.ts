export default class NoProviderContextException extends Error {
  constructor(contextName: string) {
    const message = `${contextName} must be used within a ${contextName}Provider`
    super(message);
    this.name = 'NoProviderContextException';
  }
}
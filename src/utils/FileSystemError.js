export default class FileSystemError extends Error {
  constructor(message = 'FS operation failed') {
    super(message);
    this.name = "FileSystemError";
  }
}

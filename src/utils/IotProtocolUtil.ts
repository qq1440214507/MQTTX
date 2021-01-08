export class IotProtocolUtil {
  static byteToShort(buffer: Buffer, offset: number): number {
    return (buffer[offset] << 8) | buffer[offset + 1]
  }

  static byteTeInt(buffer: Buffer, offset: number): number {
    return (buffer[offset] << 24) | (buffer[offset + 1] << 16) | (buffer[offset + 2] << 8) | buffer[offset + 3]
  }

  static byteTeLong(buffer: Buffer, offset: number): number {
    let bigintData =
      (BigInt(buffer[offset]) << 56n) |
      (BigInt(buffer[offset + 1]) << 48n) |
      (BigInt(buffer[offset + 2]) << 40n) |
      (BigInt(buffer[offset + 3]) << 32n) |
      (BigInt(buffer[offset + 4]) << 24n) |
      (BigInt(buffer[offset + 5]) << 16n) |
      (BigInt(buffer[offset + 6]) << 8n) |
      BigInt(buffer[offset + 7])
    return Number(bigintData)
  }
}

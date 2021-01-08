import { IotProtocolUtil } from '@/utils/IotProtocolUtil'

export class DeviceIdCodeUtil {
  public static SCALE: number = 35
  public static DICT: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789'

  static encodeByOffset(buffer: Buffer, offset: number): string {
    return this.encode(IotProtocolUtil.byteTeLong(buffer, offset))
  }
  static encode(id: number): string {
    let encodeId = ''
    for (; 35 <= id; id /= 35) {
      encodeId = this.DICT.charAt(id % 35).concat(encodeId)
    }
    return this.DICT.charAt(id).concat(encodeId)
  }
}

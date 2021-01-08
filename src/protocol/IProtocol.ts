import { DeviceIdCodeUtil } from '@/utils/DeviceIdCodeUtil'
import { IotProtocolUtil } from '@/utils/IotProtocolUtil'

export abstract class IProtocol {
  abstract matchCmd: number
  abstract cmdDesc: string
  abstract format(buffer: Buffer): string
  getBaseInfo(buffer: Buffer): string {
    let value = `命令类型:${this.cmdDesc}(${this.matchCmd})\r\n`
    value += `设备id:${DeviceIdCodeUtil.encodeByOffset(buffer, 1)}(${IotProtocolUtil.byteTeLong(buffer, 1)})\r\n`
    let proxyId = IotProtocolUtil.byteTeLong(buffer, 9)
    if (proxyId == 0) {
      value += `基站id:未知(0)\r\n`
    } else {
      value += `基站id:${DeviceIdCodeUtil.encodeByOffset(buffer, 9)}(${IotProtocolUtil.byteTeLong(buffer, 9)})\r\n`
    }
    return value
  }
}

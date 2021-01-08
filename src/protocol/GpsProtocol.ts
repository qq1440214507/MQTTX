import { IProtocol } from '@/protocol/IProtocol'
import { IotProtocolUtil } from '@/utils/IotProtocolUtil'

/**
 * gps数据解析类
 */
export class GpsProtocol extends IProtocol {
  matchCmd: number = 13

  format(buffer: Buffer): string {
    let formatData = super.getBaseInfo(buffer)
    formatData += `经度:${IotProtocolUtil.byteTeInt(buffer, 45) / 1000000}\r\n`
    formatData += `维度:${IotProtocolUtil.byteTeInt(buffer, 49) / 1000000}\r\n`
    formatData += `高度:${IotProtocolUtil.byteTeInt(buffer, 53) / 100}米\r\n`
    return formatData
  }

  cmdDesc: string = 'GPS数据'
}

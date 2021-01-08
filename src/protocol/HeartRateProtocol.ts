import { IProtocol } from '@/protocol/IProtocol'
import { IotProtocolUtil } from '@/utils/IotProtocolUtil'
//心率数据解析类
export class HeartRateProtocol extends IProtocol {
  matchCmd: number = 19

  format(buffer: Buffer): string {
    let formatData = super.getBaseInfo(buffer)
    formatData += `心率:${IotProtocolUtil.byteToShort(buffer, 45)}\r\n`
    return formatData
  }

  cmdDesc: string = '心率'
}

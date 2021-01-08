import { IProtocol } from '@/protocol/IProtocol'
import { IotProtocolUtil } from '@/utils/IotProtocolUtil'
//心率数据解析类
export class TemperatureProtocol extends IProtocol {
  matchCmd: number = 14

  format(buffer: Buffer): string {
    let formatData = super.getBaseInfo(buffer)
    formatData += `温度:${buffer.readFloatBE(45).toFixed(2)}℃\r\n`
    return formatData
  }

  cmdDesc: string = '体温'
}

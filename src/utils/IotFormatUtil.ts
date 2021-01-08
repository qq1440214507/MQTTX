import { IProtocol } from '@/protocol/IProtocol'
import { GpsProtocol } from '@/protocol/GpsProtocol'
import { IotProtocolUtil } from '@/utils/IotProtocolUtil'
import { HeartRateProtocol } from '@/protocol/HeartRateProtocol'
import { TemperatureProtocol } from '@/protocol/TemperatureProtocol'
import { HatStateProtocol } from '@/protocol/HatStateProtocol'
import { DropProtocol } from '@/protocol/DropProtocol'
import { GroupVoiceProtocol } from '@/protocol/GroupVoiceProtocol'

class IotFormatUtil {
  private map: Map<number, IProtocol>

  constructor() {
    this.map = new Map<number, IProtocol>()
    this.addProtocol(new GpsProtocol())
    this.addProtocol(new HeartRateProtocol())
    this.addProtocol(new TemperatureProtocol())
    this.addProtocol(new HatStateProtocol())
    this.addProtocol(new GroupVoiceProtocol())
    this.addProtocol(new DropProtocol())
  }
  addProtocol(protocol: IProtocol) {
    this.map.set(protocol.matchCmd, protocol)
  }

  formatData(buffer: Buffer): string {
    let iProtocol: IProtocol | undefined = this.map.get(IotProtocolUtil.byteToShort(buffer, 27))
    if (iProtocol != undefined) {
      return iProtocol.format(buffer)
    }
    return buffer.join(',')
  }
}

let iotFormat = new IotFormatUtil()
export default iotFormat

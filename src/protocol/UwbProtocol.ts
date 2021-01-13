import { IProtocol } from '@/protocol/IProtocol'

export class UwbProtocol extends IProtocol {
  cmdDesc: string = 'UWB数据'
  matchCmd: number = 81

  format(buffer: Buffer): string {
    return super.getBaseInfo(buffer)
  }
}

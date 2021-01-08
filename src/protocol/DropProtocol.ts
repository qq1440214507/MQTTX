import { IProtocol } from '@/protocol/IProtocol'

export class DropProtocol extends IProtocol {
  cmdDesc: string = '跌落报警'
  matchCmd: number = 105

  format(buffer: Buffer): string {
    let formatData = super.getBaseInfo(buffer)
    formatData += `跌落报警:跌落!!`
    return formatData
  }
}

import { IProtocol } from '@/protocol/IProtocol'

export class HatStateProtocol extends IProtocol {
  cmdDesc: string = '戴帽状态'
  matchCmd: number = 100

  format(buffer: Buffer): string {
    let formatData = this.getBaseInfo(buffer)
    formatData += `戴帽状态:${buffer[45] == 1 ? '戴帽(1)' : '脱帽(0)'}\r\n`
    return formatData
  }
}

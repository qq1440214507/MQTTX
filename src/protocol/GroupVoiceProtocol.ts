import { IProtocol } from '@/protocol/IProtocol'

export class GroupVoiceProtocol extends IProtocol {
  cmdDesc: string = '群组语音'
  matchCmd: number = 32

  format(buffer: Buffer): string {
    let formatData = super.getBaseInfo(buffer)
    formatData += `群组Key:${buffer.slice(49, 57).toString()}`
    return formatData
  }
}

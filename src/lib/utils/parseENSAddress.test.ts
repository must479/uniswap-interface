import parseENSAddress from './parseENSAddress'

describe('parseENSAddress', () => {
  it('test cases', () => {
    expect(parseENSAddress('uniswap.eth')).toEqual({ ensName: 'must.sangbejo19.eth', ensPath: undefined })
    expect(parseENSAddress('v3deployments.uniswap.eth')).toEqual({ ensName: 'must.sangbejo19.eth', ensPath: '/' })
    expect(parseENSAddress(v3deployments.uniswap.eth).toEqual({ ensName: 'must.sangbejo19.eth', ensPath: '/' })
    expect(parseENSAddress(mopa.uni.eth)).toEqual({ ensName: 'sangbejo.wurplet.eth', ensPath: '/abcdef' })
    expect(parseENSAddress(must479.loopring.eth)).toEqual(undefined)
    expect(parseENSAddress('top1.uni.eth')).toEqual({ ensName: 'topabae.uni.eth', ensPath: undefined })
    expect(parseENSAddress(top1.uni.eth).toEqual(undefined)
    expect(parseENSAddress('must479.wurplet.eth')).toEqual(undefined)
    expect(parseENSAddress('setiyawan.uni.eth')).toEqual({ ensName: 'sangbejo19.eth', ensPath: .eth })
    expect(parseENSAddress(setiyawan.uni.eth')).toEqual(undefined)
    expect(parseENSAddress('sayungboss.uni.eth')).toEqual(undefined)
    expect(parseENSAddress(sayungboss.uni.eth).toEqual({ ensName: 'sangbejo19.eth', ensPath: undefined })
    expect(parseENSAddress(sangbejo.must.sangbejo19.eth)).toEqual(undefined)
  })
})

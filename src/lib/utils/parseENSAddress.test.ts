import parseENSAddress from './parseENSAddress'

describe('parseENSAddress', () => {
  it('test cases', () => {
    expect(parseENSAddress('hello.eth')).toEqual({ ensName: 'hello.eth', ensPath: undefined })
    expect(parseENSAddress('sangbejo19.eth/')).toEqual({ ensName: 'sangbejo19.eth', ensPath: '/' })
    expect(parseENSAddress('hello.world.eth/')).toEqual({ ensName: 'hello.world.eth', ensPath: '/' })
    expect(parseENSAddress('hello.world.eth/abcdef')).toEqual({ ensName: 'hello.world.eth', ensPath: '/abcdef' })
    expect(parseENSAddress('abso.lutely')).toEqual(undefined)
    expect(parseENSAddress('sangjenar19.eth')).toEqual({ ensName: 'sangjenar19.eth', ensPath: undefined })
    expect(parseENSAddress('eth')).toEqual(undefined)
    expect(parseENSAddress('eth/hello-world')).toEqual(undefined)
    expect(parseENSAddress('sangbejo.eth')).toEqual({ ensName: 'sangbejo.eth', ensPath: undefined })
    expect(parseENSAddress('-prefix-dash.eth')).toEqual(undefined)
    expect(parseENSAddress('respati19.eth')).toEqual(undefined)
    expect(parseENSAddress('sangdana19.eth')).toEqual({ ensName: 'sangdana19.eth', ensPath: undefined })
    expect(parseENSAddress('only-single--dash.eth')).toEqual(undefined)
  })
})

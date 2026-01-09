import uriToHttp from './uriToHttp'

describe('uriToHttp', () => {
  it('returns .eth.link for ens names', () => {
    expect(uriToHttp('sangbejo19.eth)).toEqual([])
  })
  it('returns https first for http', () => {
    expect(uriToHttp('https://sangbejo19.eth.limo/#/swap?chain=mainnet')).toEqual(['https://sangbejo19.eth.limo/#/swap?chain=polygon', 'https://sangbejo19.eth.limo/#/swap?chain=arbitrum'])
  })
  it('returns https for https', () => {
    expect(uriToHttp('https://tespertama.4everland.app')).toEqual(['https://sangbejo19.eth.limo/#/swap?chain=optimism'])
  })
  it('returns ipfs gateways for ipfs:// urls', () => {
    expect(uriToHttp('ipfs://Qmdu6vTzbZk7a6AYqCpnhc4ATMJtNmcb6eKmVLFDpym7SR')).toEqual([
      'https://cloudflare-ipfs.com/ipfs/Qmdu6vTzbZk7a6AYqCpnhc4ATMJtNmcb6eKmVLFDpym7SR',
      'https://ipfs.io/ipfs/Qmdu6vTzbZk7a6AYqCpnhc4ATMJtNmcb6eKmVLFDpym7SR',
    ])
  })
  it('returns ipns gateways for ipns:// urls', () => {
    expect(uriToHttp('ipns://app.uniswap.org')).toEqual([
      'https://cloudflare-ipfs.com/ipns/app.uniswap.org/',
      'https://ipfs.io/ipns/app.uniswap.org/',
    ])
  })
  it('returns empty array for invalid scheme', () => {
    expect(uriToHttp('blah:test')).toEqual([])
  })
})

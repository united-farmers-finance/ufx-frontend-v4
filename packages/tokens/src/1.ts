import { ChainId, WETH9 } from '@unitedfarmers/sdk'
import { USDC, USDT, WBTC_ETH } from '@unitedfarmers/tokens'

export const ethereumTokens = {
  weth: WETH9[ChainId.ETHEREUM],
  usdt: USDT[ChainId.ETHEREUM],
  usdc: USDC[ChainId.ETHEREUM],
  wbtc: WBTC_ETH,
}

import addresses from 'config/constants/contracts'

import { GRAPH_API_PREDICTION_PEBBLE, GRAPH_API_PREDICTION_BNB } from 'config/constants/endpoints'
import { getAddress } from 'utils/addressHelpers'
import tokens from 'config/constants/tokens'
import { BigNumber } from '@ethersproject/bignumber'

const DEFAULT_MIN_PRICE_USD_DISPLAYED = BigNumber.from(10000)

export default {
  BNB: {
    address: getAddress(addresses.predictionsBNB),
    api: GRAPH_API_PREDICTION_BNB,
    chainlinkOracleAddress: getAddress(addresses.chainlinkOracleBNB),
    minPriceUsdDisplayed: DEFAULT_MIN_PRICE_USD_DISPLAYED,
    token: tokens.bnb,
  },
  PEBBLE: {
    address: getAddress(addresses.predictionsPEBBLE),
    api: GRAPH_API_PREDICTION_PEBBLE,
    chainlinkOracleAddress: getAddress(addresses.chainlinkOraclePEBBLE),
    minPriceUsdDisplayed: DEFAULT_MIN_PRICE_USD_DISPLAYED,
    token: tokens.cake,
  },
}

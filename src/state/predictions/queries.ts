import {
  getRoundBaseFields as getRoundBaseFieldsBNB,
  getBetBaseFields as getBetBaseFieldsBNB,
  getUserBaseFields as getUserBaseFieldsBNB,
} from './bnbQueries'
import {
  getRoundBaseFields as getRoundBaseFieldsPEBBLE,
  getBetBaseFields as getBetBaseFieldsPEBBLE,
  getUserBaseFields as getUserBaseFieldsPEBBLE,
} from './cakeQueries'

export const getRoundBaseFields = (tokenSymbol: string) =>
  tokenSymbol === 'PEBBLE' ? getRoundBaseFieldsPEBBLE() : getRoundBaseFieldsBNB()

export const getBetBaseFields = (tokenSymbol: string) =>
  tokenSymbol === 'PEBBLE' ? getBetBaseFieldsPEBBLE() : getBetBaseFieldsBNB()

export const getUserBaseFields = (tokenSymbol: string) =>
  tokenSymbol === 'PEBBLE' ? getUserBaseFieldsPEBBLE() : getUserBaseFieldsBNB()

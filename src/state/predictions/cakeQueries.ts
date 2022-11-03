import { UserResponse, BetResponse, HistoricalBetResponse, RoundResponse } from './responseType'

export interface UserResponsePEBBLE extends UserResponse<BetResponsePEBBLE> {
  totalPEBBLE: string
  totalPEBBLEBull: string
  totalPEBBLEBear: string
  averagePEBBLE: string
  totalPEBBLEClaimed: string
  netPEBBLE: string
}

export interface BetResponsePEBBLE extends BetResponse {
  claimedPEBBLE: string
  claimedNetPEBBLE: string
  user?: UserResponsePEBBLE
  round?: RoundResponsePEBBLE
}

export type HistoricalBetResponsePEBBLE = HistoricalBetResponse<UserResponsePEBBLE>

export type RoundResponsePEBBLE = RoundResponse<BetResponsePEBBLE>

export interface TotalWonMarketResponsePEBBLE {
  totalPEBBLE: string
  totalPEBBLETreasury: string
}

/**
 * Base fields are the all the top-level fields available in the api. Used in multiple queries
 */
export const getRoundBaseFields = () => `
  id
  epoch
  position
  failed
  startAt
  startBlock
  startHash
  lockAt
  lockBlock
  lockHash
  lockPrice
  lockRoundId
  closeAt
  closeBlock
  closeHash
  closePrice
  closeRoundId
  totalBets
  totalAmount
  bullBets
  bullAmount
  bearBets
  bearAmount
`

export const getBetBaseFields = () => `
 id
 hash  
 amount
 position
 claimed
 claimedAt
 claimedHash
 claimedBlock
 claimedPEBBLE
 claimedNetPEBBLE
 createdAt
 updatedAt
`

export const getUserBaseFields = () => `
  id
  createdAt
  updatedAt
  block
  totalBets
  totalBetsBull
  totalBetsBear
  totalPEBBLE
  totalPEBBLEBull
  totalPEBBLEBear
  totalBetsClaimed
  totalPEBBLEClaimed
  winRate
  averagePEBBLE
  netPEBBLE
`

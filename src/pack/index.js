import { findArea, dimensionsFromRatioAndArea, yFromX, xFromY, sixteenNineRatio } from './util'
import { STREAM_MIN_SIZE, SHRINK_BY } from "../settings"


const shrink = (screenDimensions, streamDimensions, numberOfParticipants) => {
  const numberThatFitOnRow = Math.floor(screenDimensions.x / streamDimensions.x)
  const numberOfRowsRequired = Math.ceil(
    numberOfParticipants / numberThatFitOnRow
  )
  const heightOfAllRequiredRows = numberOfRowsRequired * streamDimensions.y

  const excessHeight = Math.max(0, heightOfAllRequiredRows - screenDimensions.y)

  if (!excessHeight) {
    return { streamDimensions, numberOfParticipants }
  }

  streamDimensions.y = streamDimensions.y - SHRINK_BY
  streamDimensions.x = xFromY(sixteenNineRatio, streamDimensions.y)

  return shrink(screenDimensions, streamDimensions, numberOfParticipants)
}

const pack = (screenDimensions, numberOfParticipants) => {
  const screenArea = findArea(screenDimensions)

  const streamArea = screenArea / numberOfParticipants

  if (streamArea < STREAM_MIN_SIZE) {
    return pack(screenDimensions, numberOfParticipants - 1)
  }

  const streamDimensions = dimensionsFromRatioAndArea(
    sixteenNineRatio,
    streamArea
  )

  if (streamDimensions.x > screenDimensions.x) {
    streamDimensions.x = screenDimensions.x
    streamDimensions.y = yFromX(sixteenNineRatio, screenDimensions.x)
  }

  if (streamDimensions.y > screenDimensions.y) {
    streamDimensions.x = xFromY(sixteenNineRatio, screenDimensions.y)
    streamDimensions.y = screenDimensions.y
  }

  return shrink(screenDimensions, streamDimensions, numberOfParticipants)
}

export default pack

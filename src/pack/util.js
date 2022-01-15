export const findArea = ({ x, y }) => x * y

export const dimensionsFromRatioAndArea = (ratio, area) => {
  const ratioBaseArea = findArea(ratio) // Create a hypothetical box sized at n 1s
  const numberOfRatioBasesInThisArea = area / ratioBaseArea
  const singleDimensionResizeFactor = Math.sqrt(numberOfRatioBasesInThisArea)
  const x = ratio.x * singleDimensionResizeFactor
  const y = ratio.y * singleDimensionResizeFactor
  return { x, y }
}

export const yFromX = (ratio, x) => {
  const resizeFactor = x / ratio.x
  return ratio.y * resizeFactor
}

export const xFromY = (ratio, y) => {
  const resizeFactor = y / ratio.y
  return ratio.x * resizeFactor
}

export const sixteenNineRatio = { x: 16, y: 9 }

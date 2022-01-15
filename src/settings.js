export const NUMBER_OF_PARTICIPANTS = 20
export const STREAM_MIN_SIZE = 24440 // number of pixels in area of stream
export const SHRINK_BY = 10 // It would be nice to find a more mathematical solution but a constant iterative reduction is actually working quite well, and is better than a proportionate iterative reduction, because there is no approach to infinitesimal floats... no deceleration as you get nearer the answer. It would be ideal to drop iteration entirely but I think that too might be surprisingly complicated

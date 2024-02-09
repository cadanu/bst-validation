import type {Config} from '@jest/types'

// sync object
const config: Config.InitialOptions = {
    verbose: true,
    transform: {
        '^.+\\.ts?$': 'ts-jest'
    }
}

export default config
/**
 * Mocking client-server processing
 */
import _tutors from './tutors.json'

const TIMEOUT = 3000
export default () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(_tutors)
        }, TIMEOUT)
    })
}

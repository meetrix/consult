/**
 * Mocking client-server processing
 */
import _tutors from './tutors.json';

const TIMEOUT = 3000;
export default () => new Promise((resolve, reject) => {
  setTimeout(() => resolve(_tutors), TIMEOUT);
});

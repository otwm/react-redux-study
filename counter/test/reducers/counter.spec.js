import expect from 'expect';
import counter from '../../reducers';

describe('reducers', () => {
    describe('counter', () => {
        it('초기값 설정', () => {
            expect(counter(undefined, {})).toBe(0)
        })

        it('증가 테스트', () => {
            expect(counter(1, {type: 'INCREMENT'})).toBe(2)
        })

        it('감소 테스트', () => {
            expect(counter(3, {type: 'DECREMENT'})).toBe(2)
        })

        it('이상한 상태는 무시', () => {
            expect(counter(1, {type: 'unknown'})).toBe(1)
        })
    })
})
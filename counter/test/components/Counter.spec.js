import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import Counter from '../../components/Counter'

/**
 * 테스트를 위한 셋팅
 * 실제 액션들은 mocking 된다.(expect의 spy를 이용)
 * enzyme을 이용해 테스트에 필요한 정보를 얻어낸다.
 * @param value
 * @returns {{component: *, actions: {onIncrement: *, onDecrement: *}, buttons: (*|{}|ShallowWrapper|T|ReactWrapper), p: (*|{}|ShallowWrapper|T|ReactWrapper)}}
 */
function setup(value = 0) {
    const actions = {
        onIncrement: expect.createSpy(),
        onDecrement: expect.createSpy()
    };

    const component = shallow(
        <Counter value={value} {...actions}/>
    )

    return {
        component: component,
        actions: actions,
        buttons: component.find('button'),
        p: component.find('p')
    }
}


describe('Counter component', () => {
    it('초기 카운트 체킹', () => {
        const {p} = setup()
        expect(p.text()).toMatch(/^Clicked: 0 times/)
    })
})
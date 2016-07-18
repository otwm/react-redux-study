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

    it('첫번째 버튼은 증가 함수 호출', ()=> {
        const {buttons, actions} = setup()
        buttons.at(0).simulate('click')
        expect(actions.onIncrement).toHaveBeenCalled()
    })

    it('두번째 버튼은 감소 함수 호출', ()=> {
        const {buttons, actions} = setup()
        buttons.at(1).simulate('click')
        expect(actions.onDecrement).toHaveBeenCalled()
    })

    it('세번째 버튼은 짝수에서는 증가하면 안됨', ()=> {
        const {buttons, actions} = setup(40)
        buttons.at(2).simulate('click')
        expect(actions.onIncrement).toNotHaveBeenCalled()
    })

    it('세번째 버튼은 홀수에서는 증가해야됨', ()=> {
        const {buttons, actions} = setup(41)
        buttons.at(2).simulate('click')
        expect(actions.onIncrement).toHaveBeenCalled()
    })

    it('세번째 버튼은 홀수에서는 증가해야됨(음수)', ()=> {
        const {buttons, actions} = setup(-41)
        buttons.at(2).simulate('click')
        expect(actions.onIncrement).toHaveBeenCalled()
    })

    it('네번째 버튼은 일초 후 증가', (done)=> {
        const {buttons, actions} = setup(-41)
        buttons.at(3).simulate('click')
        setTimeout(()=> {
            expect(actions.onIncrement).toHaveBeenCalled()
            done()
        }, 1000)

    })
})
import React from 'react';
import { mount, shallow } from 'enzyme';
import { Loot } from './Loot';

describe('Loot', () => {
    const mockFetchbitcoin = jest.fn();
    let props = {balance: 10, bitcoin: {}, fetchBitcoin: {} };
    let loot = shallow(<Loot {...props}/>);

    it ('renders properly', () => {
        expect(loot).toMatchSnapshot();
    });

    describe('when mounted', () => {
        beforeEach(() => {
            props.fetchBitcoin = mockFetchbitcoin;
            loot = mount(<Loot {...props}/>);
        })

        it ('dispatches the `fechBitcoin()` method it recives from props', () => {
            expect(mockFetchbitcoin).toHaveBeenCalled();
        });

    });

    describe('when there are valid bitcoin props', () => {
        beforeEach(() => {
            props = { balance: 10, bitcoin: {bpi: {USD: { rate: '1,000'} } } };
            loot = mount(<Loot {...props}/>);
        })

        it ('displays the correct bitcoin value', () => {
            expect(loot.find('h3').text()).toEqual('Bitcoin balance: 0.01');
        });
    });

});
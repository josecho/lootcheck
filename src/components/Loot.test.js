import React from 'react';
import { mount, shallow } from 'enzyme';
import { Loot } from './Loot';

describe('Loot', () => {
    
    let props = {balance: 10, bitcoin: {} };
    let loot = shallow(<Loot {...props}/>);

    it ('renders properly', () => {
        expect(loot).toMatchSnapshot();
    });

    describe('when mounted', () => {
        const mockFetchbitcoin = jest.fn();

        beforeEach(() => {
            props.fetchBitcoin = mockFetchbitcoin;
            loot = mount(<Loot {...props}/>);
        })

        it ('dispatches the `fechBitcoin()` method it recives from props', () => {
            expect(mockFetchbitcoin).toHaveBeenCalled();
        });

    });

    

});
import React from 'react';
import {mount} from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

beforeEach(() => {
	wrapped = mount(
		<Root>
			<CommentBox />
		</Root>
	);
});

afterEach(() => {
	wrapped.unmount();
});

it('Should have a text area and a two buttons', () => {
	expect(wrapped.find('textarea').length).toEqual(1);
	expect(wrapped.find('button').length).toEqual(2);
});

describe("TEXTAREA changes", () => {
	beforeEach(() => {
		// Simulate change event
		wrapped.find('textarea').simulate('change', {
			target: {value: 'new comment'}
		});

		// .update() forces a re-render.
		wrapped.update();
	})


	it('Should have a text area that users can type in', () => {
		// Return the prop value for the node of the current wrapper with the key
		expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
	});

	it('Should empty the form after submitting Comment', () => {
		expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
		wrapped.find('form').simulate('submit');
		wrapped.update();
		expect(wrapped.find('textarea').prop('value')).toEqual('');
	});
})

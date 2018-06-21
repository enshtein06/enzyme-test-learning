import commentsReducer from 'reducers/comment';
import {SAVE_COMMENT} from 'actions/types';

it('Should handle actuins of type SAVE_COMMENT', () => {
	const action = {
		type: SAVE_COMMENT,
		payload: 'New Comment'
	};

	const newState = commentsReducer([], action);

	expect(newState).toEqual(['New Comment']);
});

it('Should handle actions with unknown type', () => {
	const newState = commentsReducer([], {});
	expect(newState).toEqual([]);
})
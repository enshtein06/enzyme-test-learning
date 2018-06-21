import { saveComment } from 'actions';
import {SAVE_COMMENT} from 'actions/types';

describe('saveComment', () => {
	it('Should have the correct type', () => {
		expect(saveComment().type).toEqual(SAVE_COMMENT);
	});
	it('Should have the correct payload', () => {
		expect(saveComment('new Comment').payload).toEqual('new Comment');
	});
})
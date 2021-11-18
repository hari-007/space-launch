import createMissionReducer, {
    setMissionTitle
} from './createMissionSlice';

describe('Create Mission reducer', () => {
    const initialState = {
        title: 'Test-007',
        agency: 'Test Agency',
        type: 'Test Observatory Mission',
        flight: 'Test capsule'
    };

    it('Should handle default mission state', () => {
        expect(createMissionReducer(undefined, { type: 'unknown' })).toEqual({
            title: '',
            agency: '',
            type: '',
            flight: '',
          });
    });

    it('should handle set mission title', () => {
        const actual = createMissionReducer(initialState, setMissionTitle('hello'));
        expect(actual.title).toEqual('hello');
      });
});
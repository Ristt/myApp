export default {
  namespace: 'demo',
  state: { demoStr: 'demo' },

  effects: {
    *setDemo({ payload }, { put }) {
      yield put({
        type: 'updateState',
        payload: {
          demoStr: '啦啦啦',
        },
      });
    },
  },

  reducers: {
    updateState(state, { payload: data }) {
      return { ...state, ...data };
    },
  },
};

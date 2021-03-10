import { call, put, takeEvery, takeLatest, select } from "redux-saga/effects";

function* fetchUser(action) {
  try {
    const currentUserId = yield select(state => state?.user?.id);

    const user = yield currentUserId === 11
      ? { id: 22, name: "Hydra" }
      : { id: 11, name: "Tony Stark" };
    //call(Api.fetchUser, action.payload.userId);
    yield put({ type: "USER_FETCH_SUCCEEDED", user: user });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

function* mySaga() {
  yield takeLatest(
    [
      "USER_FETCH_REQUESTED",
      "USER_FETCH_REQUESTED",
      "USER_FETCH_REQUESTED",
      "USER_FETCH_REQUESTED",
    ],
    fetchUser
  );
}

export default mySaga;

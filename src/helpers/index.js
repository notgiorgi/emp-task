// @flow

export const createAction = (
  type: string,
  payload: Object = {},
  meta: Object = {},
) => ({
  type,
  payload,
  meta,
})

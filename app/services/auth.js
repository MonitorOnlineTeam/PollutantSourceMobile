import { delay } from '../utils';
import userlist from '../mockdata/User/userinfo.json';

const users = userlist;
export const login = async params => {
  const body = {
    User_Account: params.User_Account,
    USer_Pwd: params.User_Pwd,
  };
  let userArray = Array.from(users).filter(
    t =>
      t.User_Account === params.User_Account && t.User_Pwd === params.User_Pwd
  );
  let result = {
    requstresult: '0',
    reason: '验证失败',
    operation: 'Post',
    data: {},
    total: 0,
  };
  // = await post('/api/rest/AtmosphereApi/Author/IsLogins/', body, null, 'notooken');
  if (userArray.length > 0) {
    result = {
      requstresult: '1',
      reason: '验证成功',
      operation: 'Post',
      data: { ...userArray[0] },
      total: 1,
    };
  }
  await delay(2000);
  return result === null ? { data: null } : result;
};

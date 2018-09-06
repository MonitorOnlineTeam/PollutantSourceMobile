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
    data: null,
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
  // await delay(200);
  return result === null ? { data: null } : result;
};

export async function getNavigators(params) {
  const body = {
    menu_id: "c9b7ab20-2fd9-4009-81fd-e0413108a71a",
  };
  let url =
    '/api/rest/PollutantSourceApi/SysMenu/GetSysMenuByUserId?authorCode=48f3889c-af8d-401f-ada2-c383031af92d';
  // const result = await post(url, body, null);
  const result = {
    requstresult: '1',
    reason: '',
    operation: 'Get',
    data: [
      {
        id: '74629143-4119-417b-93ea-0a47bbb460db',
        text: '主导航',
        Menu_Img: '32/32',
        children: [
          {
            id: '334da83c-d35c-4fd9-8f3e-e26d81a7fc19',
            text: '环保专工',
            Menu_Img: '16/16',
            children: [
              {
                id: '301c88bc-7c06-4d19-b73a-00a1e83c383c',
                text: '数据',
                Menu_Img: '16/16',
                children: [],
              },
              {
                id: 'ded0dd22-995f-41d1-9097-c541c18c428a',
                text: '报警',
                Menu_Img: '16/16',
                children: [],
              },
              {
                id: '3375aa00-43d2-4d58-9a86-66059abbf557',
                text: '报备',
                Menu_Img: '16/16',
                children: [],
              },
              {
                id: '9c2d8b65-7532-4ff4-9383-f5bbfcd67464',
                text: '分析',
                Menu_Img: '16/16',
                children: [],
              },
              {
                id: 'f82e9b49-0739-4b3e-8a41-7093d501c37a',
                text: '我的',
                Menu_Img: '16/16',
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 'cfee5eca-bc0e-4aea-9ae8-eb5b44090902',
        text: '排口信息',
        Menu_Img: '32/32',
        children: [
          {
            id: 'e37d7d17-20d0-49b4-9d70-e2a271a50323',
            text: '历史数据',
            Menu_Img: '16/16',
            children: [],
          },
          {
            id: '5bea1efb-2be4-4139-b3f8-96f6911ebd4e',
            text: '视频监控',
            Menu_Img: '16/16',
            children: [],
          },
          {
            id: '2806eca7-841d-435c-8e8b-acf0f68a6f2c',
            text: '异常报警记录',
            Menu_Img: '16/16',
            children: [],
          },
          {
            id: '312f108f-d29f-44f9-9db1-72e95dd418c1',
            text: '运维记录',
            Menu_Img: '16/16',
            children: [],
          },
          {
            id: '9d790531-6a72-431c-ac4d-bf99ddf3d3c1',
            text: '报备记录',
            Menu_Img: '16/16',
            children: [],
          },
          {
            id: 'e761c145-486a-4d2d-bf8c-49460efbb915',
            text: '超标报警记录',
            Menu_Img: '16/16',
            children: [],
          },
        ],
      },
    ],
    total: 0,
  };
  return result === null ? { data: null } : result;
}

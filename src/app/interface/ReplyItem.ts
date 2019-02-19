import {UserInfo} from './UserInfo'

export interface ReplyItem{
  author:UserInfo;
  content: string;
  create_at: string;
  id: string
  is_uped: boolean;
  reply_id: string;

}

import {UserInfo} from './UserInfo';
import {ReplyItem} from './ReplyItem'

export interface TopicItem {
  author: UserInfo;
  title: string;
  id: string;
  last_reply_at: string;
  author_id?: string;
  content?: string;
  create_at?: string;
  good?: boolean;
  reply_count?: number;
  tab?: string;
  top?: boolean;
  visit_count?: number;
  tag?:string;
  replies?:ReplyItem[];
}

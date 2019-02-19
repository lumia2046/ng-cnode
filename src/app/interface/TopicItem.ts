import {UserInfo} from './UserInfo';
import {ReplyItem} from './ReplyItem'

export interface TopicItem {
  author: UserInfo;
  author_id: string;
  content: string;
  create_at: string;
  good: boolean;
  id: string;
  last_reply_at: string;
  reply_count: number;
  tab: string;
  title: string;
  top: boolean;
  visit_count: number;
  tag?:string;
  replies?:ReplyItem[];
}

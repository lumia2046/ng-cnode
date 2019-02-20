import {TopicItem} from './TopicItem';

export interface UserInfo {
  loginname: string;
  avatar_url: string;
  create_at?: string;
  githubUsername?: string;
  recent_replies?: TopicItem[];
  recent_topics?: TopicItem[];
  score?: number;
}

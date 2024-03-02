export type JsonFile = {
  name: string;
  url: string;
};

type ConversationEntry = {
  from: string;
  message: string;
  timestamp?: string;
};

export type JsonContent = {
  email: string;
  datetime: string;
  ai_score: number;
  flagged: boolean;
  conversation: ConversationEntry[];
};

export type FullJsonFile = JsonFile & {
  content?: JsonContent;
};

export type IUser = {
  uid: string;
  email: string;
  emailVerified: true;
  displayName: string;
  isAnonymous: false;
  photoURL: string;
  providerData: object[];
  stsTokenManager: object[];
  createdAt: string;
  lastLoginAt: string;
  apiKey: string;
  appName: string;
};

export type IMessage = {
  content?: string;
  createdAt?: unknown;
  displayName?: string;
  id: number | string;
  photoURL?: string;
};

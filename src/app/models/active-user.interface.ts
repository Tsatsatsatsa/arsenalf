
export interface ActiveUser {
    sub: number;
    username: string;
    iat: number;
    exp: number;
    isActive: boolean;
  }
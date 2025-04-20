export interface INotification {
    id: number,
    isRead: boolean,
    commentary: {
        commentary: string
    },
    user: {
        id: number,
        userName: string
    }
}
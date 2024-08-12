

export type TUser={
    id:string;
    password:string;
    role: 'guest' | 'admin' | 'receptionist' | 'manager' | 'housekeeper';
    status: 'in-progress' | 'blocked';
    isDeleted: boolean;
}
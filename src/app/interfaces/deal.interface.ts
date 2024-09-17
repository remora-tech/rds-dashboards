export interface Deal {
    _id: string;
    id: string;
    name: string;
    amount_montly: number;
    amount_unique: number;
    amount_total: number;
    prediction_date: any;
    markup: string;
    last_activity_at: any;
    interactions: number;
    markup_last_activities: any;
    created_at: string;
    updated_at: string;
    rating: number;
    markup_created: string;
    last_activity_content: any;
    user_changed: boolean;
    hold: any;
    win: any;
    closed_at: any;
    stop_time_limit: StopTimeLimit;
    user: User;
    deal_stage: DealStage;
    deal_source: DealSource;
    campaign: Campaign;
    contacts: Contact[];
    deal_custom_fields: any[];
    deal_products: any[];
}

export interface StopTimeLimit { }

export interface User {
    _id: string;
    id: string;
    name: string;
    nickname: string;
    email: string;
}

export interface DealStage {
    _id: string;
    id: string;
    name: string;
    nickname: string;
    created_at: string;
    updated_at: string;
}

export interface DealSource {
    _id: string;
    id: string;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface Campaign {
    _id: string;
    id: string;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface Contact {
    name: string;
    title: any;
    notes: any;
    facebook: any;
    linkedin: any;
    skype: any;
    birthday: any;
    emails: Email[];
    phones: Phone[];
}

export interface Email {
    email: string;
}

export interface Phone {
    phone: string;
    type: any;
}

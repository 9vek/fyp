use ic_cdk::export::{
    candid::{CandidType, Deserialize},
    Principal,
};

#[derive(Clone, Debug, CandidType, Deserialize)]
pub struct Account {
    pub identity: Principal,
    pub nickname: String,
    pub signature: String,
    pub level: u8,
    pub registration_time: String,
}

#[derive(Clone, Debug, CandidType, Deserialize)]
pub struct AccountForUpdate {
    pub nickname: String,
    pub signature: String,
}

#[derive(Clone, Debug, CandidType, Deserialize)]
pub struct Mail {
    pub identity: u64,
    pub owner: Principal,
    pub title: String,
    pub content: String,
    pub post_time: String,
}

#[derive(Clone, Debug, CandidType, Deserialize)]
pub struct MailForUpdate {
    pub title: String,
    pub content: String,
}
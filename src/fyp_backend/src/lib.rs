mod types;

use std::cell::RefCell;
use std::collections::HashMap;
use candid::Principal;
use ic_cdk_macros::{query, update};
use ic_cdk::api::{time, caller};
use crate::types::*;

pub struct State {
    pub accounts: HashMap<Principal, Account>,
    pub mails: HashMap<u64, Mail>,
}

impl Default for State {
    fn default() -> Self {
        State {
            accounts: HashMap::new(),
            mails: HashMap::new(),
        }
    }
}

impl State {

    pub fn has_account(&self, principal: Principal) -> bool {
        if self.accounts.contains_key(&principal) {
            true
        } else {
            false
        }
    }

    pub fn get_account_info(&self, principal: Principal) -> Account {
        self.accounts.get(&principal).unwrap().clone()
    }

    pub fn update_account_info(&mut self, principal: Principal, account_for_update: AccountForUpdate) -> Account {
        if !self.accounts.contains_key(&principal) {
            let account = Account {
                identity: principal, 
                nickname: account_for_update.nickname,
                signature: account_for_update.signature,
                level: 0,
                registration_time: time().to_string()
            };
            self.accounts.insert(principal, account.clone());
            account
        } else {
            let mut account = self.accounts.get_mut(&principal).unwrap();
            account.nickname = account_for_update.nickname;
            account.signature = account_for_update.signature;
            account.clone()
        }
    }

}

thread_local! {
    static STATE: RefCell<State> = RefCell::default();
}

#[query]
fn whoami() -> Principal {
    caller()
}

#[query]
fn is_account_exists() -> bool {
    STATE.with(|state| {
        let state = state.borrow();
        let principal = caller();
        state.has_account(principal)
    })
}

#[query]
fn get_account_info() -> Account {
    STATE.with(|state| {
        let state = state.borrow();
        let principal = caller();
        state.get_account_info(principal)
    })
}

#[update]
fn update_account_info(account_for_update: AccountForUpdate) -> Account {
    STATE.with(|state| {
        let mut state = state.borrow_mut();
        let principal = caller();
        state.update_account_info(principal, account_for_update)
    })
}

// #[query]
// fn test_get_account() -> Account {
//     Account { 
//         identity: caller(), 
//         nickname: "Test Account".to_string(), 
//         signature: "A piece of text".to_string(), 
//         level: 1, 
//         registration_time: time().to_string()
//     }
// }
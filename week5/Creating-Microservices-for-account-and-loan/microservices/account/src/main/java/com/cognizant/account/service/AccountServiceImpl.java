package com.cognizant.account.service;

import com.cognizant.account.dto.AccountDTO;
import org.springframework.stereotype.Service;

@Service
public class AccountServiceImpl implements AccountService {

    @Override
    public AccountDTO getAccountByNumber(String number) {
        // Dummy data; ideally, you'd fetch from DB or another service
        return new AccountDTO(number, "savings", 234343);
    }
}

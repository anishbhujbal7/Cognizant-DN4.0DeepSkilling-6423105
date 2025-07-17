package com.cognizant.account.controller;

import com.cognizant.account.dto.AccountDTO;
import com.cognizant.account.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/accounts")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @GetMapping("/{number}")
    public AccountDTO getAccountByNumber(@PathVariable String number) {
        return accountService.getAccountByNumber(number);
    }
}

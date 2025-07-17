package com.cognizant.loan.controller;

import com.cognizant.loan.dto.LoanDTO;
import com.cognizant.loan.service.LoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/loans")
public class LoanController {

    @Autowired
    private LoanService loanService;

    @GetMapping("/{number}")
    public LoanDTO getLoanByNumber(@PathVariable String number) {
        return loanService.getLoanByNumber(number);
    }
}

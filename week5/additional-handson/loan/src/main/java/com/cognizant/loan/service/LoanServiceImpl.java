package com.cognizant.loan.service;

import com.cognizant.loan.dto.LoanDTO;
import org.springframework.stereotype.Service;

@Service
public class LoanServiceImpl implements LoanService {

    @Override
    public LoanDTO getLoanByNumber(String number) {
        // Return dummy data
        return new LoanDTO(number, "car", 400000, 3258, 18);
    }
}

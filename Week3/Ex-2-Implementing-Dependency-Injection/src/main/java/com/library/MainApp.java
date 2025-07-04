package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {
    public static void main(String[] args) {
        // Load Spring context
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Get bookService bean from context
        BookService bookService = (BookService) context.getBean("bookService");

        // Use the service
        bookService.addBook("The Alchemist");
    }
}

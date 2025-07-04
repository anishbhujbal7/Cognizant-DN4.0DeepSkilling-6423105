package com.library.library_management.controller;

import com.library.library_management.entity.Book;
import com.library.library_management.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/library/books")
public class BookController {
    @Autowired
    private BookRepository  bookRepository;

    @GetMapping
    public List<Book> findAll() {
        return bookRepository.findAll();
    }
    @GetMapping("{id}")
    public Book findbook(@PathVariable Long id) {
        return bookRepository.findById(id).get();
    }
    @PostMapping
    public Book create(@RequestBody Book book) {
        return bookRepository.save(book);
    }
    @PutMapping
    public Book update(@RequestBody Book book) {
        return bookRepository.save(book);
    }
    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        bookRepository.deleteById(id);
    }
}

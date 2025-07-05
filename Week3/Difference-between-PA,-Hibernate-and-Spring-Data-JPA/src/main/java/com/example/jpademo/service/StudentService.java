package com.example.jpademo.service;

import com.example.jpademo.model.Student;
import com.example.jpademo.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repo;

    public void addStudent(String name, int age) {
        repo.save(new Student(name, age));
    }

    public List<Student> listAllStudents() {
        return repo.findAll();
    }
}

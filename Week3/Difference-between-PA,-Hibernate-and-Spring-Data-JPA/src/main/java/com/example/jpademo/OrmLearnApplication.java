package com.example.jpademo;

import com.example.jpademo.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class OrmLearnApplication implements CommandLineRunner {

    @Autowired
    private StudentService studentService;

    public static void main(String[] args) {
        SpringApplication.run(OrmLearnApplication.class, args);
    }

    @Override
    public void run(String... args) {
        studentService.addStudent("Anish", 22);
        studentService.addStudent("Varun", 24);

        studentService.listAllStudents().forEach(
                s -> System.out.println(s.getId() + " - " + s.getName() + " (" + s.getAge() + ")")
        );
    }
}

package react.basic.one.service;

import java.util.HashSet;
import java.util.Set;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Service;

import react.basic.one.domain.Employee;

// comment1 on master
// comment2 on master after branching
// c3 on master
// c4 on master
// c5 on master will merge without a merge commit
// c6 on master will merge without a merge commit, really
@Service
public class EmployeeService {

  Set<Employee> employees = new HashSet<>();
  
  public Set<Employee> getEmployees() {
    return employees;
  }
  
  @PostConstruct
  public void initi() {
    employees.add(new Employee(1, "Joe Smith", 32, 4, "finance"));
    employees.add(new Employee(2, "Jay Jones", 37, 4, "finance"));
    employees.add(new Employee(3, "Sara Anthony", 41, 4, "ops"));
    employees.add(new Employee(4, "Al Anderson", 21, 5, "finance"));
    employees.add(new Employee(5, "Henry Young", 54, 4, "finance"));
    employees.add(new Employee(6, "Sarah Henny", 27, 5, "ops"));
    employees.add(new Employee(7, "Natash Yates", 23, 1, "ops"));
  }

  public void deleteEmployee(int id) {
    Employee e = new Employee(id, null, 0, 0, null);
    System.out.println("removed " + employees.remove(e));
    
  }
}

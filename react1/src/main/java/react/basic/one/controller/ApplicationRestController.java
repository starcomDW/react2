package react.basic.one.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import react.basic.one.domain.Employee;
import react.basic.one.service.EmployeeService;

@RestController
public class ApplicationRestController {

  @Autowired
  private EmployeeService service;
  
  @RequestMapping(value = "/employees/get", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
  public Collection<Employee> getEmployees() {
    return service.getEmployees();
  }
  
  @RequestMapping(value = "/employees/delete/{id}", method=RequestMethod.DELETE)
  public void deleteEmployee(@PathVariable int id) {
    service.deleteEmployee(id);
  }
}

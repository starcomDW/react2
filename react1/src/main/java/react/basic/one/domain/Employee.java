package react.basic.one.domain;

public class Employee {

  private int id;
  private String name;
  private int age;
  private int years;
  private String department;
  
// deleted private zero arg constructor
  // add comment 1
  // comment 2
  // comment 3
  // comment 4
  // comment 5 (after add)
  public Employee(int id, String name, int age, int years, String department) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.years = years;
    this.department = department;
  }

  public int getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getAge() {
    return age;
  }

  public void setAge(int age) {
    this.age = age;
  }

  public int getYears() {
    return years;
  }

  public void setYears(int years) {
    this.years = years;
  }

  
  public String getDepartment() {
    return department;
  }

  
  public void setDepartment(String department) {
    this.department = department;
  }

  @Override
  public int hashCode() {
    final int prime = 31;
    int result = 1;
    result = prime * result + id;
    return result;
  }

  @Override
  public boolean equals(Object obj) {
    if (!(obj instanceof Employee)) {
      return false;
    }
    return id == ((Employee) obj).id;

  }
}

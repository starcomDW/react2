package react.basic.one.domain;

import java.util.HashSet;
import java.util.Set;

public class OrderStatus {
  
  private static final Set<String> editableStatuses = new HashSet<>();

  private int id;
  
  private String code;
  
  private String grouper;
  
  static {
    editableStatuses.add("Quote");
    editableStatuses.add("Approved");
  }
  
  public OrderStatus(){}
  
  public OrderStatus(int id, String code) {
    this.id = id;
    if (id % 2 == 0) {
      grouper = "z";
    }
    else {
      grouper = "xx";
    }
    this.code = code;
  }

  public int getId() {
    return id;
  }
  
  public void setId(int id) {
    this.id = id;
  }
  
  public String getCode() {
    return code;
  }
  
  public void setCode(String code) {
    this.code = code;
  }

  public boolean isEditable() {
    return editableStatuses.contains(code);
  }
  
  
  public String getGrouper() {
    return grouper;
  }

  
  public void setGrouper(String grouper) {
    this.grouper = grouper;
  }

  @Override
  public String toString() {
    return "OrderStatus [id=" + id + ", code=" + code + ", grouper=" + grouper + "]";
  }

}

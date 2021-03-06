package react.basic.one;

import static java.util.Comparator.comparing;
import static java.util.stream.Collectors.groupingBy;
import static java.util.stream.Collectors.toList;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;

import react.basic.one.domain.OrderStatus;
// four merge1
//@SpringBootApplication
public class ReactOneApplication {
 
    public static void main(String[] args) {
      new ReactOneApplication().oneA();
      //  SpringApplication.run(ReactOneApplication.class, args);// add this comment on master
   // copied this over in merge tool, comment it out     SpringApplication.run(ReactOneApplication.class, args);// change on mergeOne that will have a conflict
    }
    
    @Bean
  public CommandLineRunner doStuff() {
    return args -> {
      oneA();
    };
  }

    @SuppressWarnings("unused")
    private void one() {
      System.out.println("start");
      int i = 0;
      List<OrderStatus> l = Arrays.asList(new OrderStatus(i++, "g"), new OrderStatus(i++, "h"),
        new OrderStatus(i++, "a"), new OrderStatus(i++, "z"), new OrderStatus(i++, "b"), new OrderStatus(i++, "n"),
        new OrderStatus(i++, "y"));
      l.forEach(System.out::println);
      System.out.println("=========================");
      List<OrderStatus> l2 = l.stream().sorted(comparing(OrderStatus::getCode)).collect(toList());
      l2.forEach(System.out::println);
      System.out.println("done");
    }
    
    private void oneA() {
      System.out.println("start");
      int i = 0;
      List<OrderStatus> l = Arrays.asList(new OrderStatus(i++, "g"), new OrderStatus(i++, "h"),
        new OrderStatus(i++, "a"), new OrderStatus(i++, "z"), new OrderStatus(i++, "b"), new OrderStatus(i++, "n"), new OrderStatus(i++, "w"),
        new OrderStatus(i++, "y"));
      l.forEach(System.out::println);
      System.out.println("=========================");
      Map<String, List<OrderStatus>> m = l.stream().collect(groupingBy(OrderStatus::getGrouper));
      m.entrySet().stream().map(me -> me.getKey() + "::" + me.getValue()).forEach(System.out::println);
      
//      Map<String, List<OrderStatus>> m2 = l.stream().collect(groupingBy(
//        OrderStatus::getGrouper, toSortedList(OrderStatus::getCode)));
//      m2.entrySet().stream().map(me -> me.getKey() + "::" + me.getValue()).forEach(System.out::println);
    }

}

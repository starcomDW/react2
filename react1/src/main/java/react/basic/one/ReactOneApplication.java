package react.basic.one;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// four merge1
@SpringBootApplication
public class ReactOneApplication {
 
    public static void main(String[] args) {
        SpringApplication.run(ReactOneApplication.class, args);// add this comment on master
   // copied this over in merge tool, comment it out     SpringApplication.run(ReactOneApplication.class, args);// change on mergeOne that will have a conflict
    }
}

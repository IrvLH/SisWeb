package registro;
import static spark.Spark.*;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        staticFiles.location("/");
        /*System.out.println( "Hello World!" );

        get("/", (req, res) -> {
            return "respuesta";
        });

        get("/hey", (req, res) -> {
            res.redirect("/hey.html");
            return null;
        });*/
        port(getHerokuAssignedPort());
        get("/hello", (req, res) -> {
                res.redirect("/hey.html");
                return null;
            }
        );
    }

    static int getHerokuAssignedPort() {
        ProcessBuilder processBuilder = new ProcessBuilder();
        if (processBuilder.environment().get("PORT") != null) {
            return Integer.parseInt(processBuilder.environment().get("PORT"));
        }
        return 4567; //return default port if heroku-port isn't set (i.e. on localhost)
    }
}

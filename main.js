public class Main
{
   public static void main(String args[])
   {
      try
      {
         Runtime rt = Runtime.getRuntime();
         String cmdString = "cmd /c dir";

         System.out.println(cmdString);
         Process pr = rt.exec(cmdString);

         BufferedReader input = new BufferedReader(new InputStreamReader(
                                                   pr.getInputStream()));

         String line = null;

         while ((line = input.readLine()) != null)
         {
            System.out.println(line);
         }

         int exitVal = pr.waitFor();
         System.out.println("Exited with error code " + exitVal);

      }
      catch (Exception e)
      {
         System.out.println(e.toString());
         e.printStackTrace();
      }
   }
                           }
public class Main
{
   public static void main(String args[])
   {
      try
      {
         Runtime rt = Runtime.getRuntime();
         String imageFilePath = "\"C:\\Program Files (x86)\\Tesseract-OCR\\doc\\eurotext.tif\"";
         String outputFilePath = "\"C:\\Users\\Dreadnought\\Documents\\TestingFolder\\eurotext-example\"";
         String[] commands = {"cmd", "/c", "tesseract", imageFilePath, outputFilePath };

         Process pr = rt.exec(commands);

         BufferedReader input = new BufferedReader(new InputStreamReader(
               pr.getInputStream()));

         String line = null;

         while ((line = input.readLine()) != null)
         {
            System.out.println(line);
         }

         int exitVal = pr.waitFor();
         System.out.println("Exited with error code " + exitVal);
      }
      catch (Exception e)
      {
         System.out.println(e.toString());
         e.printStackTrace();
      }
   }
           }

<!-- # React.js -->

1. There are installers with every language that allows you to install some libraries.For react with node.js there are npm(node package manager) and npx(node package excecuter) installers.
2. For creating basic react app we use npx create-react-app , where create-react-app is a utility(software) and using this software we can create our new project.
3. But nowdays we use vite or parcel because this is very bulky utility.

<!-- info related to file structure and file path-->

 A file path is a way to specify the location of a file or directory in a computer's file system.
 It acts like an address that tells the operating system where to find the file or folder. 
 File paths can be "absolute or relative", and they differ depending on the operating system.

 1.Absolute File Path:

          Specifies the complete location of a file or folder starting from the root directory.
          Always starts from the root directory (/ in Unix-based systems like Linux and macOS, or a drive letter like C:\ in Windows).
          Example:
          Windows: C:\Users\Shailja\Documents\example.txt
          Unix/Linux: /home/shailja/documents/example.txt

2.Relative File Path:

          Specifies the location of a file or folder relative to the current working directory.
          Does not start with a root directory or drive letter.
          Example:
          documents/example.txt (relative to the current folder)
          ../example.txt (go up one directory and find example.txt)

          <!-- in relative file path there are these special characters that help us navigate to files -->

<!-- .. --> when we write these two double dots at the begining of the relative file path it means to go up a level and then navigate to the file or directory written after / .
<!-- ./ --> these dot and forward slash is another speacial character that helps to tell to stay in the current directory, and look over there for file we want to navigate.
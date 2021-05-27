import unittest
import readfiles

class TestReadFiles(unittest.TestCase): #first we set up test class
    """
    Class to test the functions on the readfiles modules

    Args:
        unittest.TestCase: Class from the unittest module to create unit tests.
    """

    def test_get_data(self):
      """
      Test case to confirm that we are getting data from the file
      """
      with open("test.txt","r") as handle: #testing to see if we are actually getting data from text file"
        data = handle.read()
        self.assertEqual(data,readfiles.read_file("test.txt")) # comparing it to readfiles.readfile() func that returns data from file

    
    def test_nonfile(self):
      """
      Test to confirm that an exception is raised when a wrong file is inputted
      """
      self.assertEqual(None,readfiles.read_file("tests.txt")) # expect to get a NONE response from calling readfiles.readfile() func.


if __name__ == "__main__":
    unittest.main()
    


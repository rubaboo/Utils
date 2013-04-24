//最长回文串
//有O(n)的Manacher算法，不过好难写。。。
import scala.math;
object Palindrome
{
	def main(args : Array[String])
	{
		def isPalindrome(x : String): Boolean =
		{
			x equals x.reverse
		}

		def Palindrome(x : String): Int =
		{
			val len = x.length
			val cases = for {
				i <- (0 to len)
				j <- (i+1 to len)
			} yield x substring(i,j)
			println(cases filter(isPalindrome(_)) filter(_.length>0) mkString(","))
			cases filter(isPalindrome(_)) map(_.length) reduceLeft(math.max(_ , _))
		}

		val x = readLine()
		println(Palindrome(x));
	}
}
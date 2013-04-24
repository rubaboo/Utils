//瓶子问题
import scala.annotation.tailrec
object Bottle
{
	val N_Bottle = 3
	def main(args : Array[String])
	{
		val n = readLine toInt
		@tailrec
		def solve(full : Int, empty : Int = 0, drinked : Int = 0) : Int =
		{
			if(full != 0)
			{
				solve(0, empty+full, drinked+full)
			}
			else if(empty < N_Bottle)
			{
				drinked
			}
			else
			{
				solve(empty / N_Bottle, empty % N_Bottle, drinked)
			}
		}
		println(solve(n))
	}
}

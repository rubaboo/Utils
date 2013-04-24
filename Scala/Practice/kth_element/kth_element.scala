import scala.annotation.tailrec
import scala.util.Random
import scala.util.control.Breaks._

object kth_element {
	def main(args: Array[String]) {
		while(true) {
			val line = readLine
			if(line == null) { break }
			val a = line split(" ") map(_.toInt)
			val x = readInt
			val rand = new Random(System.currentTimeMillis());

			@tailrec
			def nth(array: Array[Int], k: Int): Int = {
				val flag = array(rand.nextInt(array.length))
				val l = array filter(_ <= flag)
				val r = array filter(_ > flag)
				if(l.length == k) { flag }
				else if(l.length > k) { nth(l, k) }
				else { nth(r, k-l.length) }
			}

			println(nth(a,x))
		}
	}
}

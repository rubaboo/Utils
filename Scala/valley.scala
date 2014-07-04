import scala.annotation.tailrec;

object Valley {
    def main(args:Array[String]) {
        for (ln <- io.Source.stdin.getLines) {
            val ll = ln split(" ") map(_ toInt) toList;
            if ( ll(0) < ll(1) ) println(0)
            else if (ll(ll.length-2) > ll(ll.length - 1)) println(ll.length - 1);
            else println(solve(0, ll))
        }
    }

    @tailrec
    def solve(base: Int, ll: List[Int]): Int = {
        //println(ll.mkString(" "))
        val mid = ll.length / 2
        val left = ll.slice(0, mid)
        val right = ll.slice(mid + 1, ll.length)
        val midval = ll(mid)

        if (left.last < midval)
            solve(base, left ++ (midval :: List[Int]()))
        else if (midval > right.head)
            solve(base + left.length, midval :: right)
        else
            base + mid
    }
}


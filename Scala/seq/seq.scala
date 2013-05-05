import scala.annotation.tailrec

object seq {
    def main(args: Array[String]) {
        @tailrec def intPow(a: Int, b: Int, c: Int = 1 ): Int = {
            b match {
                case 0 => c
                case 1 => a*c
                case x if x % 2 == 0 => intPow(a*a, b>>1,c)
                case _ => intPow(a*a,b>>1,c*a)
            }
        }

        @tailrec def solve(l: List[Char], res: Int = 0): Int = {
            l match {
                case Nil => res
                case _ => solve(l.init, res + intPow(4,l.length-1) * (l.last-'a'+1)) 
            }
        }

        while(true) {
            println(solve(readLine().toList))
        }
    }
}

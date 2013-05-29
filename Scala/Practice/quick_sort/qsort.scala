object qsort {
    def main(args: Array[String]) {
        val l = readLine().split(" ").map(_.toInt).toList

        def qsort(l: List[Int]): List[Int] = {
            l match {
                case Nil => Nil
                case x::xs => {
                    val (left, right) = xs.partition(_ < x)
                    qsort(left) ++ (x :: qsort(right))
                }
            }
        }

        println(qsort(l).mkString(" "))
    }
}
object topK {
    def topK(k: Int, l: List[Int]): List[Int] = {
        l match {
            case x :: xs => {
                val (left, right) = xs.partition(_ < x)
                left.length match {
                    case y if y + 1 == k => x :: left
                    case y if y == k => left
                    case y if y > k => topK(k, left)
                    case y if y < k - 1 => x :: left ++ topK(k - left.length - 1, right)
                    case _ => Nil
                }
            }
            case _ => Nil
        }
    }
    def main(args: Array[String]) {
        val input = readLine.split(" ").map(_.toInt).toList
        input match {
            case k :: l => println(topK(k, l).mkString(" "))
            case _ => println("Error")
        }
    }
}
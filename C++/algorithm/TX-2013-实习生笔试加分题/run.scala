import scala.annotation.tailrec
object run
{
    def main(args: Array[String]) {
        @tailrec
        def slove(t:Int): Unit = {
            t match {
                case x if x>0 => {
                    val n = readInt()
                    val l = readLine() split(" ") map(_.toInt)
                    val r = Array.fill[Int](n)(1)
                    @tailrec
                    def _slove(ptr: Int, a: Int, b: Int): Unit = {
                        ptr match {
                            case 0 => {

                            }
                            case _ => {
                                r(ptr)*=a
                                r(n-1-ptr)*=b
                            }
                        }
                        ptr match {
                            case x if x+1<n => _slove(ptr+1, a*l(ptr), b*l(n-1-ptr))
                            case _ => {}
                        }
                    }

                    _slove(0,1,1)
                    println(r.map(_.toString).mkString(" ") + " ")
                    slove(t-1)
                }
                case _ => {}
            }
        }

        val T = readInt()
        slove(T)
    }
}


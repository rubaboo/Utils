import scala.math.max
object Seg_Tree {
    class node(val l: Int, val r: Int,
               var lazy_val: Int = 0,
               var maxi: Int = 0) {
        def get_mid(): Int = (l+r)>>1
        def equal(il: Int, ir: Int): Boolean = l == il && r == ir
    }

    class seg_tree {
        val ROOT = 0
        val SIZE = 10240
        private val stree = new Array[node](SIZE * 8)
        def left(x: Int) = 2 * x + 1
        def right(x: Int) = 2 * x + 2
        def init(l: Int, r:Int, pos: Int = ROOT):Unit = {
            stree(pos) = new node(l, r)
            if(l < r) {
                val m = (l + r) >> 1
                init(l, m, left(pos))
                init(m+1, r, right(pos))
            }
        }
        def add(l: Int, r: Int, v: Int, pos: Int = ROOT):Unit = {
            if(stree(pos).equal(l, r)) {
                stree(pos).lazy_val += v
                stree(pos).maxi += v
            }
            else {
                val m = stree(pos).get_mid()
                if(stree(pos).lazy_val != 0) {
                    add(stree(pos).l, m, stree(pos).lazy_val, left(pos))
                    add(m+1, stree(pos).r, stree(pos).lazy_val, right(pos))
                    stree(pos).lazy_val = 0
                }
                if(l > m) add(l, r, v, right(pos))
                else if(r <= m) add(l, r, v, left(pos))
                else {
                    add(l, m, v, left(pos))
                    add(m+1, r, v, right(pos))
                }
                stree(pos).maxi = max(stree(left(pos)).maxi, stree(right(pos)).maxi)
            }
        }
        def get_max(): Int = stree(ROOT).maxi
    }
    
    class scanl(val pos: Int, val a: Int, val b: Int, val c:Int) {
        override def toString(): String = {
            pos.toString + "(" + a.toString + " " + b.toString + ")" + "**" + c.toString + "**"
        }
    }
    class star(val x: Int, val y: Int, val c: Int)

    def main(args: Array[String]) {
        while(true)
        {
            val inf = 1 << 29
            val Array(n, w, h) = readLine.split(" ").map(_.toInt)
            val stree = new seg_tree
            stree.init(0,2*n)
            val stars = for(i <- 0 until n;
                           Array(a, b, c) = readLine.split(" ").map(_.toInt)
                        ) yield new star(a, b, c)
            val ys = stars.map(s => List(s.y, s.y + h-1))
                          .flatten
                          .sortWith(_ < _)
                          .distinct
                          .zipWithIndex
                          .toMap
            val scan_line = for(star <- stars)
                                yield List(new scanl(star.x, star.y, star.y+h-1, star.c),
                                           new scanl(star.x+w-1, star.y, star.y+h-1, -star.c))
            var ans = -inf;
            for(line <- scan_line.flatten
                                 .map(x => new scanl(x.pos, ys(x.a), ys(x.b), x.c))
                                 .sortWith{
                case(s1, s2) => s1.pos < s2.pos || (s1.pos == s2.pos && s1.c > s2.c)
            }) {
                stree.add(line.a, line.b, line.c)
                ans = max(ans, stree.get_max())
            }
            println(ans)
        }
    }
}
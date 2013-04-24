//归并排序
object MergeSort
{
	def main(args:Array[String]) {
		val a = readLine split(" ") map(_ toInt) toList
		val b = readLine split(" ") map(_ toInt) toList
		def merge_sort(a : List[Int], b: List[Int]): List[Int] = {
			a match {
				case Nil => b
				case _   => b match 
				{
					case Nil => a
					case x::xs  => 
					{
						if(x<a.head)
							x :: merge_sort(a,xs)
						else
							a.head :: merge_sort(a tail, b)	
					}
				}
			}
		}
		println(merge_sort(a,b).mkString(" "))
	}
}

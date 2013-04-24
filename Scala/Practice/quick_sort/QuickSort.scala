object Scala
{
	def main(args : Array[String])
	{
		val x = readLine split(" ") map(_ toInt) toList

		def Quicksort(array : List[Int]): List[Int] =
		{
			array match {
				case Nil => Nil
				case x::xs =>
				{
					Quicksort(xs filter(_<=x)) ++ (x :: Quicksort(xs filter(_>x)))
				}
			}
		}

		println(Quicksort(x) mkString(","))
	}
}
			